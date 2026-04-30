import { NextRequest, NextResponse } from "next/server";
import { getAdminCookieName } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isAdminApiPath = request.nextUrl.pathname.startsWith("/api/admin/content");

  if (!isAdminPath && !isAdminApiPath) {
    return NextResponse.next();
  }

  const token = request.cookies.get(getAdminCookieName())?.value;
  const isValid = Boolean(token);

  if (isValid) {
    return NextResponse.next();
  }

  if (isAdminApiPath) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/content"]
};
