import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, age, domisili, instagram, tiktok, pekerjaan, goals, program, expectations } = body;

    // Cek konfigurasi ENV
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.warn("Spreadsheet credentials not found in .env.local. Skipping sheet insertion.");
      return NextResponse.json({ success: true, message: "Mock success (Missing ENV variables)" });
    }

    // Otentikasi Google Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    // Masukkan data ke dalam Spreadsheet
    // Format Kolom: Waktu | Nama | Umur | Domisili | Instagram | TikTok | Pekerjaan | Program | Goals | Expectations
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:J", // Pastikan nama Sheet di Google Sheets adalah "Sheet1"
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }), // Timestamp
            fullName,
            age,
            domisili,
            instagram,
            tiktok || "-",
            pekerjaan,
            program,
            goals,
            expectations || "-",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error writing to spreadsheet:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
