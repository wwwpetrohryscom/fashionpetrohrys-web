import { NextRequest, NextResponse } from "next/server";
import { validateContent } from "@/lib/content-guard";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeEmail, sanitizePlainText } from "@/lib/sanitize";
import { verifyTurnstileToken } from "@/lib/turnstile";

export const runtime = "nodejs";

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const limit = rateLimit(`contact:${ip}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 },
    );
  }

  const formData = await request.formData();

  const honeypot = sanitizePlainText(formData.get("company_website"), 200);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitizePlainText(formData.get("name"), 120);
  const email = sanitizeEmail(formData.get("email"));
  const message = sanitizePlainText(formData.get("message"), 3000);
  const turnstileToken = sanitizePlainText(
    formData.get("cf-turnstile-response"),
    2048,
  );

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (process.env.TURNSTILE_SECRET_KEY) {
    const turnstile = await verifyTurnstileToken(turnstileToken, ip);

    if (!turnstile.success) {
      return NextResponse.json(
        { error: "Bot verification failed." },
        { status: 400 },
      );
    }
  }

  const validation = validateContent({
    body: message,
    minWords: 8,
    maxOutboundLinks: 1,
  });

  if (!validation.ok) {
    return NextResponse.json(
      {
        error: "Message did not pass quality checks.",
        details: validation.errors,
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    remaining: limit.remaining,
  });
}
