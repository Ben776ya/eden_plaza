import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

function createAuth() {
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64 ?? "", "base64").toString("utf-8")
  );
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: SCOPES,
  });
}

function getSheets() {
  return google.sheets({ version: "v4", auth: createAuth() });
}

export type DevisRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: string;
};

function toDevis(row: string[]): DevisRow {
  return {
    id: row[0] ?? "",
    name: row[1] ?? "",
    email: row[2] ?? "",
    phone: row[3] ?? "",
    service: row[4] ?? "",
    message: row[5] ?? "",
    date: row[6] ?? "",
    status: row[7] ?? "pending",
  };
}

export async function getAllDevis(): Promise<DevisRow[]> {
  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "devis!A2:H",
  });
  return ((res.data.values ?? []) as string[][]).map(toDevis);
}

export async function appendDevis(
  data: Pick<DevisRow, "name" | "email" | "phone" | "service" | "message">
): Promise<string> {
  const sheets = getSheets();
  const id = Date.now().toString();
  const date = new Date().toLocaleString("fr-FR");
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "devis!A:H",
    valueInputOption: "RAW",
    requestBody: {
      values: [[id, data.name, data.email, data.phone, data.service, data.message, date, "pending"]],
    },
  });
  return id;
}

export async function toggleDevisStatus(id: string): Promise<void> {
  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "devis!A2:H",
  });
  const rows = (res.data.values ?? []) as string[][];
  const idx = rows.findIndex((r) => r[0] === id);
  if (idx === -1) return;

  const currentStatus = rows[idx][7] ?? "pending";
  const newStatus = currentStatus === "done" ? "pending" : "done";

  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `devis!H${idx + 2}`,
    valueInputOption: "RAW",
    requestBody: { values: [[newStatus]] },
  });
}

export async function deleteDevisById(id: string): Promise<void> {
  const sheets = getSheets();

  // Find row index
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "devis!A2:A",
  });
  const ids = (res.data.values ?? []) as string[][];
  const idx = ids.findIndex((r) => r[0] === id);
  if (idx === -1) return;

  // Get numeric sheetId for the "devis" tab
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const sheet = meta.data.sheets?.find((s) => s.properties?.title === "devis");
  const sheetId = sheet?.properties?.sheetId ?? 0;

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId,
              dimension: "ROWS",
              startIndex: idx + 1, // 0-based; +1 skips the header row
              endIndex: idx + 2,
            },
          },
        },
      ],
    },
  });
}

export async function getAdminHashes(): Promise<string[]> {
  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "admins!B2:B",
  });
  return ((res.data.values ?? []) as string[][])
    .map((r) => r[0])
    .filter(Boolean);
}
