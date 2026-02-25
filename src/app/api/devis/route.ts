import { NextResponse } from "next/server";
import { getAllDevis, appendDevis } from "@/lib/supabase";

export async function GET() {
  try {
    const rows = await getAllDevis();
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[GET /api/devis]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const id = await appendDevis({
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      phone: String(body.phone ?? ""),
      service: String(body.service ?? ""),
      message: String(body.message ?? ""),
    });
    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("[POST /api/devis]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
