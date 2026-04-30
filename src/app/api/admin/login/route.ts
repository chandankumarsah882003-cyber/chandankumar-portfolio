import { NextResponse } from "next/server";
import {
  createAdminSessionToken,
  getAdminCookieName,
  isAdminCredentialsConfigured,
  isValidAdminLogin
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminCredentialsConfigured()) {
    return NextResponse.json(
      { error: "Admin auth is not configured. Add ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_JWT_SECRET." },
      { status: 500 }
    );
  }

  const body = (await request.json()) as { email?: string; password?: string };
  const email = body.email ?? "";
  const password = body.password ?? "";

  if (!isValidAdminLogin(email, password)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = await createAdminSessionToken(email);
  const response = NextResponse.json({ ok: true });

  response.cookies.set(getAdminCookieName(), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12
  });

  return response;
}
