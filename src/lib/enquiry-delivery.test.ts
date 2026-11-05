import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { deliverEnquiry, getContactEmail } from "@/lib/enquiry-delivery";

const ENQUIRY = {
  type: "application" as const,
  name: "Ada Lovelace",
  email: "ada@example.com",
  building: "An early-stage computing studio.",
  link: "",
  curious: "",
  why: "I want to build with people who care about difficult, useful problems.",
  consent: true,
  companyWebsite: "",
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const fetchMock = vi.fn();

beforeEach(() => {
  vi.stubGlobal("fetch", fetchMock);
  vi.stubEnv("ENQUIRY_WEBHOOK_URL", "https://hooks.example.com/tuf");
  vi.stubEnv("ENQUIRY_WEBHOOK_TOKEN", "");
  fetchMock.mockReset();
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("deliverEnquiry", () => {
  it("reports not configured when no webhook URL is set", async () => {
    vi.stubEnv("ENQUIRY_WEBHOOK_URL", "");

    const result = await deliverEnquiry(ENQUIRY);

    expect(result).toEqual({ delivered: false, reason: "not_configured" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts the enquiry without the honeypot field", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ ok: true }));

    const result = await deliverEnquiry(ENQUIRY);

    expect(result).toEqual({ delivered: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://hooks.example.com/tuf");

    const payload = JSON.parse(String(init.body)) as Record<string, unknown>;
    expect(payload).toMatchObject({
      type: "application",
      name: "Ada Lovelace",
      email: "ada@example.com",
      source: "tufnetworks-website",
    });
    expect(payload.companyWebsite).toBeUndefined();
    expect(payload.submittedAt).toEqual(expect.any(String));
  });

  it("treats an Apps Script { ok: false } response as a failed delivery", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ ok: false, error: "unauthorized" }));

    const result = await deliverEnquiry(ENQUIRY);

    expect(result).toEqual({ delivered: false, reason: "delivery_failed" });
  });

  it("treats an empty 2xx response as delivered", async () => {
    fetchMock.mockResolvedValue(new Response("", { status: 200 }));

    const result = await deliverEnquiry(ENQUIRY);

    expect(result).toEqual({ delivered: true });
  });

  it("treats a non-JSON 2xx response as delivered", async () => {
    fetchMock.mockResolvedValue(new Response("OK", { status: 200 }));

    const result = await deliverEnquiry(ENQUIRY);

    expect(result).toEqual({ delivered: true });
  });

  it("fails when the provider returns a non-2xx status", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ ok: true }, 502));

    const result = await deliverEnquiry(ENQUIRY);

    expect(result).toEqual({ delivered: false, reason: "delivery_failed" });
  });

  it("fails when the request throws", async () => {
    fetchMock.mockRejectedValue(new Error("Network unavailable"));

    const result = await deliverEnquiry(ENQUIRY);

    expect(result).toEqual({ delivered: false, reason: "delivery_failed" });
  });
});

describe("getContactEmail", () => {
  it("returns a normalised valid address", () => {
    vi.stubEnv("ENQUIRY_CONTACT_EMAIL", "  Hello@Example.COM ");

    expect(getContactEmail()).toBe("hello@example.com");
  });

  it("ignores invalid addresses", () => {
    vi.stubEnv("ENQUIRY_CONTACT_EMAIL", "not-an-email");

    expect(getContactEmail()).toBeUndefined();
  });
});
