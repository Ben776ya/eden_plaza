import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get("admin_auth");
  const expected = process.env.ADMIN_SESSION_SECRET ?? "change-me-in-production";
  return cookie?.value === expected;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { method } = request;

  // Protect admin UI pages (except login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!isAuthenticated(request)) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Protect devis read/update/delete — allow POST from the public form
  if (pathname.startsWith("/api/devis") && method !== "POST") {
    if (!isAuthenticated(request)) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/devis/:path*", "/api/devis"],
};
