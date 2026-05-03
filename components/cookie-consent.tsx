"use client";

import { useEffect, useState } from "react";
import { CookieSettingsModal } from "@/components/cookie-settings-modal";
import {
  DEFAULT_CONSENT,
  OPEN_COOKIE_SETTINGS_EVENT,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";
import type { Messages } from "@/lib/messages";

type CookieConsentProps = {
  messages: Messages["cookie"];
};

export function CookieConsent({ messages }: CookieConsentProps) {
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);

  useEffect(() => {
    const storedConsent = readConsent();

    if (storedConsent) {
      setConsent(storedConsent);
    } else {
      setShowBanner(true);
    }

    setReady(true);

    function openSettings() {
      setConsent(readConsent() ?? DEFAULT_CONSENT);
      setModalOpen(true);
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () =>
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  function commitConsent(nextConsent: ConsentState) {
    setConsent(nextConsent);
    writeConsent(nextConsent);
    setShowBanner(false);
    setModalOpen(false);
  }

  function acceptAll() {
    commitConsent({ necessary: true, analytics: true, marketing: true });
  }

  function rejectNonEssential() {
    commitConsent({ necessary: true, analytics: false, marketing: false });
  }

  if (!ready) {
    return null;
  }

  return (
    <>
      {showBanner ? (
        <section
          aria-label={messages.bannerTitle}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="mx-auto grid max-w-5xl gap-4 px-6 py-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="border-l-2 border-signal pl-4">
              <h2 className="text-sm font-semibold text-neutral-900">
                {messages.bannerTitle}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-neutral-600">
                {messages.bannerBody}
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-3 md:w-[32rem]">
              <button
                type="button"
                onClick={acceptAll}
                className="border border-neutral-900 bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-neutral-900"
              >
                {messages.acceptAll}
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="border border-neutral-900 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                {messages.rejectNonEssential}
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-900"
              >
                {messages.customize}
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <CookieSettingsModal
        messages={messages}
        initialConsent={consent}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={commitConsent}
        onAcceptAll={acceptAll}
        onReject={rejectNonEssential}
      />
    </>
  );
}
