import { SignJWT, jwtVerify } from "jose";

const encoder = new TextEncoder();

const ADMIN_COOKIE_NAME = "admin_session";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";
const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET ?? "";

function getSecretKey() {
  return encoder.encode(ADMIN_JWT_SECRET);
}

export function getAdminCookieName() {
  return ADMIN_COOKIE_NAME;
}

export function isAdminCredentialsConfigured() {
  return Boolean(ADMIN_EMAIL && ADMIN_PASSWORD && ADMIN_JWT_SECRET);
}

export function isAuthorizedAdminEmail(email: string) {
  return email.trim().toLowerCase() === ADMIN_EMAIL.trim().toLowerCase();
}

export function isValidAdminLogin(email: string, password: string) {
  return isAuthorizedAdminEmail(email) && password === ADMIN_PASSWORD;
}

export async function createAdminSessionToken(email: string) {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(getSecretKey());
}

export async function verifyAdminSessionToken(token: string) {
  try {
    const result = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"]
    });

    const payloadEmail = result.payload.email;
    return typeof payloadEmail === "string" && isAuthorizedAdminEmail(payloadEmail);
  } catch {
    return false;
  }
}
