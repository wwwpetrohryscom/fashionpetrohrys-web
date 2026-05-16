export type OutfitFormula = {
  name: string;
  pieces: string[];
  bestFor: string;
  why: string;
};

export type OutfitIdeaLink = {
  label: string;
  href: string;
};

export type OutfitIdea = {
  slug: string;
  title: string;
  h1: string;
  itemName: string;
  category: "outfit-ideas";
  href: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  intro: string;
  whyItWorks: string;
  colorRules: string[];
  bestShoes: string[];
  mistakes: string[];
  formulas: OutfitFormula[];
  relatedLinks: OutfitIdeaLink[];
  publishedAt: string;
  updatedAt: string;
};

const PUBLISHED = "2026-05-06";

export const OUTFIT_IDEAS: OutfitIdea[] = [
  {
    slug: "black-jeans-outfits-men",
    title: "Black Jeans Outfits for Men",
    h1: "Black Jeans Outfits for Men",
    itemName: "Black jeans",
    category: "outfit-ideas",
    href: "/outfit-ideas/black-jeans-outfits-men",
    metaTitle: "Black Jeans Outfits for Men: 7 Practical Formulas",
    metaDescription:
      "Practical black jeans outfits for men with color rules, shoes that work, smart casual formulas, casual looks, and mistakes to avoid.",
    shortDescription:
      "Seven black-jeans formulas that work because the rest of the outfit either matches the jeans' formality or pulls a clear contrast.",
    intro:
      "Black jeans look easy on a hanger and get hard the moment they meet shoes. They sit between casual denim and dressier trousers, and the rest of the outfit decides which side they fall on. The formulas below are organised around that single decision.",
    whyItWorks:
      "Black jeans give an outfit a clean dark anchor at the bottom. They cut visual noise compared to washed denim and they let upper-body pieces — knitwear, shirts, jackets — set the formality. The mistake is treating them like trousers when their fabric, fade, and silhouette still read as denim.",
    colorRules: [
      "Pair with off-white, cream, or grey on top to avoid the flat all-black look.",
      "Navy and camel both soften the harshness of pure black denim better than bright colors.",
      "Avoid stacking pitch black on pitch black unless the textures clearly differ.",
      "Use one warm accent — tan belt, brown loafer, camel coat — to add depth to a mostly cool palette.",
    ],
    bestShoes: [
      "Black leather loafers — sharpest pairing for shirts and knitwear.",
      "Minimal white leather sneakers — cleanest casual pairing.",
      "Suede chukkas in dark brown — bridge between smart and rugged.",
      "Black Chelsea boots — strong winter option, keep the trouser hem tidy.",
    ],
    mistakes: [
      "Wearing faded or rusty-black jeans with dressy shoes — the fade kills the formality jump.",
      "Pairing black jeans with dress shirts, ties, and dress shoes — the outfit ends up half-suit, half-casual.",
      "Using bulky athletic sneakers — they pull the outfit into streetwear without the rest of the wardrobe supporting it.",
      "Letting the hem pool over the shoe — a clean break or short stack reads better than denim puddling at the ankle.",
    ],
    formulas: [
      {
        name: "Black jeans + white Oxford shirt + black loafers",
        pieces: [
          "Straight black jeans",
          "White Oxford button-down",
          "Black penny or bit loafers",
          "Optional dark belt",
        ],
        bestFor: "Smart casual dinner, evening out, weekday client meeting in a relaxed office.",
        why: "Three pieces, one strong contrast (white shirt against black jeans), and shoes that match the jeans' colour. The outfit reads composed without trying to look like a suit.",
      },
      {
        name: "Black jeans + grey knit + white sneakers",
        pieces: [
          "Black jeans",
          "Mid-grey crew or quarter-zip knit",
          "Minimal white leather sneakers",
        ],
        bestFor: "Cooler-weather weekend, casual office, neighbourhood lunch.",
        why: "Grey breaks the all-black trap and the white sneakers stop the outfit from going too heavy. The texture in the knit does the rest of the work.",
      },
      {
        name: "Black jeans + black T-shirt + overshirt",
        pieces: [
          "Black jeans",
          "Plain black T-shirt with a clean collar",
          "Olive or sand overshirt",
          "Suede boots or leather sneakers",
        ],
        bestFor: "Casual evening, travel, art and creative settings.",
        why: "The overshirt carries the colour, the black base stays controlled, and the texture contrast keeps it from looking like a uniform.",
      },
      {
        name: "Black jeans + navy chore jacket + leather sneakers",
        pieces: [
          "Black jeans",
          "Navy cotton or wool chore jacket",
          "White or cream T-shirt",
          "Clean leather sneakers",
        ],
        bestFor: "Casual office, weekend travel, daytime city.",
        why: "Navy adds depth that pure black can't carry on its own. The chore jacket softens the silhouette and keeps the look workwear-adjacent rather than dressed up.",
      },
      {
        name: "Black jeans + camel coat + charcoal sweater",
        pieces: [
          "Black jeans",
          "Charcoal merino or lambswool crew",
          "Knee-length camel overcoat",
          "Brown derby boots",
        ],
        bestFor: "Cold-weather smart casual, winter dinner, errands you want to look composed for.",
        why: "Camel breaks the cool palette and brown derbies tie back to the warm note. The outfit has three tones doing different jobs instead of one tone repeating.",
      },
      {
        name: "Black jeans + white T-shirt + leather jacket",
        pieces: [
          "Black jeans",
          "Heavyweight plain white T-shirt",
          "Black or dark brown leather jacket",
          "Black Chelsea boots",
        ],
        bestFor: "Evening, casual date, music venue.",
        why: "Classic for a reason. The white T-shirt is the only break in the dark base, and the leather and denim share a casual register so nothing fights.",
      },
      {
        name: "Black jeans + blazer + minimal sneakers",
        pieces: [
          "Black jeans (clean, not washed)",
          "Soft navy or charcoal blazer",
          "Fine merino knit or plain T-shirt",
          "Minimal white leather sneakers",
        ],
        bestFor: "Smart casual office without a meeting, evening dinner, dressed-up casual event.",
        why: "Works only if the jeans are unwashed and the blazer is unstructured. A formal blazer over washed denim looks like a costume — the formula needs the jeans to read trouser-ish.",
      },
    ],
    relatedLinks: [
      { label: "Grey trousers outfits", href: "/outfit-ideas/grey-trousers-outfits-men" },
      { label: "White sneakers outfits", href: "/outfit-ideas/white-sneakers-outfits-men" },
      { label: "Simple outfit formulas", href: "/outfits/simple-outfit-formulas" },
      { label: "The System", href: "/system" },
      { label: "All outfit ideas", href: "/outfit-ideas" },
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "navy-blazer-outfits-men",
    title: "Navy Blazer Outfits for Men",
    h1: "Navy Blazer Outfits for Men",
    itemName: "Navy blazer",
    category: "outfit-ideas",
    href: "/outfit-ideas/navy-blazer-outfits-men",
    metaTitle: "Navy Blazer Outfits for Men: Smart Style Formulas",
    metaDescription:
      "Navy blazer outfits for men with smart casual formulas, trouser choices, shirt colors, shoe rules, and common styling mistakes.",
    shortDescription:
      "Seven navy-blazer formulas built around one rule: the trousers and shoes have to sit at the same level of formality as the jacket.",
    intro:
      "A navy blazer is one of the most useful pieces in a men's wardrobe and one of the easiest to misuse. The mistake is treating it like a suit jacket that lost its trousers. A real blazer has texture, softer construction, and details that mean it can stand alone with the right pieces underneath.",
    whyItWorks:
      "Navy is a neutral that combines with almost every trouser colour men actually own. The blazer adds structure without forcing the outfit toward formal-only. When the trousers, shirt, and shoes meet the jacket's register, the whole outfit reads intentional. When they don't, the jacket reads orphaned.",
    colorRules: [
      "Pair with grey, cream, or charcoal trousers — black trousers usually look like a misplaced suit.",
      "White, light blue, and pale pink shirts cover most situations; loud patterns rarely help.",
      "Add a knit or polo under the blazer when you want to dress down without losing the structure.",
      "If the trousers are bright, the rest of the outfit needs to quiet down. Never stack three loud notes under the blazer.",
    ],
    bestShoes: [
      "Brown leather loafers — the safest pairing across grey, cream, and tan trousers.",
      "Suede loafers in mid-brown or navy — softens the outfit for warmer weather.",
      "Clean leather sneakers — work with dark denim or chinos when the rest of the outfit is unfussy.",
      "Brown derbies — slightly more structured than loafers and good with wool trousers.",
    ],
    mistakes: [
      "Wearing the blazer with black dress trousers — it instantly reads like a suit that lost its match.",
      "Pairing structured blazers with washed jeans — the formality gap shows immediately.",
      "Choosing a blazer with shiny gold buttons unless the rest of the outfit deliberately leans nautical.",
      "Letting the sleeve fully cover the shirt cuff — a quarter to half inch of cuff reads composed.",
    ],
    formulas: [
      {
        name: "Navy blazer + grey trousers + white shirt + brown loafers",
        pieces: [
          "Soft navy blazer in hopsack or fresco",
          "Mid-grey wool trousers",
          "White Oxford or fine cotton shirt",
          "Brown leather loafers",
          "Optional brown belt",
        ],
        bestFor: "Office, business casual meetings, evening dinner that asks for a jacket.",
        why: "This is the baseline formula. Grey separates the blazer from suit logic, white anchors the centre, brown shoes pull warmth into a mostly cool palette.",
      },
      {
        name: "Navy blazer + cream chinos + light blue shirt + suede loafers",
        pieces: [
          "Navy blazer",
          "Cream or off-white chinos",
          "Pale blue Oxford shirt",
          "Suede loafers in mid brown",
        ],
        bestFor: "Late spring through early autumn, garden parties, daytime weddings.",
        why: "Cream brightens the whole outfit, blue softens the white-shirt default, suede dials the formality down so the blazer doesn't read like a wedding guest uniform.",
      },
      {
        name: "Navy blazer + dark denim + Oxford shirt + leather sneakers",
        pieces: [
          "Soft, unstructured navy blazer",
          "Straight, dark unwashed denim",
          "White or pale blue Oxford shirt",
          "Minimal white or off-white leather sneakers",
        ],
        bestFor: "Smart casual evening, weekend dinner, modern office without a strict dress code.",
        why: "Only works when the blazer is unstructured and the denim has zero fade. Both pieces have to soften slightly to meet in the middle.",
      },
      {
        name: "Navy blazer + charcoal trousers + fine knit polo",
        pieces: [
          "Navy blazer",
          "Charcoal wool or wool-blend trousers",
          "Fine merino knit polo in white, cream, or navy",
          "Brown loafers or derbies",
        ],
        bestFor: "Office days without meetings, cooler weather, evening drinks.",
        why: "The polo removes the shirt-collar formality without dropping the outfit into casual. Charcoal trousers prevent the jacket from looking suit-displaced.",
      },
      {
        name: "Navy blazer + white T-shirt + tailored trousers",
        pieces: [
          "Soft navy blazer",
          "Heavyweight plain white T-shirt",
          "Mid grey or stone tailored trousers",
          "White leather sneakers or suede loafers",
        ],
        bestFor: "Casual summer, dressed-up holiday, evening on warm nights.",
        why: "The T-shirt has to be heavyweight and well-fitted; a thin T-shirt undercuts the jacket. Tailored trousers do the heavy lifting on the bottom.",
      },
      {
        name: "Navy blazer + olive chinos + blue shirt",
        pieces: [
          "Navy blazer",
          "Olive or fatigue green chinos",
          "Mid-blue or pale blue Oxford shirt",
          "Brown derbies or suede loafers",
        ],
        bestFor: "Daytime, autumn weather, casual events that still want a jacket.",
        why: "Olive is one of the few non-neutral colours that pairs cleanly with navy. The blue shirt links the chest and the trousers without being loud.",
      },
      {
        name: "Navy blazer + turtleneck + wool trousers",
        pieces: [
          "Navy blazer",
          "Fine merino or cashmere turtleneck in cream, camel, or charcoal",
          "Charcoal or mid-grey wool trousers",
          "Brown leather Chelsea boots or derbies",
        ],
        bestFor: "Cold-weather evening, dinner, business-casual winter wear.",
        why: "Replaces the shirt-and-tie register with one continuous neckline. The texture of the knit does the work the tie would otherwise do.",
      },
    ],
    relatedLinks: [
      { label: "Grey trousers outfits", href: "/outfit-ideas/grey-trousers-outfits-men" },
      { label: "White shirt outfits", href: "/outfit-ideas/white-shirt-outfits-men" },
      { label: "Loafers outfits", href: "/outfit-ideas/loafers-outfits-men" },
      { label: "Simple outfit formulas", href: "/outfits/simple-outfit-formulas" },
      { label: "The System", href: "/system" },
      { label: "All outfit ideas", href: "/outfit-ideas" },
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "white-shirt-outfits-men",
    title: "White Shirt Outfits for Men",
    h1: "White Shirt Outfits for Men",
    itemName: "White shirt",
    category: "outfit-ideas",
    href: "/outfit-ideas/white-shirt-outfits-men",
    metaTitle: "White Shirt Outfits for Men: Clean Style Formulas",
    metaDescription:
      "White shirt outfits for men with smart casual ideas, trouser pairings, layering rules, shoe choices, and mistakes to avoid.",
    shortDescription:
      "Seven white-shirt formulas that change with the shirt fabric — Oxford, dress, and linen each pull the outfit in a different direction.",
    intro:
      "Every man owns a white shirt and almost no one separates the three white shirts from each other. A crisp dress shirt, an Oxford, and a linen are not interchangeable. They sit at different points on the formality ladder, and the rest of the outfit should match the shirt you actually picked.",
    whyItWorks:
      "White brightens the outfit and creates a clean break between the face and the trousers. It frames jackets, knitwear, and shoes so each one shows clearly. The danger is that a white shirt with no context — no jacket, no good trousers, no chosen shoe — can read corporate or unfinished.",
    colorRules: [
      "Pair with navy, grey, charcoal, or olive trousers — black trousers usually need a jacket to balance.",
      "Add one warm note (tan belt, brown loafer, camel knit) so the outfit isn't all cool tones.",
      "Avoid bright accent colours next to the shirt — the white amplifies them.",
      "If the shirt is linen, lean into warm earth tones; linen with stark cool tones can read off-season.",
    ],
    bestShoes: [
      "Brown leather loafers — the most flexible pairing with chinos or grey trousers.",
      "White leather sneakers — keep them minimal; chunky athletic shoes break the outfit.",
      "Suede chukkas — bridge the gap when the shirt is Oxford or linen.",
      "Black derbies — only with a jacket and structured trousers, otherwise the shoes outrank everything else.",
    ],
    mistakes: [
      "Wearing a stiff dress shirt with washed jeans and sneakers — the formalities don't meet.",
      "Leaving a linen shirt half-tucked over technical trousers — fabric mismatch shows immediately.",
      "Choosing a shirt that's too thin under a light jacket — the fabric should hold its line through the day.",
      "Forgetting the collar shape — a soft collar that won't stand up looks tired by 11 a.m.",
    ],
    formulas: [
      {
        name: "White Oxford shirt + navy chinos + brown loafers",
        pieces: [
          "White Oxford button-down",
          "Mid- or dark-navy chinos",
          "Brown penny loafers",
          "Optional brown belt",
        ],
        bestFor: "Office, weekday lunch meeting, casual evening.",
        why: "Oxford cotton sits comfortably between smart and casual. Navy chinos hold the bottom and brown shoes warm the palette.",
      },
      {
        name: "White dress shirt + grey trousers + navy blazer",
        pieces: [
          "Plain white dress shirt with a stiffer collar",
          "Mid-grey wool trousers",
          "Soft navy blazer",
          "Black or dark brown derbies",
        ],
        bestFor: "Business casual to business formal, dinner that calls for a jacket.",
        why: "All four pieces sit at the same register. The shirt's stiffness is supported by the jacket and the wool trousers carry the formality through to the shoes.",
      },
      {
        name: "White linen shirt + cream trousers + sandals or loafers",
        pieces: [
          "White or off-white linen shirt",
          "Cream linen or cotton trousers",
          "Brown leather sandals or suede loafers",
        ],
        bestFor: "Summer holidays, warm-weather lunch, daytime events.",
        why: "Linen on linen is allowed because the texture changes the read. Brown shoes break the all-cream tone before it goes monotone.",
      },
      {
        name: "White shirt + black jeans + black loafers",
        pieces: [
          "White Oxford or fine cotton shirt",
          "Straight black jeans",
          "Black leather loafers",
        ],
        bestFor: "Smart casual evening, gallery opening, urban dinner.",
        why: "High contrast on a small palette. The shoes match the jeans so the eye reads the shirt as the focal point.",
      },
      {
        name: "White shirt + olive trousers + suede jacket",
        pieces: [
          "White Oxford shirt",
          "Olive cotton or wool trousers",
          "Mid-brown suede jacket",
          "Brown derby boots or loafers",
        ],
        bestFor: "Autumn smart casual, daytime weekend, dressed-up errands.",
        why: "Olive and suede share warm earth tones. The white shirt acts as the bright break between the two warm pieces.",
      },
      {
        name: "White shirt + dark denim + chore jacket",
        pieces: [
          "White Oxford shirt",
          "Straight dark denim",
          "Sand, navy, or olive chore jacket",
          "Leather sneakers or suede boots",
        ],
        bestFor: "Casual office, weekend, travel.",
        why: "The chore jacket softens the shirt and keeps the outfit from leaning corporate. Dark denim holds the bottom without stealing attention.",
      },
      {
        name: "White shirt + charcoal suit separates",
        pieces: [
          "White Oxford or dress shirt",
          "Charcoal suit jacket worn as a blazer",
          "Charcoal trousers",
          "Black derbies or brown loafers",
        ],
        bestFor: "Office day with a meeting, evening dinner.",
        why: "Charcoal carries enough texture to look intentional. The shirt has to be crisp — a tired collar breaks the whole register.",
      },
    ],
    relatedLinks: [
      { label: "Navy blazer outfits", href: "/outfit-ideas/navy-blazer-outfits-men" },
      { label: "Grey trousers outfits", href: "/outfit-ideas/grey-trousers-outfits-men" },
      { label: "Loafers outfits", href: "/outfit-ideas/loafers-outfits-men" },
      { label: "Simple outfit formulas", href: "/outfits/simple-outfit-formulas" },
      { label: "The System", href: "/system" },
      { label: "All outfit ideas", href: "/outfit-ideas" },
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "loafers-outfits-men",
    title: "Loafers Outfits for Men",
    h1: "Loafers Outfits for Men",
    itemName: "Loafers",
    category: "outfit-ideas",
    href: "/outfit-ideas/loafers-outfits-men",
    metaTitle: "Loafers Outfits for Men: Smart Casual Formulas",
    metaDescription:
      "Loafers outfits for men with trousers, jeans, socks, color rules, smart casual combinations, and mistakes to avoid.",
    shortDescription:
      "Seven loafer formulas built around the two details that decide whether they work: trouser break and sock choice.",
    intro:
      "Loafers are slip-on shoes with strong wardrobe range, and they fall apart the moment the trouser hem is wrong. The shoe is exposed compared to a derby or boot, so the eye lands on the foot and reads everything around it. The formulas below assume the trouser ends at the right point and the sock is decided on purpose.",
    whyItWorks:
      "A loafer brings a finished line to the bottom of the outfit. It dresses up jeans without making them look forced and dresses down wool trousers without making them look unfinished. The shape — penny, bit, tassel, suede driver — sets the formality ceiling before anything else.",
    colorRules: [
      "Brown loafers pair with grey, navy, olive, cream, and tan trousers.",
      "Black loafers pair best with black, charcoal, and dark jeans.",
      "Suede loafers warm up cool trousers and work well in spring through autumn.",
      "Avoid mixing brown shoe leather with a black belt; the belt and shoe should share a leather family.",
    ],
    bestShoes: [
      "Penny loafers in mid-brown leather — most useful single pair across smart casual.",
      "Tassel loafers in dark brown — slightly dressier; lean office or evening.",
      "Suede loafers in tobacco or navy — soften smart casual outfits and work well with chinos.",
      "Bit loafers in dark brown or black — sharper line; pair with structured trousers.",
    ],
    mistakes: [
      "Letting the trouser hem stack over the loafer — kills the clean line that loafers exist to give.",
      "Wearing thick athletic crew socks above no-show level — the sock peeks and breaks the outfit.",
      "Pairing loafers with technical fabrics like nylon trousers — formality and material clash.",
      "Choosing loafers with chunky rubber soles for smart casual — they read commuter, not office.",
    ],
    formulas: [
      {
        name: "Brown loafers + grey trousers + white shirt",
        pieces: [
          "Mid-brown penny loafers",
          "Mid-grey wool trousers",
          "White Oxford shirt",
          "Optional brown belt",
        ],
        bestFor: "Smart casual office, business-casual day, dinner.",
        why: "The cleanest loafer outfit. Three pieces, one warm note, and a trouser break that lets the shoe show in full.",
      },
      {
        name: "Black loafers + black jeans + white Oxford shirt",
        pieces: [
          "Black bit or penny loafers",
          "Straight black jeans",
          "White Oxford shirt",
        ],
        bestFor: "Urban evening, smart casual dinner, gallery or restaurant.",
        why: "Shoes match the jeans so the visual weight stays at the bottom. The white shirt brings the focus up.",
      },
      {
        name: "Suede loafers + cream chinos + navy knit polo",
        pieces: [
          "Tobacco suede loafers",
          "Cream cotton chinos",
          "Navy fine-knit polo",
        ],
        bestFor: "Late spring, lunch meeting, daytime event.",
        why: "Suede and cream share warm tones, and navy gives the outfit a clear focal point. Avoid stacking another warm piece on top.",
      },
      {
        name: "Dark brown loafers + navy blazer + grey trousers",
        pieces: [
          "Dark brown penny or bit loafers",
          "Navy blazer",
          "Mid-grey wool trousers",
          "White or pale blue Oxford shirt",
        ],
        bestFor: "Office with meetings, dinner, business casual evening.",
        why: "Loafers replace the derby in a classic blazer outfit. The shoe softens the formality just enough.",
      },
      {
        name: "Loafers + linen shirt + relaxed trousers",
        pieces: [
          "Suede or unlined leather loafers",
          "White or pale blue linen shirt",
          "Relaxed-fit linen or cotton trousers",
        ],
        bestFor: "Summer, hotel lobby, warm-weather dinner.",
        why: "The linen pulls the outfit casual and the loafers stop it from reading beachwear. Tuck only loosely; over-tucking ruins linen's drape.",
      },
      {
        name: "Loafers + denim + chore jacket",
        pieces: [
          "Mid-brown leather loafers",
          "Straight dark denim",
          "Sand or olive chore jacket",
          "Plain T-shirt or Oxford shirt underneath",
        ],
        bestFor: "Casual weekend, smart-casual weekday in a relaxed office.",
        why: "Loafers lift denim out of full casual. The chore jacket prevents the outfit from leaning preppy.",
      },
      {
        name: "Loafers + turtleneck + wool trousers",
        pieces: [
          "Dark brown or black loafers",
          "Fine merino or cashmere turtleneck in cream or charcoal",
          "Mid-grey or charcoal wool trousers",
        ],
        bestFor: "Cold-weather evening, dinner, restaurant.",
        why: "Turtleneck replaces the shirt collar with knit texture. The loafers keep the line clean below the trouser break.",
      },
    ],
    relatedLinks: [
      { label: "Grey trousers outfits", href: "/outfit-ideas/grey-trousers-outfits-men" },
      { label: "Black jeans outfits", href: "/outfit-ideas/black-jeans-outfits-men" },
      { label: "Navy blazer outfits", href: "/outfit-ideas/navy-blazer-outfits-men" },
      { label: "Simple outfit formulas", href: "/outfits/simple-outfit-formulas" },
      { label: "The System", href: "/system" },
      { label: "All outfit ideas", href: "/outfit-ideas" },
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "white-sneakers-outfits-men",
    title: "White Sneakers Outfits for Men",
    h1: "White Sneakers Outfits for Men",
    itemName: "White sneakers",
    category: "outfit-ideas",
    href: "/outfit-ideas/white-sneakers-outfits-men",
    metaTitle: "White Sneakers Outfits for Men: Clean Casual Ideas",
    metaDescription:
      "White sneakers outfits for men with smart casual formulas, jeans, trousers, shirt pairings, color rules, and mistakes to avoid.",
    shortDescription:
      "Seven white-sneaker formulas that work because the sneaker is minimal leather, not athletic — the shoe's silhouette controls the outfit's ceiling.",
    intro:
      "White sneakers became the default casual shoe because they bridge denim and tailoring. They only keep working when the sneaker stays minimal — clean uppers, low profile, no chunky soles, no aggressive branding. The formulas below assume that shoe, not a running shoe pretending to be one.",
    whyItWorks:
      "A clean white sneaker is the lowest-formality piece that still reads intentional. It quietly lifts denim, chinos, and tailored trousers a level above athletic. The outfit looks chosen rather than thrown on, while staying comfortable enough for full days on foot.",
    colorRules: [
      "Pair with any neutral trouser — navy, grey, charcoal, cream, dark denim, black jeans.",
      "Avoid white socks above the sneaker collar in smart casual; opt for invisible socks or low-rise navy/grey.",
      "Don't stack white on white on white — sneaker, T-shirt, trousers all in white reads either fashion editorial or accidental.",
      "Use a warm or coloured top piece to break the cool palette the sneakers create.",
    ],
    bestShoes: [
      "Minimal leather sneakers (Common Projects, Koio, Veja style) — the universal pick.",
      "Plain canvas low-tops — work in casual outfits but cap formality lower.",
      "Suede low-profile sneakers in off-white — softer pairing with chinos and linen.",
      "Avoid bulky runners and thick foam soles when pairing with anything dressier than weekend wear.",
    ],
    mistakes: [
      "Wearing actively athletic sneakers with chinos or tailored trousers — the silhouette mismatch is visible.",
      "Letting the sneakers stay grey or dirty — white sneakers depend on looking clean.",
      "Pairing with formal dress trousers and a tie — the shoes outrank themselves into a costume.",
      "Stacking bright socks that show through the trouser break — pick low or invisible.",
    ],
    formulas: [
      {
        name: "White sneakers + dark denim + white T-shirt + overshirt",
        pieces: [
          "Minimal white leather sneakers",
          "Straight dark unwashed denim",
          "Heavyweight plain white T-shirt",
          "Olive or sand overshirt",
        ],
        bestFor: "Weekend, casual travel, mid-day errands.",
        why: "The overshirt carries the colour, the sneakers stay invisible, and the T-shirt links the sneaker tone to the chest.",
      },
      {
        name: "White sneakers + grey trousers + navy knit",
        pieces: [
          "Minimal white leather sneakers",
          "Mid-grey wool or cotton trousers",
          "Navy crewneck or fine-knit polo",
        ],
        bestFor: "Casual office, dinner, daytime walking around.",
        why: "Three neutrals, one warm break in the sneakers. The knit dresses the outfit up without forcing dress shoes.",
      },
      {
        name: "White sneakers + black jeans + grey sweater",
        pieces: [
          "Minimal white leather sneakers",
          "Straight black jeans",
          "Mid-grey crewneck sweater",
        ],
        bestFor: "Cooler weather casual, weekend, errands.",
        why: "Grey softens the black-and-white contrast. The sneakers stop the jeans from going too dark all the way down.",
      },
      {
        name: "White sneakers + navy chinos + Oxford shirt",
        pieces: [
          "Minimal white leather sneakers",
          "Mid- or dark-navy chinos",
          "White or pale blue Oxford shirt",
        ],
        bestFor: "Smart-casual office, lunch meeting, weekend dressed up.",
        why: "Classic smart casual minus the loafers. The sneakers keep the outfit from skewing too dressy, the Oxford keeps it from leaning lazy.",
      },
      {
        name: "White sneakers + cream trousers + linen shirt",
        pieces: [
          "Minimal white leather sneakers",
          "Cream linen or cotton trousers",
          "Pale blue or white linen shirt",
        ],
        bestFor: "Summer dinner, holiday, warm-weather event.",
        why: "Three light pieces with texture differentiation. The sneakers anchor the palette without darkening it.",
      },
      {
        name: "White sneakers + relaxed suit separates",
        pieces: [
          "Minimal white leather sneakers",
          "Soft navy or charcoal suit jacket worn as a blazer",
          "Matching trousers",
          "Plain white T-shirt or Oxford shirt",
        ],
        bestFor: "Modern office that allows sneakers, casual evening event, travel.",
        why: "Only works when the suit fabric is matte and the jacket is unstructured. A sharp suit with sneakers reads costume.",
      },
      {
        name: "White sneakers + chore jacket + tapered trousers",
        pieces: [
          "Minimal white leather sneakers",
          "Navy or sand chore jacket",
          "Tapered chinos or cotton trousers",
          "Plain T-shirt or fine knit underneath",
        ],
        bestFor: "Weekend, casual office, daytime city wear.",
        why: "The chore jacket adds structure, the tapered trousers tidy the line at the ankle, and the sneakers keep it relaxed.",
      },
    ],
    relatedLinks: [
      { label: "Black jeans outfits", href: "/outfit-ideas/black-jeans-outfits-men" },
      { label: "Grey trousers outfits", href: "/outfit-ideas/grey-trousers-outfits-men" },
      { label: "White shirt outfits", href: "/outfit-ideas/white-shirt-outfits-men" },
      { label: "Simple outfit formulas", href: "/outfits/simple-outfit-formulas" },
      { label: "The System", href: "/system" },
      { label: "All outfit ideas", href: "/outfit-ideas" },
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
  {
    slug: "grey-trousers-outfits-men",
    title: "Grey Trousers Outfits for Men",
    h1: "Grey Trousers Outfits for Men",
    itemName: "Grey trousers",
    category: "outfit-ideas",
    href: "/outfit-ideas/grey-trousers-outfits-men",
    metaTitle: "Grey Trousers Outfits for Men: Sharp Style Formulas",
    metaDescription:
      "Grey trousers outfits for men with blazer pairings, knitwear, shirts, shoes, smart casual formulas, and mistakes to avoid.",
    shortDescription:
      "Seven grey-trouser formulas that use the most flexible men's bottom piece — grey separates cleanly from navy, black, brown, white, and cream.",
    intro:
      "If you only own one pair of trousers that isn't denim, it should be mid-grey wool. Grey works because it doesn't fight any common upper-body piece. It is the wardrobe anchor that turns isolated jackets and knitwear into actual outfits.",
    whyItWorks:
      "Grey reduces visual contrast. That makes jackets, shirts, and shoes easier to read as themselves rather than as suit components. A navy blazer with grey trousers reads like a jacket and trousers, not like a suit missing its other half. The same trousers let a knit, a polo, or an Oxford shirt land cleanly without competing colour.",
    colorRules: [
      "Pair with navy, white, cream, charcoal, camel, and olive for safe combinations.",
      "Avoid pairing mid-grey with light grey on top — the near-match looks accidental.",
      "Use one warm note (brown shoe, tan belt, cream knit) to balance the cool palette.",
      "Charcoal trousers go further toward formal; mid-grey is the most flexible across smart casual.",
    ],
    bestShoes: [
      "Brown leather loafers — smart casual default.",
      "Brown derbies — slight bump in formality for office or dinner.",
      "Suede chukkas or loafers in tobacco — warm break for cooler weather.",
      "Black loafers or derbies — only when the rest of the outfit is dark or formal.",
    ],
    mistakes: [
      "Wearing mid-grey trousers with light grey knit — the colours sit too close and look unconsidered.",
      "Pairing with athletic running shoes — the technical sole clashes with wool's drape.",
      "Adding too many accent colours — grey trousers reward a quiet palette around them.",
      "Mixing black shoe leather with a brown belt — neutrals still need a leather family decision.",
    ],
    formulas: [
      {
        name: "Grey trousers + navy blazer + white shirt + brown loafers",
        pieces: [
          "Mid-grey wool trousers",
          "Soft navy blazer",
          "White Oxford or fine cotton shirt",
          "Mid-brown penny loafers",
        ],
        bestFor: "Office, smart casual dinner, business meeting.",
        why: "The standard formula. Grey separates the blazer from suit logic, white anchors the centre, brown shoes pull warmth into the cool base.",
      },
      {
        name: "Grey trousers + black knit + black loafers",
        pieces: [
          "Mid-grey wool trousers",
          "Black merino crewneck or fine knit",
          "Black penny or bit loafers",
        ],
        bestFor: "Smart casual evening, gallery, dinner.",
        why: "Charcoal-leaning grey reads well against black. The outfit stays low-contrast and intentional. Avoid this in summer; the palette runs cold.",
      },
      {
        name: "Grey trousers + white T-shirt + suede jacket",
        pieces: [
          "Mid-grey trousers",
          "Heavyweight plain white T-shirt",
          "Mid-brown suede jacket",
          "Brown loafers or suede chukkas",
        ],
        bestFor: "Autumn smart casual, daytime weekend.",
        why: "Suede and brown leather share warm tones. The white T-shirt frames the jacket without competing with it.",
      },
      {
        name: "Grey trousers + navy polo + white sneakers",
        pieces: [
          "Mid-grey trousers",
          "Navy fine-knit polo or piqué polo",
          "Minimal white leather sneakers",
        ],
        bestFor: "Casual office, weekend out, daytime travel.",
        why: "Three neutrals with one bright break at the foot. The polo lifts the outfit a level above a T-shirt without forcing a shirt collar.",
      },
      {
        name: "Grey trousers + camel coat + charcoal sweater",
        pieces: [
          "Mid-grey trousers",
          "Charcoal merino crew or quarter-zip",
          "Knee-length camel overcoat",
          "Brown derby boots",
        ],
        bestFor: "Cold-weather smart casual, winter dinner, daytime errands.",
        why: "Camel and brown carry the warmth. Charcoal on grey is close enough to look intentional because the textures differ.",
      },
      {
        name: "Grey trousers + light blue shirt + brown derbies",
        pieces: [
          "Mid-grey wool trousers",
          "Pale blue Oxford shirt",
          "Mid-brown derbies",
        ],
        bestFor: "Office, business casual meeting, dinner.",
        why: "Blue on grey is one of the calmest combinations in menswear. Derbies sharpen the line slightly compared to loafers.",
      },
      {
        name: "Grey trousers + cream knit + suede loafers",
        pieces: [
          "Mid-grey wool trousers",
          "Cream fine-knit crewneck or quarter-zip",
          "Tobacco suede loafers",
        ],
        bestFor: "Spring or autumn smart casual, daytime weekend.",
        why: "Cream warms the cool grey without going beige. Suede loafers carry the warm tone down to the foot for a balanced palette.",
      },
    ],
    relatedLinks: [
      { label: "Navy blazer outfits", href: "/outfit-ideas/navy-blazer-outfits-men" },
      { label: "White shirt outfits", href: "/outfit-ideas/white-shirt-outfits-men" },
      { label: "Loafers outfits", href: "/outfit-ideas/loafers-outfits-men" },
      { label: "Simple outfit formulas", href: "/outfits/simple-outfit-formulas" },
      { label: "The System", href: "/system" },
      { label: "All outfit ideas", href: "/outfit-ideas" },
    ],
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
  },
];

export const OUTFIT_IDEA_SLUGS = OUTFIT_IDEAS.map((idea) => idea.slug);

export function getOutfitIdea(slug: string): OutfitIdea | undefined {
  return OUTFIT_IDEAS.find((idea) => idea.slug === slug);
}
