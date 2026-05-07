export type PerfumeGender = "men" | "women" | "unisex";

export type PerfumeRating = {
  slug: string;
  name: string;
  brand: string;
  gender: PerfumeGender;
  rating: number;
  longevity: number;
  projection: number;
  versatility: number;
  value: number;
  concentration: string;
  seasons: string[];
  occasions: string[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  review: {
    intro: string;
    scentProfile: string;
    performance: string;
    bestFor: string;
    avoidIf: string;
    verdict: string;
  };
  pros: string[];
  cons: string[];
  related: string[];
  publishedAt: string;
  updatedAt: string;
};

export const PERFUMES: PerfumeRating[] = [
  {
    slug: "bleu-de-chanel-review",
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    gender: "men",
    rating: 8.6,
    longevity: 8.0,
    projection: 7.5,
    versatility: 9.2,
    value: 8.0,
    concentration: "Eau de Parfum",
    seasons: ["spring", "autumn", "winter"],
    occasions: ["office", "dinner", "date", "smart casual"],
    notes: {
      top: ["grapefruit", "lemon", "pink pepper", "mint"],
      middle: ["ginger", "iso e super", "jasmine", "nutmeg"],
      base: ["incense", "cedar", "sandalwood", "labdanum", "white musk"],
    },
    metaTitle: "Bleu de Chanel EDP Review: Rating, Notes, Longevity",
    metaDescription:
      "A balanced Bleu de Chanel Eau de Parfum review with ratings for longevity, projection, versatility, value, scent profile, pros and cons.",
    shortDescription:
      "A polished citrus-woody-aromatic that holds up across seasons and dress codes — a textbook safe blind buy with a refined backbone.",
    review: {
      intro:
        "Bleu de Chanel EDP is the version most people mean when they say 'Bleu de Chanel.' The EDT is fresher and louder; the Parfum is denser and smokier. The EDP sits in the middle and is the one that does the most work for the most people.",
      scentProfile:
        "It opens bright but not sharp: grapefruit and lemon lifted by pink pepper and a faint mint. Within twenty minutes the citrus tucks behind a dry, slightly metallic woods accord built around iso e super and cedar, with a thread of incense that becomes more obvious in cooler weather. The base is clean — sandalwood, labdanum, white musk — never sweet, never gourmand. The whole thing reads composed rather than playful.",
      performance:
        "On skin, expect roughly 7–9 hours with a moderate sillage that pulls in close to the body after the first two hours. On a wool sweater or jacket lining, it can hold a full day. Projection is polite by design — this is not a beast-mode fragrance, and it should not be over-sprayed in close quarters. Three to four sprays is the working dose.",
      bestFor:
        "Anyone who needs one fragrance for office, dinner, and smart-casual evenings without thinking about it. It works in air-conditioned rooms in summer and reads at its best in autumn and early winter. If you are building a small fragrance wardrobe and only want one signature, this is one of the safest picks at this price point.",
      avoidIf:
        "If you want loud projection, a sweet or gourmand profile, or a strong cologne-style citrus burst that lasts. Also avoid if you want something distinctive in a room — Bleu is widely worn, and many people will recognise it on you.",
      verdict:
        "Bleu de Chanel EDP earns its reputation. It is not the most original fragrance on the shelf, but it is one of the most consistently wearable. A high-versatility, medium-projection composition that justifies its price for someone who will actually wear it every week.",
    },
    pros: [
      "Wide season and occasion range",
      "Refined dry-down without sweetness",
      "Composed projection that suits offices and close conversations",
      "Strong on fabric, especially wool and cotton shirts",
    ],
    cons: [
      "Very widely worn — limited distinctiveness",
      "Iso E Super-driven dry-down can feel thin on some skin types",
      "Modest projection will frustrate buyers expecting beast-mode performance",
    ],
    related: ["dior-sauvage-review", "acqua-di-gio-profondo-review"],
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-07",
  },
  {
    slug: "dior-sauvage-review",
    name: "Dior Sauvage Eau de Parfum",
    brand: "Dior",
    gender: "men",
    rating: 8.2,
    longevity: 8.5,
    projection: 8.7,
    versatility: 7.5,
    value: 7.8,
    concentration: "Eau de Parfum",
    seasons: ["spring", "autumn", "winter"],
    occasions: ["date", "evening", "casual", "smart casual"],
    notes: {
      top: ["bergamot", "mandarin", "pink pepper"],
      middle: ["lavender", "sichuan pepper", "star anise", "nutmeg"],
      base: ["ambroxan", "vanilla", "cedar", "labdanum"],
    },
    metaTitle: "Dior Sauvage EDP Review: Rating, Notes, Longevity",
    metaDescription:
      "A practical Dior Sauvage Eau de Parfum review covering scent profile, performance, projection, versatility, value, pros and cons.",
    shortDescription:
      "A loud, ambroxan-forward fragrance with strong projection and a slightly sweet, peppery character — popular for a reason, but heavier than the EDT.",
    review: {
      intro:
        "Sauvage is the most worn men's fragrance of the last decade and the EDP is the version that pushes the formula warmer and sweeter. If the EDT is bright bergamot over ambroxan, the EDP adds vanilla, labdanum, and a softer pepper, which changes when and where it works.",
      scentProfile:
        "The opening still hits with bergamot and pink pepper, but the citrus reads juicier rather than crisp. The heart is where it diverges from the EDT: lavender wrapped in a warmer pepper accord, with star anise giving it a slightly licorice tilt. The base is the part most people are buying — ambroxan with a vanilla and labdanum support that adds warmth without becoming gourmand. It does not smell like dessert; it smells like a sweetened wood.",
      performance:
        "Longevity is reliably 8–10 hours and projection is strong for the first three to four hours. Over-application is the most common mistake — two well-placed sprays are enough in most rooms. In offices, restaurants, or any seated indoor environment, three or more sprays will overpower the space.",
      bestFor:
        "Cooler-weather casual and smart-casual evenings. Date nights where you want to project warmth, and weekends when you want a fragrance that does not need a primer. Works well over a clean cotton tee or a knit, less well in tailored summer wear where the EDT is a better match.",
      avoidIf:
        "If you work or socialise in tight spaces and dislike being noticed by scent, pick something quieter. Also avoid if you want a fresh, cologne-style citrus profile — the EDT is closer to that, the EDP is not.",
      verdict:
        "A strong-performing fragrance with a clear identity. The EDP is the right pick if you want warmth and longevity from Sauvage; the EDT is still the better pick for warm-weather and office use. For its category, value is good; distinctiveness is low because of how widely it is worn.",
    },
    pros: [
      "Strong longevity and projection",
      "Warm, slightly sweetened wood base that works in cool weather",
      "Easy to wear without complicated layering",
      "Works as a single signature scent for casual and date contexts",
    ],
    cons: [
      "Very widely worn",
      "Easy to over-spray in tight indoor spaces",
      "Can read generic on someone who already wears similar ambroxan-driven scents",
    ],
    related: ["bleu-de-chanel-review", "acqua-di-gio-profondo-review"],
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-07",
  },
  {
    slug: "acqua-di-gio-profondo-review",
    name: "Giorgio Armani Acqua di Giò Profondo",
    brand: "Giorgio Armani",
    gender: "men",
    rating: 8.4,
    longevity: 7.8,
    projection: 7.4,
    versatility: 8.6,
    value: 8.2,
    concentration: "Eau de Parfum",
    seasons: ["spring", "summer", "early autumn"],
    occasions: ["office", "casual", "warm-weather evenings"],
    notes: {
      top: ["sea notes", "bergamot", "aquozone", "lime"],
      middle: ["rosemary", "cypress", "lavender", "mastic"],
      base: ["mineral notes", "patchouli", "musk", "amber"],
    },
    metaTitle: "Acqua di Giò Profondo Review: Rating and Longevity",
    metaDescription:
      "A clear Acqua di Giò Profondo review with ratings for freshness, longevity, projection, versatility, value, notes, pros and cons.",
    shortDescription:
      "A modern aquatic with a darker, mineral edge — cleaner than the original Acqua di Giò, with longer wear and a tighter performance window.",
    review: {
      intro:
        "Profondo is what happens when an old aquatic gets reworked for current tastes. The original Acqua di Giò was bright and watery; Profondo keeps the marine bones but adds mineral and resinous notes that give the fragrance more weight without losing its warm-weather identity.",
      scentProfile:
        "The opening is recognisably aquatic — sea notes, bergamot, and a synthetic wet-rock accord — but layered under it is a green herbal twist from rosemary and cypress that pulls it away from generic blue scents. Mid-development brings out a salty, slightly resinous mastic and a clean lavender. The base is dry rather than sweet: mineral notes over a soft patchouli-musk accord with a touch of amber that keeps it from going cold.",
      performance:
        "Expect 6–8 hours on skin, longer on cotton or linen. Projection is moderate for the first two hours, then settles to a personal scent that holds well. It is one of the few aquatics that actually performs in warm weather without thinning out into nothing within the hour.",
      bestFor:
        "Late spring through early autumn. Offices, casual day wear, warm-weather evenings, and any context where you want something clean and unobtrusive that still has presence. Pairs well with cotton shirting, linen, and lighter knitwear.",
      avoidIf:
        "If you actively dislike aquatic fragrances or want a strong evening projection in cold weather. Profondo can feel quiet and slightly austere on someone expecting a sweet or warm composition.",
      verdict:
        "One of the better warm-weather releases of the last few years. It updates a familiar formula without abandoning it, and the longevity is unusually good for the genre. A strong choice if you need a daytime fragrance that respects the people around you.",
    },
    pros: [
      "Distinct mineral-aquatic profile that avoids the generic blue cliché",
      "Above-average longevity for an aquatic",
      "Comfortable in offices and warm weather",
      "Reads clean without smelling sterile",
    ],
    cons: [
      "Quieter projection than Sauvage or other modern crowd-pleasers",
      "Aquatic profile is polarising — not for fans of warm or sweet scents",
      "Less suited to cold-weather evenings",
    ],
    related: ["bleu-de-chanel-review", "dior-sauvage-review"],
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-07",
  },
];

export function getPerfumeBySlug(slug: string): PerfumeRating | undefined {
  return PERFUMES.find((p) => p.slug === slug);
}

export function getRelatedPerfumes(slug: string): PerfumeRating[] {
  const perfume = getPerfumeBySlug(slug);
  if (!perfume) return [];
  return perfume.related
    .map((s) => getPerfumeBySlug(s))
    .filter((p): p is PerfumeRating => Boolean(p));
}
