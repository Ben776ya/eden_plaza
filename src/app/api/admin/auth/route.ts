import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getAdminHashes } from "@/lib/sheets";

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "change-me-in-production";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    const hashes = await getAdminHashes();
    if (hashes.length === 0) {
      return NextResponse.json({ error: "Aucun admin configuré" }, { status: 401 });
    }

    let valid = false;
    for (const hash of hashes) {
      if (await bcrypt.compare(password, hash)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_auth", SESSION_SECRET, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  } catch (err) {
    console.error("[POST /api/admin/auth]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("admin_auth");
  return response;
}
