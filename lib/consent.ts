export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const CONSENT_STORAGE_KEY = "fashion_area_cookie_consent";
export const CONSENT_UPDATED_EVENT = "fashion-area:cookie-consent-updated";
export const OPEN_COOKIE_SETTINGS_EVENT = "fashion-area:open-cookie-settings";

function normalizeConsent(value: unknown): ConsentState | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Partial<ConsentState>;

  return {
    necessary: true,
    analytics: candidate.analytics === true,
    marketing: candidate.marketing === true,
  };
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored ? normalizeConsent(JSON.parse(stored)) : null;
  } catch {
    return null;
  }
}

export function writeConsent(consent: ConsentState): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(
    new CustomEvent<ConsentState>(CONSENT_UPDATED_EVENT, { detail: consent }),
  );
}
