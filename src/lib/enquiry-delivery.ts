import "server-only";

import type { Enquiry } from "@/lib/validation/enquiry";

const DELIVERY_TIMEOUT_MS = 15_000;

export type DeliveryResult =
  { delivered: true } | { delivered: false; reason: "not_configured" | "delivery_failed" };

function webhookUrl(): string | null {
  const value = process.env.ENQUIRY_WEBHOOK_URL?.trim();
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function getContactEmail(): string | undefined {
  const value = process.env.ENQUIRY_CONTACT_EMAIL?.trim().toLowerCase();
  if (!value || value.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
    return undefined;
  }
  return value;
}

/**
 * Apps Script web apps always return HTTP 200, even when the script fails.
 * Inspect JSON responses so `{ ok: false }` is treated as a failed delivery.
 * Non-JSON 2xx responses (used by many generic webhook providers) still pass.
 */
async function providerRejected(response: Response): Promise<boolean> {
  let raw: string;

  try {
    raw = await response.text();
  } catch {
    return false;
  }

  if (!raw.trim()) return false;

  try {
    const body = JSON.parse(raw) as { ok?: unknown; error?: unknown };
    if (body?.ok === false) {
      const reason = typeof body.error === "string" ? body.error : "unknown error";
      console.error(`[enquiries] Delivery provider rejected the submission (${reason}).`);
      return true;
    }
  } catch {
    // Ignore non-JSON bodies.
  }

  return false;
}

export async function deliverEnquiry(enquiry: Enquiry): Promise<DeliveryResult> {
  const endpoint = webhookUrl();
  if (!endpoint) return { delivered: false, reason: "not_configured" };

  const payload: Record<string, unknown> = {
    ...enquiry,
    submittedAt: new Date().toISOString(),
    source: "tufnetworks-website",
  };
  delete payload.companyWebsite;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "User-Agent": "TUF-Networks-Website/1.0",
  };

  const token = process.env.ENQUIRY_WEBHOOK_TOKEN?.trim();
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`[enquiries] Delivery provider returned HTTP ${response.status}.`);
      return { delivered: false, reason: "delivery_failed" };
    }

    if (await providerRejected(response)) {
      return { delivered: false, reason: "delivery_failed" };
    }

    return { delivered: true };
  } catch (error) {
    const name = error instanceof Error ? error.name : "UnknownError";
    console.error(`[enquiries] Delivery failed (${name}).`);
    return { delivered: false, reason: "delivery_failed" };
  }
}
