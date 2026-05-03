"use client";

import { useEffect } from "react";
import {
  CONSENT_UPDATED_EVENT,
  readConsent,
  type ConsentState,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __fashionAreaGaLoaded?: boolean;
    __fashionAreaGaConfigured?: boolean;
  }
}

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-6490XY79Q4";

function ensureGtag() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

function updateConsent(consent: ConsentState) {
  ensureGtag();

  const analyticsStorage = consent.analytics ? "granted" : "denied";
  const marketingStorage = consent.marketing ? "granted" : "denied";

  window.gtag?.("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: marketingStorage,
    ad_user_data: marketingStorage,
    ad_personalization: marketingStorage,
  });
}

function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || window.__fashionAreaGaLoaded) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    GA_MEASUREMENT_ID,
  )}`;
  document.head.appendChild(script);

  window.__fashionAreaGaLoaded = true;
}

function configureGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || window.__fashionAreaGaConfigured) {
    return;
  }

  ensureGtag();
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });
  window.__fashionAreaGaConfigured = true;
}

export function AnalyticsProvider() {
  useEffect(() => {
    ensureGtag();
    window.gtag?.("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    function applyConsent(consent: ConsentState | null) {
      if (!consent) {
        return;
      }

      updateConsent(consent);

      if (consent.analytics) {
        loadGoogleAnalytics();
        configureGoogleAnalytics();
      }
    }

    applyConsent(readConsent());

    function handleConsentUpdate(event: Event) {
      applyConsent((event as CustomEvent<ConsentState>).detail);
    }

    window.addEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
    return () =>
      window.removeEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdate);
  }, []);

  return null;
}
