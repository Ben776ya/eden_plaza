import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL ?? "admin@edenplaza.ma";
    const adminPassword = process.env.ADMIN_PASSWORD ?? "admin1234";
    const sessionSecret = process.env.ADMIN_SESSION_SECRET ?? "local-dev-secret-eden";

    const { email, password } = await request.json();

    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json({ error: "Identifiants incorrects" }, { status: 401 });
    }

    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_auth", sessionSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return res;
  } catch (err) {
    console.error("[POST /api/admin/auth]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete("admin_auth");
  return res;
}
