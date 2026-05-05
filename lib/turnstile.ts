type TurnstileVerificationResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(token: string, ip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return {
      success: false,
      errors: ["TURNSTILE_SECRET_KEY is not configured."],
    };
  }

  if (!token) {
    return {
      success: false,
      errors: ["Turnstile token is missing."],
    };
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    },
  );

  if (!response.ok) {
    return {
      success: false,
      errors: ["Turnstile verification request failed."],
    };
  }

  const result = (await response.json()) as TurnstileVerificationResponse;

  return {
    success: result.success,
    errors: result["error-codes"] ?? [],
  };
}
