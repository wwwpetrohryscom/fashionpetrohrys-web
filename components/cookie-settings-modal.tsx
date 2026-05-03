"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_CONSENT,
  OPEN_COOKIE_SETTINGS_EVENT,
  type ConsentState,
} from "@/lib/consent";
import type { Messages } from "@/lib/messages";

type CookieMessages = Messages["cookie"];

type CookieSettingsModalProps = {
  messages: CookieMessages;
  initialConsent: ConsentState;
  open: boolean;
  onClose: () => void;
  onSave: (consent: ConsentState) => void;
  onAcceptAll: () => void;
  onReject: () => void;
};

export function CookieSettingsModal({
  messages,
  initialConsent,
  open,
  onClose,
  onSave,
  onAcceptAll,
  onReject,
}: CookieSettingsModalProps) {
  const [analytics, setAnalytics] = useState(initialConsent.analytics);
  const [marketing, setMarketing] = useState(initialConsent.marketing);

  useEffect(() => {
    if (open) {
      setAnalytics(initialConsent.analytics);
      setMarketing(initialConsent.marketing);
    }
  }, [initialConsent.analytics, initialConsent.marketing, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/45 p-4 sm:items-center sm:justify-center"
      role="presentation"
    >
      <div
        className="w-full max-w-lg rounded-lg border border-neutral-200 bg-white p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
      >
        <div className="border-t-2 border-signal pt-3">
          <h2
            id="cookie-settings-title"
            className="text-lg font-semibold tracking-tight text-neutral-900"
          >
            {messages.modalTitle}
          </h2>
          <p className="mt-2 text-sm text-neutral-600">{messages.modalBody}</p>
        </div>

        <div className="mt-5 space-y-3">
          <CategoryRow
            title={messages.necessaryTitle}
            body={messages.necessaryBody}
            checked
            disabled
            badge={messages.alwaysOn}
          />
          <CategoryRow
            title={messages.analyticsTitle}
            body={messages.analyticsBody}
            checked={analytics}
            onChange={setAnalytics}
          />
          <CategoryRow
            title={messages.marketingTitle}
            body={messages.marketingBody}
            checked={marketing}
            onChange={setMarketing}
          />
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() =>
              onSave({ necessary: true, analytics, marketing })
            }
            className="border border-neutral-900 bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-neutral-900"
          >
            {messages.save}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-neutral-900 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            {messages.cancel}
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="border border-neutral-900 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            {messages.acceptAll}
          </button>
          <button
            type="button"
            onClick={onReject}
            className="border border-neutral-900 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            {messages.rejectNonEssential}
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({
  title,
  body,
  checked,
  disabled = false,
  badge,
  onChange,
}: {
  title: string;
  body: string;
  checked: boolean;
  disabled?: boolean;
  badge?: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-neutral-200 p-4">
      <div>
        <div className="font-medium text-neutral-900">{title}</div>
        <p className="mt-1 text-sm text-neutral-600">{body}</p>
        {badge ? (
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-signal">
            {badge}
          </div>
        ) : null}
      </div>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-5 w-5 accent-neutral-900"
        aria-label={title}
      />
    </div>
  );
}

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className="text-left hover:text-neutral-900"
    >
      {label}
    </button>
  );
}

export const EMPTY_CONSENT = DEFAULT_CONSENT;
