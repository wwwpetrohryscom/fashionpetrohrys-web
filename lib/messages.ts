import de from "@/messages/de.json";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";
import pt from "@/messages/pt.json";
import type { Locale } from "@/lib/i18n";

const MESSAGES = { en, de, fr, es, pt } as const;

export type Messages = typeof en;

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale];
}
