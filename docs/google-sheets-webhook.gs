/**
 * Google Apps Script webhook for TUF Networks invitation requests.
 *
 * Setup (bound script — easiest):
 * 1. Open the Google Sheet, then Extensions > Apps Script.
 * 2. Paste this file, then change SECRET below to a long random string.
 * 3. Leave SPREADSHEET_ID empty.
 *
 * Setup (standalone script — use this if the Extensions menu fails):
 * 1. Open https://script.google.com > New project.
 * 2. Paste this file, change SECRET, and set SPREADSHEET_ID to the ID from
 *    https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit.
 *
 * Deploy:
 * 1. Deploy > New deployment > Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 2. Copy the /exec URL and set it as ENQUIRY_WEBHOOK_URL in the website,
 *    including the secret as a query parameter:
 *    https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec?token=<SECRET>
 * 3. After any code change, use Deploy > Manage deployments > edit >
 *    New version > Deploy, otherwise the old version keeps running.
 */

const SECRET = 'PASTE_A_LONG_RANDOM_SECRET';
const SPREADSHEET_ID = '';
const SHEET_NAME = 'Applications';
const HEADERS = [
  'Submitted At',
  'Name',
  'Email',
  'Building',
  'Link',
  'Curious',
  'Why',
  'Consent',
  'Type',
  'Source',
];

function doGet(e) {
  if (!isAuthorized(e)) {
    return json({ ok: false, error: 'unauthorized' });
  }
  return json({ ok: true, message: 'TUF webhook is live' });
}

function doPost(e) {
  try {
    if (!isAuthorized(e)) {
      return json({ ok: false, error: 'unauthorized' });
    }

    const body = JSON.parse(e.postData.contents);
    const sheet = getSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow([
        body.submittedAt ? new Date(body.submittedAt) : new Date(),
        text(body.name),
        text(body.email),
        text(body.building),
        text(body.link),
        text(body.curious),
        text(body.why),
        body.consent ? 'Yes' : 'No',
        text(body.type),
        text(body.source),
      ]);
    } finally {
      lock.releaseLock();
    }

    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, error: String(error) });
  }
}

function isAuthorized(e) {
  return !SECRET || ((e && e.parameter && e.parameter.token) || '') === SECRET;
}

function getSheet() {
  const spreadsheet = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error(
      'No spreadsheet found. For a standalone script, set SPREADSHEET_ID to the sheet ID.',
    );
  }

  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function text(value) {
  const stringValue = value == null ? '' : String(value);
  // Prefix formula-like values so they are stored as text, not executed.
  return stringValue.slice(0, 5000).replace(/^[=+\-@]/, "'$&");
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
