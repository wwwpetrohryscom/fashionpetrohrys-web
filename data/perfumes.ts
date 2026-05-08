export type PerfumeTier =
  | "top-of-the-top"
  | "top-ok"
  | "average"
  | "avoid";

export type PerfumeGender = "men" | "women" | "unisex";

export type PerfumeImageSource =
  | "official"
  | "licensed"
  | "user-provided"
  | "placeholder";

export type PerfumeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceType: PerfumeImageSource;
};

export type PerfumeRating = {
  slug: string;
  name: string;
  brand: string;
  fullName: string;
  tier: PerfumeTier;
  rank: number;
  gender: PerfumeGender;
  rating: number;
  longevity: number;
  projection: number;
  versatility: number;
  uniqueness: number;
  value: number;
  concentration?: string;
  seasons: string[];
  occasions: string[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  bottleImage?: PerfumeImage;
  boxImage?: PerfumeImage;
  heroImage?: PerfumeImage;
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

function placeholderBottle(slug: string, fullName: string): PerfumeImage {
  return {
    src: `/images/perfumes/${slug}-bottle.webp`,
    alt: `${fullName} bottle illustration`,
    width: 800,
    height: 1000,
    sourceType: "placeholder",
  };
}

export const TIER_ORDER: PerfumeTier[] = [
  "top-of-the-top",
  "top-ok",
  "average",
  "avoid",
];

const PUBLISHED = "2026-05-07";

const RAW_PERFUMES: PerfumeRating[] = [
  // ─────────────────────────────────────────────
  // Tier 1 — Top of the Top
  // ─────────────────────────────────────────────
  {
    slug: "creed-aventus",
    name: "Aventus",
    brand: "Creed",
    fullName: "Creed Aventus",
    tier: "top-of-the-top",
    rank: 1,
    gender: "men",
    rating: 9.4,
    longevity: 8.2,
    projection: 8.0,
    versatility: 9.2,
    uniqueness: 8.8,
    value: 7.2,
    concentration: "Eau de Parfum",
    seasons: ["spring", "autumn", "winter"],
    occasions: ["office", "date", "evening", "smart casual"],
    notes: {
      top: ["pineapple", "bergamot", "blackcurrant", "apple"],
      middle: ["birch", "patchouli", "rose", "jasmine"],
      base: ["musk", "oakmoss", "ambergris", "vanilla"],
    },
    metaTitle: "Creed Aventus Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Creed Aventus review with FashionArea rating, longevity, projection, versatility, notes, best occasions, pros, cons, and verdict.",
    shortDescription:
      "Creed Aventus sits in the top tier because it still balances freshness, fruit, smoke, and masculine polish better than most designer-inspired alternatives.",
    review: {
      intro:
        "Aventus is the fragrance most niche reference points circle back to. The reason it stays at the top of the FashionArea ranking is not nostalgia — it is that the structure still works: bright fruit on top, smoke through the heart, and a clean musky base that does not collapse into sweetness.",
      scentProfile:
        "Commonly associated with a pineapple-forward opening lifted by bergamot and a darker fruit accord. The heart leans into a smoked birch character with quiet floral support. The base reads clean rather than gourmand — soft musk, ambery warmth, and a faint mossy backbone that keeps it from reading sweet.",
      performance:
        "Longevity typically lands around 7–9 hours on skin, with stronger trail in the first three. Projection is composed rather than aggressive — closer to a confident two-arm radius than a room-filler. Three sprays is usually the right working dose; four if you want it to read across an evening.",
      bestFor:
        "Smart-casual to formal contexts where you want a fragrance to register without dominating. Works in offices, on dates, and in evening settings from late autumn through spring. A strong choice as a single signature scent for someone willing to invest at this price point.",
      avoidIf:
        "If you want a beast-mode performer or a sweet, gourmand character. Also avoid if you specifically dislike smoke or birch-tar facets — they sit in the heart and are a defining part of the composition.",
      verdict:
        "Aventus earns its rank through balance, not novelty. It is one of the few luxury fragrances where the price-to-experience ratio still survives a sober review, which is why it leads our editorial top tier.",
    },
    pros: [
      "Balanced fruit-smoke-clean structure that resists trend cycles",
      "Above-average versatility for a niche-priced fragrance",
      "Reads composed rather than loud in close quarters",
    ],
    cons: [
      "Batch variation is widely reported and can affect a specific bottle",
      "Value is moderate — the price reflects brand and packaging as much as juice",
      "Smoke heart is polarising for buyers expecting a pure fresh fragrance",
    ],
    related: ["roja-elysium", "louis-vuitton-imagination", "bvlgari-tygar"],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "roja-elysium",
    name: "Elysium",
    brand: "Roja Parfums",
    fullName: "Roja Elysium",
    tier: "top-of-the-top",
    rank: 2,
    gender: "men",
    rating: 9.3,
    longevity: 7.8,
    projection: 7.7,
    versatility: 9.0,
    uniqueness: 8.7,
    value: 6.8,
    concentration: "Parfum",
    seasons: ["spring", "summer", "autumn"],
    occasions: ["office", "date", "smart casual", "warm-weather evenings"],
    notes: {
      top: ["citrus accord", "bergamot", "blackcurrant"],
      middle: ["jasmine", "rose", "violet"],
      base: ["amber", "musk", "woods"],
    },
    metaTitle: "Roja Elysium Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Roja Elysium review with FashionArea rating, longevity, projection, versatility, notes, best occasions, pros, cons, and verdict.",
    shortDescription:
      "Roja Elysium is a polished fresh fragrance with a luxury feel, strong versatility, and enough brightness to work as a signature scent.",
    review: {
      intro:
        "Elysium is the rare luxury fresh that does not feel like a thinned-out cologne. It opens crisp, holds composure through the day, and lands in a clean ambery base that gives it more weight than most warm-weather fragrances at any price.",
      scentProfile:
        "Commonly associated with a juicy citrus opening over a dark fruit accent, transitioning into a clean white-floral heart and a soft ambery-musky base. The overall impression is bright but grown-up — fresh without smelling generic.",
      performance:
        "Longevity is typically 6–8 hours on skin, with a tighter projection radius after the first two hours. Sillage stays close to the body, which suits offices and seated dinners better than crowded rooms. Three sprays is the usual working dose.",
      bestFor:
        "Late spring through early autumn, daytime to early evening. Works as a clean signature for smart-casual and business-casual contexts. A reasonable single-bottle pick for someone who wants a luxury fresh that does not read like a designer flanker.",
      avoidIf:
        "If you want loud projection, cold-weather warmth, or a strong character note that dominates the room. Elysium is intentionally polite — buyers expecting drama will be disappointed.",
      verdict:
        "Elysium ranks high because it solves a hard brief: be fresh, be expensive-feeling, and still last. It does not invent a new genre, but it executes a familiar one with unusual restraint.",
    },
    pros: [
      "Clean, polished freshness with grown-up structure",
      "High versatility across daytime contexts",
      "Reads luxurious without leaning sweet or loud",
    ],
    cons: [
      "Price is high relative to longevity",
      "Quiet projection will frustrate buyers expecting beast-mode performance",
      "Not distinctive enough in cold weather",
    ],
    related: ["creed-aventus", "louis-vuitton-imagination", "bvlgari-tygar"],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "nasomatto-black-afgano",
    name: "Black Afgano",
    brand: "Nasomatto",
    fullName: "Nasomatto Black Afgano",
    tier: "top-of-the-top",
    rank: 3,
    gender: "unisex",
    rating: 9.1,
    longevity: 9.8,
    projection: 9.2,
    versatility: 5.8,
    uniqueness: 9.7,
    value: 7.4,
    concentration: "Extrait de Parfum",
    seasons: ["autumn", "winter"],
    occasions: ["evening", "statement"],
    notes: {
      top: ["green resinous accord"],
      middle: ["incense", "oud", "tobacco"],
      base: ["resin", "woods"],
    },
    metaTitle: "Nasomatto Black Afgano Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Black Afgano review with FashionArea rating, longevity, projection, versatility, notes, best occasions, pros, cons, and verdict.",
    shortDescription:
      "Black Afgano is not versatile, but it earns its rank through density, darkness, projection, and a scent profile that feels deliberately uncompromising.",
    review: {
      intro:
        "Black Afgano is the clearest example in this ranking of why versatility is not the only metric. It is narrow on purpose — a dense, dark, resinous fragrance that exists for a specific kind of evening and refuses to apologise for it.",
      scentProfile:
        "Commonly associated with a heavy green-resinous opening leading into a smoky incense and tobacco-tinged heart, with a deep woods-and-resin base. The overall impression is dark, contemplative, and uncompromisingly intense.",
      performance:
        "Longevity is exceptional — easily 10+ hours on skin and longer on fabric. Projection is strong for the first three to four hours and then settles into a dense skin scent. One spray is often enough; two is the upper limit in most rooms.",
      bestFor:
        "Cold-weather evenings, contemplative wear, or any context where you want a fragrance to feel deliberate. Works well over heavier knits and outerwear.",
      avoidIf:
        "If you want an everyday or office fragrance, dislike resinous or smoky profiles, or want something cheerful and bright. Black Afgano is the opposite of casual.",
      verdict:
        "It earns its tier through conviction. The score is held back by versatility and value, not by quality — this is one of the most internally coherent fragrances on the list.",
    },
    pros: [
      "Exceptional density and projection",
      "Highly distinctive — almost impossible to confuse with anything mainstream",
      "Above-average longevity for the genre",
    ],
    cons: [
      "Very narrow context window",
      "Polarising profile that will not suit casual or daytime use",
      "One-spray application discipline is non-optional in close quarters",
    ],
    related: [
      "marc-antoine-barrois-ganymede",
      "initio-oud-for-greatness",
      "maison-crivelli-oud-maracuja",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "marc-antoine-barrois-ganymede",
    name: "Ganymede",
    brand: "Marc-Antoine Barrois",
    fullName: "Marc-Antoine Barrois Ganymede",
    tier: "top-of-the-top",
    rank: 4,
    gender: "unisex",
    rating: 9.5,
    longevity: 9.0,
    projection: 8.6,
    versatility: 7.6,
    uniqueness: 9.8,
    value: 7.8,
    concentration: "Extrait de Parfum",
    seasons: ["autumn", "winter", "spring"],
    occasions: ["evening", "smart casual", "statement"],
    notes: {
      top: ["mandarin accord", "saffron"],
      middle: ["osmanthus", "violet"],
      base: ["mineral notes", "amber", "musk"],
    },
    metaTitle: "Ganymede Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Marc-Antoine Barrois Ganymede review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Ganymede ranks high because it smells modern, mineral, metallic, elegant, and difficult to confuse with anything mainstream.",
    review: {
      intro:
        "Ganymede is one of the few recent niche releases that earns its reputation. It pulls a metallic, slightly cold mineral effect into something genuinely wearable, with the kind of restraint that separates a designed fragrance from a costumed one.",
      scentProfile:
        "Commonly associated with a saffron-and-mandarin opening that quickly turns dry and metallic. The heart introduces a soft osmanthus-violet character, and the base settles into a mineral, ambery musk. The overall feel is modern, cool-toned, and sculptural.",
      performance:
        "Longevity is strong — 9+ hours is realistic on skin, and it holds well on fabric. Projection is confident in the opening and settles to a refined sillage. Two to three sprays is the working dose.",
      bestFor:
        "Cooler-weather evenings and smart-casual settings where you want something distinctive but not loud. Works as a statement signature for someone who already owns the basics.",
      avoidIf:
        "If you want a warm, sweet, or traditionally masculine scent, or a high-summer fresh. The metallic-mineral character is divisive and not a good blind buy.",
      verdict:
        "The highest-rated piece in our top tier. Ganymede is the rare case where uniqueness, performance, and elegance converge without forcing trade-offs.",
    },
    pros: [
      "Highly distinctive mineral-metallic identity",
      "Excellent longevity and projection for the genre",
      "Modern, refined character that does not feel like a costume",
    ],
    cons: [
      "Polarising profile — saffron and metallic notes are not for everyone",
      "Limited summer use",
      "Difficult to sample blindly without risk",
    ],
    related: [
      "nasomatto-black-afgano",
      "louis-vuitton-imagination",
      "creed-aventus",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "clive-christian-hedonistic",
    name: "Hedonistic",
    brand: "Clive Christian",
    fullName: "Clive Christian Hedonistic",
    tier: "top-of-the-top",
    rank: 5,
    gender: "unisex",
    rating: 9.0,
    longevity: 8.7,
    projection: 8.2,
    versatility: 6.8,
    uniqueness: 9.2,
    value: 6.2,
    concentration: "Parfum",
    seasons: ["autumn", "winter"],
    occasions: ["evening", "statement", "formal"],
    notes: {
      top: ["fruit accord"],
      middle: ["floral accord", "spice"],
      base: ["amber", "woods", "vanilla"],
    },
    metaTitle: "Clive Christian Hedonistic Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Clive Christian Hedonistic review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Hedonistic is dense, opulent, and unapologetically luxurious — a fragrance with strong performance and a clear emotional identity.",
    review: {
      intro:
        "Hedonistic is the kind of fragrance that does not pretend to be a daily driver. It is built for cold weather, formal evenings, and contexts where the wearer wants to project a deliberate sense of luxury.",
      scentProfile:
        "Commonly associated with a rich fruity-floral opening that quickly warms into a spiced floral heart over an ambery, lightly vanillic woods base. The composition reads dense and rounded rather than sharp.",
      performance:
        "Longevity is strong — typically 9+ hours on skin. Projection is confident in the opening and settles into a warm sillage. One to two sprays is the working dose; over-application is the most common mistake.",
      bestFor:
        "Cold-weather formal and evening wear. Works in low-light settings and dressed-up contexts where the fragrance is part of the outfit.",
      avoidIf:
        "If you want a daytime, office, or warm-weather scent, or a fresh and minimalist character. Hedonistic is unapologetically opulent.",
      verdict:
        "It earns its tier through conviction and performance. Value is the weakest score — Clive Christian pricing is steep — but the experience is genuinely high-end.",
    },
    pros: [
      "Dense, rounded luxury character that holds together",
      "Strong longevity and projection",
      "Clear emotional identity for evening wear",
    ],
    cons: [
      "Very narrow seasonal and contextual range",
      "Value score is held back by Clive Christian retail pricing",
      "Easy to over-spray in close quarters",
    ],
    related: [
      "baccarat-rouge-540",
      "initio-oud-for-greatness",
      "marc-antoine-barrois-ganymede",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "baccarat-rouge-540",
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    fullName: "Maison Francis Kurkdjian Baccarat Rouge 540",
    tier: "top-of-the-top",
    rank: 6,
    gender: "unisex",
    rating: 9.2,
    longevity: 9.4,
    projection: 8.8,
    versatility: 8.4,
    uniqueness: 8.7,
    value: 6.9,
    concentration: "Eau de Parfum",
    seasons: ["spring", "autumn", "winter"],
    occasions: ["evening", "date", "statement", "smart casual"],
    notes: {
      top: ["saffron", "jasmine"],
      middle: ["amber accord", "ambergris"],
      base: ["fir resin", "cedar"],
    },
    metaTitle: "Baccarat Rouge 540 Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Baccarat Rouge 540 review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Baccarat Rouge 540 remains high in the ranking because of its airy sweetness, strong trail, and instantly recognisable structure.",
    review: {
      intro:
        "Baccarat Rouge 540 is the most-imitated niche fragrance of the last decade. It is in the top tier despite over-saturation because the original still does what its clones do not — a clean, airy sweetness that holds its shape for hours.",
      scentProfile:
        "Commonly associated with a saffron-and-jasmine opening lifting into an ambery, lightly woody heart, with a long resinous-cedar trail. The overall impression is luminous, sweet but not gourmand, and unusually airy for its strength.",
      performance:
        "Longevity is excellent — 10+ hours on skin is common, and trail on fabric can last days. Projection is strong in the first few hours, then settles into a long persistent sillage. One or two sprays is enough in most rooms.",
      bestFor:
        "Evenings, dates, and statement wear from spring through winter. Works as part of a small luxury rotation rather than a daily driver because it is so widely worn and recognisable.",
      avoidIf:
        "If you dislike sweet or ambery fragrances, want low-recognition wear, or work in tight indoor spaces. Recognition risk is a real factor at this point.",
      verdict:
        "Still top tier on technical merit. Value is the weakest score given the price and how widely it is now worn, but the composition itself is one of the most durable luxury fragrances on the market.",
    },
    pros: [
      "Excellent longevity and projection",
      "Airy sweetness that does not collapse into gourmand",
      "Strong instantly recognisable identity",
    ],
    cons: [
      "Very widely worn and frequently cloned",
      "Value is held back by retail pricing",
      "Sweetness is polarising for buyers expecting a fresh or dry character",
    ],
    related: [
      "clive-christian-hedonistic",
      "initio-oud-for-greatness",
      "louis-vuitton-imagination",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "initio-oud-for-greatness",
    name: "Oud for Greatness",
    brand: "Initio Parfums Privés",
    fullName: "Initio Parfums Privés Oud for Greatness",
    tier: "top-of-the-top",
    rank: 7,
    gender: "unisex",
    rating: 9.1,
    longevity: 9.5,
    projection: 9.0,
    versatility: 6.9,
    uniqueness: 8.8,
    value: 7.0,
    concentration: "Eau de Parfum",
    seasons: ["autumn", "winter"],
    occasions: ["evening", "statement", "formal"],
    notes: {
      top: ["saffron", "lavender"],
      middle: ["nutmeg", "patchouli"],
      base: ["oud accord", "musk"],
    },
    metaTitle: "Initio Oud for Greatness Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Oud for Greatness review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Oud for Greatness is powerful, direct, and built around a confident saffron-oud accord that performs far above average.",
    review: {
      intro:
        "Oud for Greatness is what happens when a saffron-oud structure is engineered for performance. It is loud where many oud fragrances are restrained, and that confidence is part of its identity.",
      scentProfile:
        "Commonly associated with a sharp saffron-and-lavender opening that warms into a spiced patchouli heart, settling into a strong oud-musk base. The overall impression is dense, slightly medicinal, and unmistakably a niche oud composition.",
      performance:
        "Longevity is excellent — 10+ hours is realistic on skin and trail on fabric is heavy. Projection is strong for the first four hours and remains noticeable into the dry-down. One spray is often enough; two is the upper limit in close quarters.",
      bestFor:
        "Cold-weather evenings and formal contexts. Works as a statement piece when the wearer specifically wants to project a niche oud signature.",
      avoidIf:
        "If you want a daytime, fresh, or low-projection scent, or dislike saffron and oud profiles. Also avoid in tightly enclosed indoor spaces.",
      verdict:
        "It earns its tier through performance and identity. Versatility holds the score back — this is not a fragrance for casual rotation.",
    },
    pros: [
      "Exceptional longevity and projection",
      "Confident, well-defined saffron-oud structure",
      "Distinctive identity that resists trend cycles",
    ],
    cons: [
      "Very narrow context range",
      "Easy to over-spray indoors",
      "Polarising profile for non-niche buyers",
    ],
    related: [
      "nasomatto-black-afgano",
      "maison-crivelli-oud-maracuja",
      "clive-christian-hedonistic",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "louis-vuitton-imagination",
    name: "Imagination",
    brand: "Louis Vuitton",
    fullName: "Louis Vuitton Imagination",
    tier: "top-of-the-top",
    rank: 8,
    gender: "unisex",
    rating: 9.4,
    longevity: 8.3,
    projection: 7.8,
    versatility: 9.6,
    uniqueness: 8.5,
    value: 7.1,
    concentration: "Eau de Parfum",
    seasons: ["spring", "summer", "autumn"],
    occasions: ["office", "date", "smart casual", "warm-weather evenings"],
    notes: {
      top: ["citrus accord", "bergamot"],
      middle: ["tea accord", "ginger"],
      base: ["woods", "musk"],
    },
    metaTitle: "Louis Vuitton Imagination Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Louis Vuitton Imagination review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Louis Vuitton Imagination is one of the cleanest high-end fresh fragrances in the ranking, with excellent wearability and a refined tea-citrus profile.",
    review: {
      intro:
        "Imagination is the kind of luxury fresh that justifies its price by being unusually wearable. The structure is simple — citrus, tea, soft woods — but the execution is polished enough that it reads expensive without trying.",
      scentProfile:
        "Commonly associated with a clean citrus-bergamot opening over a tea-and-ginger heart, settling into a soft woods-and-musk base. The overall feel is luminous, clean, and unhurried.",
      performance:
        "Longevity is solid — 7–9 hours on skin is realistic. Projection is composed rather than loud, with most of the trail in the first three hours. Two to three sprays is the working dose.",
      bestFor:
        "Daytime to early evening, late spring through early autumn. Works exceptionally well as a clean office signature or a low-risk smart-casual signature.",
      avoidIf:
        "If you want a strong, projecting, or warm cold-weather scent. Imagination is intentionally polite.",
      verdict:
        "One of the highest-rated pieces in the top tier on versatility. Value is the weakest score — Louis Vuitton pricing is steep — but the composition is among the cleanest luxury fresh fragrances available.",
    },
    pros: [
      "Exceptional versatility for a luxury fragrance",
      "Clean, polished tea-citrus identity",
      "Strong office and daytime performance",
    ],
    cons: [
      "Quiet projection will frustrate buyers expecting more presence",
      "Value is held back by Louis Vuitton retail pricing",
      "Limited cold-weather appeal",
    ],
    related: ["roja-elysium", "bvlgari-tygar", "creed-aventus"],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "bvlgari-tygar",
    name: "Le Gemme Tygar",
    brand: "BVLGARI",
    fullName: "BVLGARI Le Gemme Tygar",
    tier: "top-of-the-top",
    rank: 9,
    gender: "men",
    rating: 9.2,
    longevity: 8.6,
    projection: 8.3,
    versatility: 9.0,
    uniqueness: 8.4,
    value: 6.7,
    concentration: "Eau de Parfum",
    seasons: ["spring", "summer", "autumn"],
    occasions: ["office", "date", "smart casual", "evening"],
    notes: {
      top: ["grapefruit", "bergamot"],
      middle: ["spice accord"],
      base: ["woods", "musk"],
    },
    metaTitle: "BVLGARI Le Gemme Tygar Review: Rating, Notes, Performance",
    metaDescription:
      "A clear BVLGARI Tygar review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "BVLGARI Tygar earns its place through grapefruit brightness, clean woods, strong projection, and unusually high versatility for a luxury fresh scent.",
    review: {
      intro:
        "Tygar is the strongest argument for why a luxury fresh can still be relevant. It pulls a grapefruit-led opening into a clean spiced-woods heart with enough projection to hold up across long days.",
      scentProfile:
        "Commonly associated with a sharp grapefruit-and-bergamot opening, a quietly spiced heart, and a clean musky woods base. The overall feel is bright, polished, and confident.",
      performance:
        "Longevity is solid — 8–10 hours on skin is realistic. Projection is strong in the first few hours and settles into a respectable sillage. Two to three sprays is the working dose.",
      bestFor:
        "Daytime through evening across most of the year. A reliable single-bottle pick for someone who wants a luxury fresh that does not feel like a flanker.",
      avoidIf:
        "If you want a warm, sweet, or gourmand profile, or a cold-weather statement piece. Tygar is bright by design.",
      verdict:
        "It earns its tier through versatility and projection rather than novelty. Value is the weakest score, but the composition is one of the most reliable luxury fresh fragrances on the market.",
    },
    pros: [
      "Bright grapefruit-led structure with luxury polish",
      "Strong versatility across daytime contexts",
      "Above-average projection for a fresh fragrance",
    ],
    cons: [
      "Price is high relative to category",
      "Limited cold-weather appeal",
      "Less distinctive than other top-tier picks",
    ],
    related: ["louis-vuitton-imagination", "roja-elysium", "creed-aventus"],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "maison-crivelli-oud-maracuja",
    name: "Oud Maracujá",
    brand: "Maison Crivelli",
    fullName: "Maison Crivelli Oud Maracujá",
    tier: "top-of-the-top",
    rank: 10,
    gender: "unisex",
    rating: 9.3,
    longevity: 9.4,
    projection: 9.1,
    versatility: 6.6,
    uniqueness: 9.6,
    value: 7.3,
    concentration: "Eau de Parfum",
    seasons: ["autumn", "winter"],
    occasions: ["evening", "statement"],
    notes: {
      top: ["passionfruit accord"],
      middle: ["spice accord"],
      base: ["oud accord", "woods"],
    },
    metaTitle: "Maison Crivelli Oud Maracujá Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Oud Maracujá review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Oud Maracujá ranks high because the passionfruit-oud contrast feels dramatic, loud, and memorable without becoming random.",
    review: {
      intro:
        "Oud Maracujá is one of the most distinctive recent niche releases. The passionfruit-oud contrast is unusual, and what holds the score is that it does not collapse into gimmick — the structure is deliberate and the performance is serious.",
      scentProfile:
        "Commonly associated with a sharp tropical fruit opening over a spiced heart, settling into a dense oud-and-woods base. The overall impression is dramatic, memorable, and unmistakably niche.",
      performance:
        "Longevity is excellent — 10+ hours on skin is common. Projection is strong in the opening and persistent in the dry-down. One or two sprays is enough.",
      bestFor:
        "Cold-weather evenings, statement contexts, and any situation where you want a fragrance to be remembered. Works well over heavier knits and outerwear.",
      avoidIf:
        "If you want an everyday, daytime, or office fragrance, or dislike oud or tropical-fruit profiles. The contrast is divisive.",
      verdict:
        "It earns its tier through identity and performance. Versatility holds the score back, but uniqueness is among the highest in this ranking.",
    },
    pros: [
      "Highly distinctive passionfruit-oud contrast",
      "Excellent longevity and projection",
      "Memorable identity that resists trend cycles",
    ],
    cons: [
      "Very narrow context range",
      "Polarising profile for non-niche buyers",
      "Easy to over-spray in close quarters",
    ],
    related: [
      "initio-oud-for-greatness",
      "nasomatto-black-afgano",
      "marc-antoine-barrois-ganymede",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },

  // ─────────────────────────────────────────────
  // Tier 2 — Top OK
  // ─────────────────────────────────────────────
  {
    slug: "bleu-de-chanel-parfum",
    name: "Bleu de Chanel Parfum",
    brand: "Chanel",
    fullName: "Chanel Bleu de Chanel Parfum",
    tier: "top-ok",
    rank: 1,
    gender: "men",
    rating: 8.7,
    longevity: 8.0,
    projection: 7.2,
    versatility: 9.4,
    uniqueness: 6.9,
    value: 7.5,
    concentration: "Parfum",
    seasons: ["autumn", "winter", "spring"],
    occasions: ["office", "date", "smart casual", "evening"],
    notes: {
      top: ["citrus accord", "grapefruit"],
      middle: ["incense", "woods"],
      base: ["sandalwood", "musk"],
    },
    metaTitle: "Bleu de Chanel Parfum Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Bleu de Chanel Parfum review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Bleu de Chanel Parfum is reliable, polished, and easy to wear, but it stays in Top OK because it is safer than it is surprising.",
    review: {
      intro:
        "The Parfum concentration is the densest, smokiest, and most refined of the Bleu line. It is one of the strongest mainstream luxury fragrances on the shelf, but it lands in Top OK because its strength is execution, not originality.",
      scentProfile:
        "Commonly associated with a citrus-led opening, a smoky incense-and-woods heart, and a clean sandalwood-musk base. The overall impression is composed, dry, and slightly more serious than the EDP.",
      performance:
        "Longevity is solid — 8–10 hours on skin is common. Projection is moderate and pulls in close after the first two hours. Three sprays is the working dose.",
      bestFor:
        "Cooler-weather business and evening wear, or as a single signature for someone who wants a fragrance to disappear into the outfit rather than announce itself.",
      avoidIf:
        "If you want loud projection, distinctiveness, or a warm or sweet character. Recognition risk is high — Bleu de Chanel is one of the most worn fragrances in this category.",
      verdict:
        "Strong execution, limited surprise. It is a deserved Top OK pick — reliable, polished, and easy to wear, but not a fragrance that changes the way a wardrobe works.",
    },
    pros: [
      "High versatility across seasons and dress codes",
      "Refined, dry profile that resists trend cycles",
      "Reliable mainstream-luxury performance",
    ],
    cons: [
      "Very widely worn",
      "Modest projection",
      "Limited distinctiveness",
    ],
    related: [
      "dior-homme-intense",
      "chanel-platinum-egoiste",
      "creed-aventus",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "dior-homme-intense",
    name: "Dior Homme Intense",
    brand: "Dior",
    fullName: "Dior Homme Intense",
    tier: "top-ok",
    rank: 2,
    gender: "men",
    rating: 8.8,
    longevity: 8.7,
    projection: 8.0,
    versatility: 7.0,
    uniqueness: 8.5,
    value: 7.7,
    concentration: "Eau de Parfum",
    seasons: ["autumn", "winter"],
    occasions: ["evening", "date", "formal", "smart casual"],
    notes: {
      top: ["lavender"],
      middle: ["iris", "ambrette"],
      base: ["vetiver", "woods"],
    },
    metaTitle: "Dior Homme Intense Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Dior Homme Intense review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Dior Homme Intense is a benchmark iris-led men's fragrance — refined, slightly powdery, and unusually elegant for its price tier.",
    review: {
      intro:
        "Dior Homme Intense is a genuine reference in mainstream men's fragrance: a powdery iris built around a structured lavender opening, with enough weight to feel adult rather than soft.",
      scentProfile:
        "Commonly associated with a lavender opening over a powdery iris-and-ambrette heart, settling into a clean vetiver-woods base. The overall feel is refined, slightly cool, and quietly luxurious.",
      performance:
        "Longevity is strong — 9+ hours on skin is realistic. Projection is moderate and steady, with the most presence in the first three hours. Two to three sprays is the working dose.",
      bestFor:
        "Cool-weather evenings, formal contexts, and any situation where a structured, slightly powdery profile is appropriate. Works particularly well with tailored wear.",
      avoidIf:
        "If you dislike iris, powdery profiles, or want a bright fresh scent. Also avoid in very warm weather — the iris can feel heavy.",
      verdict:
        "A strong Top OK pick. The composition is genuinely refined and would sit higher if its versatility window were wider — iris is divisive and not a universal blind buy.",
    },
    pros: [
      "Refined, structured iris-led identity",
      "Strong longevity for the category",
      "Quiet luxury character without sweetness",
    ],
    cons: [
      "Iris and powdery profiles are polarising",
      "Limited warm-weather use",
      "Recent reformulations are inconsistent",
    ],
    related: [
      "bleu-de-chanel-parfum",
      "chanel-platinum-egoiste",
      "creed-aventus",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "ex-nihilo-fleur-narcotique",
    name: "Fleur Narcotique",
    brand: "Ex Nihilo",
    fullName: "Ex Nihilo Fleur Narcotique",
    tier: "top-ok",
    rank: 3,
    gender: "unisex",
    rating: 8.5,
    longevity: 7.6,
    projection: 7.4,
    versatility: 8.2,
    uniqueness: 7.8,
    value: 6.6,
    concentration: "Eau de Parfum",
    seasons: ["spring", "summer", "autumn"],
    occasions: ["date", "smart casual", "evening"],
    notes: {
      top: ["fruit accord", "bergamot"],
      middle: ["floral accord"],
      base: ["musk", "woods"],
    },
    metaTitle: "Ex Nihilo Fleur Narcotique Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Fleur Narcotique review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Fleur Narcotique is a polished fruity-floral with broad appeal and a clean modern character, held back from the top tier by value.",
    review: {
      intro:
        "Fleur Narcotique is one of the most consistently liked niche fruity-florals. It is in Top OK rather than top tier because the composition is more accessible than original — well-executed, but not a category-mover.",
      scentProfile:
        "Commonly associated with a juicy fruit-and-bergamot opening, a soft floral heart, and a clean musky-woods base. The overall feel is bright, polished, and easy to wear.",
      performance:
        "Longevity is moderate — 6–8 hours on skin is realistic. Projection is composed and pulls in close after the first two hours. Two to three sprays is the working dose.",
      bestFor:
        "Daytime to early evening across most of the year. Works as an inoffensive luxury signature for a wide range of contexts.",
      avoidIf:
        "If you want strong projection, a distinctive identity, or cold-weather warmth. Fleur Narcotique is intentionally clean and broadly appealing.",
      verdict:
        "Strong execution, limited surprise. The composition is genuinely polished, but value is held back by retail pricing for a fragrance with broad-appeal positioning.",
    },
    pros: [
      "Broad appeal and high wearability",
      "Clean, polished fruity-floral structure",
      "Works well as a relationship-friendly signature",
    ],
    cons: [
      "Value is weak relative to performance",
      "Quiet projection",
      "Less distinctive than peers at this price",
    ],
    related: [
      "kilian-good-girl-gone-bad",
      "louis-vuitton-imagination",
      "baccarat-rouge-540",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "kilian-good-girl-gone-bad",
    name: "Good Girl Gone Bad",
    brand: "Kilian",
    fullName: "Kilian Good Girl Gone Bad",
    tier: "top-ok",
    rank: 4,
    gender: "women",
    rating: 8.4,
    longevity: 7.5,
    projection: 7.3,
    versatility: 7.8,
    uniqueness: 7.7,
    value: 6.3,
    concentration: "Eau de Parfum",
    seasons: ["spring", "summer", "autumn"],
    occasions: ["date", "smart casual", "evening"],
    notes: {
      top: ["fruit accord"],
      middle: ["jasmine", "rose", "tuberose"],
      base: ["woods", "musk"],
    },
    metaTitle: "Kilian Good Girl Gone Bad Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Good Girl Gone Bad review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Good Girl Gone Bad is a clean white-floral with confident character, held back from the top tier mostly by value.",
    review: {
      intro:
        "Good Girl Gone Bad is a polished modern white-floral with enough body to feel adult. It lands in Top OK because the composition is elegant and well-built, but not a category-defining piece.",
      scentProfile:
        "Commonly associated with a fruity opening over a tuberose-led white-floral heart, settling into a soft woods-and-musk base. The overall impression is feminine, confident, and quietly luxurious.",
      performance:
        "Longevity is moderate — 6–8 hours on skin is realistic. Projection is composed and stays close to the body after the first two hours. Two to three sprays is the working dose.",
      bestFor:
        "Daytime to early evening across most of the year. Works as a confident floral signature for smart-casual and dressed-up contexts.",
      avoidIf:
        "If you dislike heavy white florals or tuberose-led compositions. Also avoid if you want strong projection — this is a deliberately composed scent.",
      verdict:
        "Strong execution, limited surprise. Value is the weakest score because Kilian retail pricing is steep relative to longevity and projection.",
    },
    pros: [
      "Polished modern white-floral structure",
      "Confident character without becoming heavy",
      "Reliable smart-casual wearability",
    ],
    cons: [
      "Value is weak relative to performance",
      "Quiet projection",
      "Tuberose-led profile is divisive",
    ],
    related: [
      "ex-nihilo-fleur-narcotique",
      "baccarat-rouge-540",
      "louis-vuitton-imagination",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "chanel-platinum-egoiste",
    name: "Platinum Égoïste",
    brand: "Chanel",
    fullName: "Chanel Platinum Égoïste",
    tier: "top-ok",
    rank: 5,
    gender: "men",
    rating: 8.3,
    longevity: 7.4,
    projection: 7.2,
    versatility: 8.7,
    uniqueness: 7.6,
    value: 7.4,
    concentration: "Eau de Toilette",
    seasons: ["spring", "summer", "autumn"],
    occasions: ["office", "date", "smart casual"],
    notes: {
      top: ["citrus accord", "lavender"],
      middle: ["rosemary", "geranium"],
      base: ["woods", "musk"],
    },
    metaTitle: "Chanel Platinum Égoïste Review: Rating, Notes, Performance",
    metaDescription:
      "A clear Platinum Égoïste review with FashionArea rating, longevity, projection, versatility, notes, occasions, pros, cons, and verdict.",
    shortDescription:
      "Platinum Égoïste is a classic clean fougère — elegant, restrained, and unusually wearable for a fragrance with this much history.",
    review: {
      intro:
        "Platinum Égoïste is a long-running classic in the fougère category. It earns Top OK rather than top tier because, despite its elegance, it is showing its age — performance is moderate and the profile is recognisably classical rather than modern.",
      scentProfile:
        "Commonly associated with a citrus-and-lavender opening over an aromatic rosemary-and-geranium heart, settling into a clean woods-and-musk base. The overall feel is composed, dry, and unmistakably traditional.",
      performance:
        "Longevity is moderate — 5–7 hours on skin is realistic. Projection is composed and sits close to the body after the first hour. Three sprays is the working dose.",
      bestFor:
        "Daytime through smart-casual wear from spring through autumn. Works particularly well as a clean office signature for someone who already owns a louder fragrance for evenings.",
      avoidIf:
        "If you want strong projection, modern character, or a sweet or warm profile. Platinum Égoïste is intentionally restrained.",
      verdict:
        "A deserved Top OK placement. The composition is elegant, but performance is the weakest score and the profile is more classical than category-leading.",
    },
    pros: [
      "Elegant, restrained classical fougère structure",
      "High versatility for daytime contexts",
      "Easy office-friendly signature",
    ],
    cons: [
      "Moderate longevity",
      "Quiet projection",
      "Classical profile feels dated to some buyers",
    ],
    related: [
      "bleu-de-chanel-parfum",
      "dior-homme-intense",
      "louis-vuitton-imagination",
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
];

export const PERFUMES: PerfumeRating[] = RAW_PERFUMES.map((p) => ({
  ...p,
  bottleImage: p.bottleImage ?? placeholderBottle(p.slug, p.fullName),
}));

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

export function getPerfumesByTier(tier: PerfumeTier): PerfumeRating[] {
  return PERFUMES.filter((p) => p.tier === tier).sort((a, b) => a.rank - b.rank);
}
