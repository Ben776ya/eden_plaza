import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getAdminHash } from "@/lib/supabase";

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "change-me-in-production";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const hash = await getAdminHash(email);
    if (!hash || !(await bcrypt.compare(password, hash))) {
      return NextResponse.json({ error: "Identifiants incorrects" }, { status: 401 });
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
