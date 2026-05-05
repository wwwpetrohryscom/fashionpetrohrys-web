const REPEATED_PHRASE_MIN_WORDS = 3;
const DEFAULT_MAX_OUTBOUND_LINKS = 3;
const DEFAULT_MAX_KEYWORD_DENSITY = 0.045;

export type ContentValidationResult = {
  ok: boolean;
  errors: string[];
  warnings: string[];
};

export type ContentValidationInput = {
  title?: string;
  body: string;
  targetKeyword?: string;
  minWords?: number;
  maxOutboundLinks?: number;
  maxKeywordDensity?: number;
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getWords(value: string) {
  const normalized = normalizeText(value);
  return normalized ? normalized.split(" ").filter(Boolean) : [];
}

function countOutboundLinks(value: string) {
  return (value.match(/https?:\/\/[^\s)]+/gi) ?? []).length;
}

function hasRepeatedPhrases(words: string[]) {
  const phrases = new Map<string, number>();

  for (let i = 0; i <= words.length - REPEATED_PHRASE_MIN_WORDS; i += 1) {
    const phrase = words.slice(i, i + REPEATED_PHRASE_MIN_WORDS).join(" ");
    phrases.set(phrase, (phrases.get(phrase) ?? 0) + 1);
  }

  return [...phrases.values()].some((count) => count >= 4);
}

function getKeywordDensity(words: string[], keyword: string) {
  const normalizedKeyword = normalizeText(keyword);
  const keywordWords = normalizedKeyword.split(" ").filter(Boolean);

  if (!normalizedKeyword || keywordWords.length === 0 || words.length === 0) {
    return 0;
  }

  let matches = 0;

  for (let i = 0; i <= words.length - keywordWords.length; i += 1) {
    const phrase = words.slice(i, i + keywordWords.length).join(" ");
    if (phrase === normalizedKeyword) matches += 1;
  }

  return matches / words.length;
}

export function validateContent({
  title,
  body,
  targetKeyword,
  minWords = 120,
  maxOutboundLinks = DEFAULT_MAX_OUTBOUND_LINKS,
  maxKeywordDensity = DEFAULT_MAX_KEYWORD_DENSITY,
}: ContentValidationInput): ContentValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const words = getWords(body);

  if (title && title.trim().length < 20) {
    errors.push("Title is too short to carry clear search intent.");
  }

  if (words.length < minWords) {
    errors.push(`Content is too thin. Minimum required word count: ${minWords}.`);
  }

  if (hasRepeatedPhrases(words)) {
    errors.push("Content contains repeated phrase patterns.");
  }

  const outboundLinks = countOutboundLinks(body);
  if (outboundLinks > maxOutboundLinks) {
    errors.push(`Too many outbound links. Maximum allowed: ${maxOutboundLinks}.`);
  }

  if (targetKeyword) {
    const density = getKeywordDensity(words, targetKeyword);

    if (density > maxKeywordDensity) {
      errors.push("Keyword stuffing detected.");
    }

    if (density === 0) {
      warnings.push("Target keyword is not present in the body.");
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
  };
}
