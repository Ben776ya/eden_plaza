import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ?? "local-dev-secret-eden";

function isAuthenticated(request: NextRequest): boolean {
  return request.cookies.get("admin_auth")?.value === SESSION_SECRET;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { method } = request;

  // Protect admin UI (except login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!isAuthenticated(request)) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Protect devis API reads/mutations — allow public POST (form submission)
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
