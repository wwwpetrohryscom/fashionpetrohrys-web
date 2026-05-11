export type GuideArticleSlug =
  | "old-money-style-men"
  | "quiet-luxury-style"
  | "how-to-build-personal-style"
  | "smart-casual-dress-code"
  | "how-to-match-colors-in-outfits";

export type GuideArticleLink = {
  href: string;
  label: string;
  description: string;
};

export type GuideArticleSection = {
  title: string;
  body: string[];
  subsections?: Array<{
    title: string;
    body: string;
  }>;
  checklist?: string[];
};

export type GuideArticle = {
  slug: GuideArticleSlug;
  title: string;
  metaTitle: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  intro: string[];
  internalLinks: GuideArticleLink[];
  sections: GuideArticleSection[];
};

export const GUIDE_ARTICLES: Record<GuideArticleSlug, GuideArticle> = {
  "old-money-style-men": {
    slug: "old-money-style-men",
    title: "Old Money Style for Men",
    metaTitle: "Old Money Style for Men: Practical Wardrobe Guide",
    description:
      "A practical guide to old money style for men, covering fit, fabrics, colors, key pieces, outfit formulas, and what to avoid.",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-11",
    readTime: "9 min read",
    intro: [
      "Old money style is usually described badly. Online it becomes a costume: loafers without context, a sweater tied over the shoulders, a blazer worn as a wealth signal. The useful version is quieter. It is built from restraint, fit, fabric, and repeatable outfit logic.",
      "The goal is not to look rich. The goal is to remove visual noise. A good old money outfit looks considered because the pieces share formality, color temperature, and fabric quality. Nothing is fighting for attention, and nothing looks like it was purchased to announce status.",
    ],
    internalLinks: [
      {
        href: "/method",
        label: "The Method",
        description: "Use the site method to turn this look into repeatable rules.",
      },
      {
        href: "/system",
        label: "The System",
        description: "Check formality, silhouette, color, and layers before buying.",
      },
      {
        href: "/clothing/how-to-check-clothing-quality",
        label: "Clothing quality",
        description: "Fabric and construction matter more than labels here.",
      },
      {
        href: "/guides/how-to-match-colors-in-outfits",
        label: "Color matching",
        description: "Old money outfits depend on narrow, disciplined color ranges.",
      },
    ],
    sections: [
      {
        title: "What old money style actually means",
        body: [
          "In practical wardrobe terms, old money style means low-contrast clothing, natural fabrics, conservative fit, and pieces that can be worn for years without looking tied to a short trend cycle. It is closer to institutional dressing than influencer dressing: country clubs, old universities, sailing clubs, finance offices, and weekend houses all shaped the language.",
          "That history does not mean you need the lifestyle. It means the clothes should look useful, maintained, and settled. A navy blazer works only if the trousers match its formality. If the jacket is structured and the trousers are washed denim, the outfit reads split in half. The signal is consistency, not price.",
        ],
      },
      {
        title: "Key wardrobe pieces",
        body: [
          "Start with pieces that have a wide range on the formality ladder: navy blazer, oxford shirts, fine knitwear, wool trousers, chinos, straight dark denim, loafers, derbies, a plain leather belt, and a clean outer layer such as a trench, car coat, or wool overcoat. None of these pieces needs a visible logo.",
          "The most useful pieces are not loud. A white oxford shirt can sit under a blazer, under knitwear, or on its own with chinos. A navy crewneck can dress down wool trousers or clean up denim. Brown loafers can support business casual and smart casual. Build from range before character.",
        ],
      },
      {
        title: "Colors and fabrics",
        body: [
          "The palette should be narrow: navy, white, cream, grey, olive, camel, dark brown, mid blue, and black only where it belongs. This does not mean every outfit is beige. It means the colors are easy to combine without creating harsh breaks. Navy plus white plus brown is the safest starting point.",
          "Fabric does more work than branding. Cotton oxford, brushed cotton, wool flannel, merino, cashmere blends, linen, suede, and full-grain leather all age more naturally than shiny synthetics. If a piece looks thin, overly stretchy, or reflective, it will fight the quiet character of the wardrobe.",
        ],
      },
      {
        title: "Fit rules",
        body: [
          "Fit should be clean, not tight. Jackets need enough structure to hold the shoulder without looking armored. Trousers should have room through the thigh and fall cleanly over the shoe. Shirts should sit close at the neck and shoulder but not pull across the chest.",
          "Avoid extreme silhouettes. Very skinny trousers make classic pieces look dated. Oversized fits make the outfit read borrowed. The target is regular with small adjustments: a slightly higher trouser rise, a jacket sleeve that shows shirt cuff, and knitwear that sits at the waistband instead of hanging past it.",
        ],
      },
      {
        title: "Outfit formulas",
        body: [
          "Formula one: navy blazer, white oxford, grey wool trousers, brown loafers. This is the cleanest version because every piece sits in the same formality range. Formula two: cream knit, blue oxford, dark denim, suede loafers. This moves casual without losing control.",
          "Formula three: olive waxed jacket, pale shirt, navy knit, chinos, brown derbies. This works because the outer layer adds texture instead of branding. Formula four: linen shirt, tailored shorts, leather sandals or loafers, woven belt. For warm weather, fabric and proportion carry the outfit.",
        ],
      },
      {
        title: "What to avoid",
        body: [
          "Avoid costume signals: crests, fake club badges, oversized gold hardware, aggressive loafers, novelty ties, and anything purchased because a short video called it old money. The style fails when it looks like a character. It should look like a wardrobe you use repeatedly.",
          "Also avoid mixing levels carelessly. A structured blazer with athletic running shoes is not relaxed old money; it is a formality mismatch. A cashmere sweater does not rescue poor trousers. The low-key look only works when the entire outfit follows the same rules.",
        ],
      },
      {
        title: "Final checklist",
        body: [
          "Use this checklist before buying or wearing an old money inspired outfit. It keeps the look practical and prevents the costume problem.",
        ],
        checklist: [
          "No visible logos are doing the main work.",
          "The colors sit in a narrow, repeatable palette.",
          "The fabrics look natural, matte, and durable.",
          "The fit is clean without being tight or oversized.",
          "Shoes match the formality of the jacket and trousers.",
          "At least three pieces can be reused in other outfits.",
        ],
      },
    ],
  },
  "quiet-luxury-style": {
    slug: "quiet-luxury-style",
    title: "Quiet Luxury Style",
    metaTitle: "Quiet Luxury Style: Fit, Fabric, and Restraint",
    description:
      "Learn quiet luxury style through fabric quality, fit, color discipline, understated details, and practical outfit rules without logo-heavy dressing.",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-11",
    readTime: "8 min read",
    intro: [
      "Quiet luxury is not a shopping list of expensive basics. The useful idea is simpler: remove the parts of an outfit that age quickly, then make the remaining parts better. Better usually means fit, fabric, finish, and color discipline.",
      "A normal wardrobe can use this without becoming luxury-focused. A well-cut cotton shirt, clean wool trousers, and maintained leather shoes will read quieter and stronger than a logo sweatshirt with expensive sneakers. The point is to reduce claims, not to hide money.",
    ],
    internalLinks: [
      {
        href: "/method",
        label: "The Method",
        description: "Set rules before buying quiet pieces.",
      },
      {
        href: "/system",
        label: "The System",
        description: "Use formality and silhouette to keep outfits coherent.",
      },
      {
        href: "/clothing/how-to-check-clothing-quality",
        label: "Quality checks",
        description: "Quiet dressing exposes poor fabric and construction quickly.",
      },
      {
        href: "/guides/old-money-style-men",
        label: "Old money style",
        description: "Compare quiet luxury with a more classic wardrobe language.",
      },
    ],
    sections: [
      {
        title: "Quiet luxury vs logo dressing",
        body: [
          "Logo dressing asks the brand to carry the outfit. Quiet luxury asks the fabric, cut, and coordination to carry it. That does not mean logos are morally wrong. It means they are weak structure. If the logo disappears and the outfit collapses, the outfit was not built well.",
          "The practical test is simple: cover every visible brand mark. Does the outfit still work? If yes, the shape, color, and materials are doing enough. If no, replace the loudest item with a quieter one and check whether the whole look becomes easier to read.",
        ],
      },
      {
        title: "Fabric quality",
        body: [
          "Quiet outfits leave fewer distractions, so fabric quality becomes visible. Thin cotton looks tired faster. Shiny polyester breaks the matte surface. Knitwear that pills after three wears ruins the clean line. You do not need rare materials, but you do need fabric with body.",
          "For shirts, look for cotton that holds its shape at the collar and cuff. For trousers, wool blends should drape instead of clinging. For knitwear, merino and lambswool often give more value than fragile luxury fibers. Touch matters, but structure matters more.",
        ],
      },
      {
        title: "Fit and silhouette",
        body: [
          "The silhouette should look intentional from ten feet away. A quiet outfit cannot rely on a graphic or color hit to distract from poor proportions. Shoulder seams, trouser break, sleeve length, and waist fit become the main information.",
          "Use regular cuts first. If everything is slim, the outfit can look dated. If everything is oversized, it can look careless. One relaxed piece is fine when the rest stays controlled. A soft overshirt over straight trousers works. An oversized coat with wide trousers and chunky shoes needs more skill.",
        ],
      },
      {
        title: "Color palette",
        body: [
          "Quiet luxury usually works in low to medium contrast: charcoal, navy, cream, taupe, olive, brown, white, and black. The safest formula is one dark anchor, one light neutral, and one warm or cool mid-tone. Navy trousers, cream knit, and brown suede is enough.",
          "Color discipline is not blandness. It is repeatability. A small palette lets you buy fewer pieces because more combinations work. It also makes maintenance easier: faded black, yellowed white, and mismatched navy are visible when the outfit is otherwise restrained.",
        ],
      },
      {
        title: "Shoes and accessories",
        body: [
          "Shoes are the fastest way to break quiet luxury. Overbuilt sneakers, contrast soles, heavy branding, and distressed finishes add noise. Use loafers, derbies, clean leather sneakers, suede boots, or minimal sandals depending on formality and climate.",
          "Accessories should solve a problem. A belt should match the leather family of the shoe. A watch should fit under a cuff. Sunglasses should suit the face instead of advertising a brand. Jewelry works when it is small enough that the outfit does not orbit around it.",
        ],
      },
      {
        title: "Mistakes to avoid",
        body: [
          "The first mistake is buying expensive versions of pieces that do not fit your life. If you commute, travel, or work casually, delicate trousers and dry-clean-only knitwear may become museum clothing. Quiet luxury must survive normal wear.",
          "The second mistake is confusing plain with good. A plain T-shirt with a weak collar is still weak. A simple coat with poor shoulders is still poor. Minimal clothing gives bad construction fewer places to hide, so inspect the basics harder.",
        ],
      },
      {
        title: "How to build it gradually",
        body: [
          "Start with replacement, not expansion. When a worn shirt fails, replace it with a better fabric and fit inside your existing color palette. When sneakers wear out, replace them with a cleaner leather pair or loafers if your daily context allows it.",
          "Upgrade the pieces that touch the most outfits first: outerwear, shoes, trousers, knitwear, shirts. Do not buy rare statement pieces early. A quiet wardrobe compounds when each new piece works with what you already own.",
          "Set a one-in-one-out rule for the first year. Quiet luxury becomes expensive when it turns into parallel wardrobes: old casual clothes for real life and delicate pieces for imagined days. Replace the weak version of a piece you already use, then wear the replacement enough to prove it works.",
        ],
      },
    ],
  },
  "how-to-build-personal-style": {
    slug: "how-to-build-personal-style",
    title: "How to Build Personal Style",
    metaTitle: "How to Build Personal Style Without Copying Trends",
    description:
      "A practical system for building personal style with lifestyle rules, silhouettes, color anchors, outfit formulas, and better wardrobe decisions.",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-11",
    readTime: "9 min read",
    intro: [
      "Personal style is not a personality slogan. It is a set of repeated decisions that make your clothing easier to choose, easier to buy, and easier to wear. The more consistent the decisions, the more recognizable the style becomes.",
      "Copying outfits can help you learn, but it cannot be the system. Someone else’s wardrobe was built for their climate, job, body, budget, and social context. Your version needs rules that survive your own week.",
    ],
    internalLinks: [
      {
        href: "/method",
        label: "The Method",
        description: "Turn preferences into rules and constraints.",
      },
      {
        href: "/system",
        label: "The System",
        description: "Name the dimensions you are choosing repeatedly.",
      },
      {
        href: "/outfits/simple-outfit-formulas",
        label: "Outfit formulas",
        description: "Build repeatable combinations instead of one-off looks.",
      },
      {
        href: "/guides/how-to-match-colors-in-outfits",
        label: "Color matching",
        description: "Use color anchors to make the wardrobe combine cleanly.",
      },
    ],
    sections: [
      {
        title: "Define your lifestyle",
        body: [
          "Start with the week you actually live. Count work days, casual evenings, dinners, travel, training, bad weather, and any formal events. A personal style that ignores your calendar becomes a fantasy wardrobe. You will own clothes you admire and rarely wear.",
          "Write the three contexts you dress for most often. For many men, that might be office, weekend, and dinner. Each context needs a formality range. If your office is casual, a wardrobe built around suits will create friction. If your evenings are mostly restaurants, athletic-heavy clothing will feel underprepared.",
        ],
      },
      {
        title: "Pick silhouettes",
        body: [
          "Silhouette is the shape people read before they notice individual pieces. Choose a default trouser shape, shirt shape, jacket shape, and shoe weight. Personal style becomes clearer when those shapes repeat.",
          "A good starting point is regular or relaxed-straight trousers, shirts that sit close at the shoulder, knitwear that follows the body without clinging, and shoes with enough weight to balance the trouser opening. Once the baseline works, you can add one stronger silhouette at a time.",
        ],
      },
      {
        title: "Choose color anchors",
        body: [
          "Color anchors are the colors you trust repeatedly. They reduce the number of decisions. Pick two dark anchors, two light anchors, and one accent family. Example: navy and charcoal; white and cream; olive as the accent. Another example: black and dark denim; white and grey; brown as the accent.",
          "Avoid building around colors you only like in isolation. A burgundy jacket may look good on a rack but fail if it has no partners in your closet. The test is not whether a color is attractive. The test is whether it combines with your existing pieces.",
        ],
      },
      {
        title: "Build outfit formulas",
        body: [
          "Personal style becomes practical when you can repeat formulas without repeating exact outfits. Formula one might be oxford shirt, straight trouser, loafer. Formula two might be knit, denim, suede boot. Formula three might be overshirt, T-shirt, chino, clean sneaker.",
          "Formulas protect you from trend dependency. When a trend appears, you can test it against a slot. If it improves a formula, keep it. If it forces the whole wardrobe to reorganize around it, skip it. The wardrobe should absorb good ideas without losing its structure.",
        ],
      },
      {
        title: "Test and refine",
        body: [
          "Wear a formula three times before judging it. One failed outfit may be bad laundry, weather, or shoes. Three wears reveal the real issue. Take notes: too formal, too warm, wrong shoe, color too harsh, jacket too short, trousers not versatile.",
          "Refinement usually means subtracting. Remove the piece that creates the most exceptions. If a shirt only works with one jacket, it is not doing enough. If a shoe breaks half your outfits, it belongs to a narrower context than you thought.",
          "Use photos as evidence, not vanity. A mirror often hides proportion problems because you adjust your posture. A quick full-body photo shows whether the trouser opening matches the shoe, whether the jacket length works, and whether the colors read as one outfit.",
        ],
      },
      {
        title: "Avoid trend dependency",
        body: [
          "Trends are useful as tests, not instructions. They show new proportions, colors, and styling ideas. They become a problem when they replace your own constraints. If every purchase is a reaction to the feed, your wardrobe never compounds.",
          "Before buying a trend piece, ask where it sits in your system. Which formula does it enter? Which colors does it support? Which old piece does it replace? If the answers are vague, the item is probably entertainment, not wardrobe infrastructure.",
        ],
      },
      {
        title: "Personal style checklist",
        body: [
          "Use this checklist when your wardrobe feels inconsistent. It turns personal style from a mood into an audit.",
          "The checklist should make buying easier, not stricter for its own sake. If a piece supports the contexts, silhouettes, colors, and formulas you already use, it probably belongs. If it needs a new identity to justify it, leave it alone.",
        ],
        checklist: [
          "You know your three most common dressing contexts.",
          "Your default trouser, shirt, jacket, and shoe shapes are clear.",
          "Most purchases fit your color anchors.",
          "You have at least three repeatable outfit formulas.",
          "New trends are tested against existing formulas.",
          "Pieces that create too many exceptions are removed or isolated.",
        ],
      },
    ],
  },
  "smart-casual-dress-code": {
    slug: "smart-casual-dress-code",
    title: "Smart Casual Dress Code",
    metaTitle: "Smart Casual Dress Code: Clear Outfit Rules",
    description:
      "A clear smart casual dress code guide with outfit formulas, formality rules, key pieces, and mistakes to avoid for men.",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-11",
    readTime: "8 min read",
    intro: [
      "Smart casual is confusing because it is not one outfit. It is a range. The mistake is treating it as permission to mix anything slightly dressed-up with anything casual. A blazer with running shoes is not smart casual just because one piece is smart.",
      "The clean version sits between casual and business casual. It uses casual comfort but removes the parts that read careless: distressed fabric, athletic shoes, weak collars, sloppy fit, and loud graphics.",
    ],
    internalLinks: [
      {
        href: "/system/the-formality-ladder-explained",
        label: "Formality ladder",
        description: "Use the ±1 rule to keep smart casual coherent.",
      },
      {
        href: "/outfits/simple-outfit-formulas",
        label: "Outfit formulas",
        description: "Build smart casual from repeatable slots.",
      },
      {
        href: "/guides/how-to-dress-better",
        label: "Dress better",
        description: "Apply the three constraints that improve most outfits.",
      },
      {
        href: "/method",
        label: "The Method",
        description: "Turn the dress code into a practical wardrobe rule.",
      },
    ],
    sections: [
      {
        title: "What smart casual means",
        body: [
          "Smart casual means the outfit acknowledges a social setting without becoming formal. It should look ready for dinner, a relaxed office, a client coffee, or a weekend event where a T-shirt and running shoes would be too low.",
          "The easiest definition is this: casual pieces made cleaner, or tailored pieces made softer. A knit polo with wool trousers can be smart casual. A blazer with chinos can be smart casual. A hoodie under a suit jacket usually is not, because the formality gap is too wide.",
        ],
      },
      {
        title: "The formality ladder",
        body: [
          "Most smart casual outfits sit around levels 3 and 4 on the formality ladder. Level 3 is clean smart casual: knitwear, dark denim, leather sneakers, suede loafers. Level 4 is business casual: oxford shirts, chinos, wool trousers, loafers, soft blazers.",
          "The ±1 rule matters. If your shoes are level 2 canvas sneakers and your jacket is level 5 tailoring, the outfit splits. Upgrade the shoe or relax the jacket. Smart casual works when the highest and lowest pieces are close enough to agree.",
        ],
      },
      {
        title: "Smart casual pieces",
        body: [
          "Useful tops include oxford shirts, knit polos, merino crewnecks, fine cardigans, overshirts, and plain heavyweight T-shirts under the right layer. Useful bottoms include chinos, wool trousers, straight dark denim, and clean drawstring trousers only if the fabric is structured.",
          "For shoes, use loafers, derbies, Chelsea boots, suede chukkas, or minimal leather sneakers. The shoe decides the read quickly. If it looks built for the gym, the outfit becomes casual even if the rest is sharp.",
        ],
      },
      {
        title: "Outfit formulas",
        body: [
          "Formula one: oxford shirt, chinos, brown loafers. Formula two: merino knit, dark denim, suede boots. Formula three: knit polo, wool trousers, leather sneakers. Formula four: soft blazer, plain T-shirt, chinos, loafers.",
          "Each formula works because the pieces stay close in formality. The blazer formula fails if the T-shirt is thin and the shoes are athletic. The denim formula fails if the jeans are heavily washed. Smart casual is usually one upgrade away from casual, not three upgrades and two downgrades mixed together.",
        ],
      },
      {
        title: "Office vs dinner vs weekend",
        body: [
          "For an office, move toward collars, trousers, and leather shoes. A knit polo with wool trousers is often safer than a T-shirt with a blazer. For dinner, texture helps: suede, merino, brushed cotton, and soft tailoring read considered without becoming stiff.",
          "For weekends, keep comfort but remove mess. Dark denim instead of faded denim. Leather sneakers instead of running shoes. Overshirt instead of hoodie. The outfit can stay relaxed as long as the materials and fit look deliberate.",
          "When in doubt, change only one casual element. If the base is jeans, choose a collar or a knit. If the shoe is a sneaker, make it leather and keep the trouser clean. If the top is a T-shirt, add a soft jacket or overshirt with enough structure.",
        ],
      },
      {
        title: "Mistakes to avoid",
        body: [
          "Do not use a blazer to rescue a weak base. If the shirt, trousers, and shoes are too casual, the jacket makes the mismatch more visible. Do not use distressed denim, athletic soles, loud graphics, or shiny dress shoes unless the rest of the outfit explains them.",
          "Avoid over-formalizing the top while keeping the bottom casual. Dress shirt, tie, washed jeans, and sneakers is not smart casual. It is two dress codes arguing. Remove the tie, change the jeans, or change the shoes.",
        ],
      },
      {
        title: "Quick checklist",
        body: [
          "Run this check before leaving for any smart casual event.",
          "The goal is not to maximize smartness. It is to land in the correct middle. If the event is more relaxed, lower the jacket or shoe by one level. If the event is closer to business casual, raise the shirt, trouser, or shoe by one level.",
        ],
        checklist: [
          "The outfit sits mostly around formality levels 3 and 4.",
          "Shoes are clean and match the trousers.",
          "No athletic piece is carrying the outfit.",
          "At least one piece has structure: collar, trouser crease, knit body, or jacket shape.",
          "Colors are controlled enough that the dress code reads before the styling.",
        ],
      },
    ],
  },
  "how-to-match-colors-in-outfits": {
    slug: "how-to-match-colors-in-outfits",
    title: "How to Match Colors in Outfits",
    metaTitle: "How to Match Colors in Outfits: Practical Guide",
    description:
      "A practical guide to matching outfit colors using neutrals, accents, contrast, temperature, and simple combinations that work.",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-11",
    readTime: "8 min read",
    intro: [
      "Color matching gets easier when you stop trying to combine colors equally. Most good outfits have a base, a support color, and sometimes one accent. The base does the work. The accent should not take over.",
      "This guide is practical on purpose. You do not need a color wheel for every outfit. You need a few reliable anchors, control over contrast, and an understanding of warm, cool, and neutral colors.",
    ],
    internalLinks: [
      {
        href: "/method",
        label: "The Method",
        description: "Keep color choices inside a repeatable wardrobe process.",
      },
      {
        href: "/system",
        label: "The System",
        description: "Color is one of the four dimensions of every outfit.",
      },
      {
        href: "/guides/how-to-build-personal-style",
        label: "Personal style",
        description: "Use color anchors to make your style repeatable.",
      },
      {
        href: "/guides/old-money-style-men",
        label: "Old money style",
        description: "See a narrow palette applied to classic dressing.",
      },
      {
        href: "/outfits/simple-outfit-formulas",
        label: "Outfit formulas",
        description: "Apply color rules to repeatable outfit slots.",
      },
    ],
    sections: [
      {
        title: "Start with neutrals",
        body: [
          "Neutrals are not boring; they are infrastructure. Navy, grey, white, cream, black, olive, brown, denim blue, and beige let the wardrobe combine without constant planning. Start most outfits with two neutrals before adding anything louder.",
          "The safest combinations are simple: navy plus white plus brown, charcoal plus black plus white, olive plus cream plus dark denim, grey plus navy plus white. These work because no color is trying to dominate the full outfit.",
        ],
      },
      {
        title: "Use one accent",
        body: [
          "An accent is a controlled interruption. It can be a burgundy knit, forest green overshirt, rust scarf, blue stripe, or tan suede shoe. The accent should usually appear once, or appear twice in small amounts. Three accents usually make an outfit look unmanaged.",
          "If the accent is large, keep everything else quiet. Olive trousers can be the accent when the shirt is white and the jacket is navy. If the accent is small, such as a belt or stripe, the rest of the outfit can carry more texture.",
        ],
      },
      {
        title: "Match color temperature",
        body: [
          "Colors have temperature. Warm colors include cream, camel, rust, tan, brown, and olive. Cool colors include navy, charcoal, blue, black, and many greys. Neutral white and some denim can bridge both sides.",
          "Problems appear when warm and cool pieces are mixed without a bridge. A cold black jacket with warm tan chinos can feel abrupt. Add white, denim, or grey to mediate, or choose dark brown instead of black if the outfit is mostly warm.",
        ],
      },
      {
        title: "Control contrast",
        body: [
          "Contrast is the distance between light and dark. High contrast reads sharper: black trousers with a white shirt, navy blazer with white oxford. Low contrast reads softer: cream knit with light grey trousers, olive jacket with faded denim.",
          "Match contrast to the context and your features. High contrast can work well for evening, office, and sharper tailoring. Lower contrast often works better for casual outfits and textured fabrics. Problems happen when contrast is accidental, such as bright white socks cutting through dark trousers and dark shoes.",
        ],
      },
      {
        title: "Common color combinations",
        body: [
          "Navy, white, and brown is the most useful combination in menswear. It works with denim, tailoring, knitwear, and leather shoes. Charcoal, black, and white is cleaner and more urban, but it needs good fabric because cheap black fades quickly.",
          "Olive, cream, and dark denim is strong for casual wardrobes. Grey, navy, and burgundy works when burgundy stays controlled. Brown, blue, and white works across shirts, suede, denim, and outerwear. Build around combinations you can repeat in different pieces.",
          "Keep a record of combinations that work in real life. If navy, white, and brown handles work, dinner, and travel, that is a core palette. If olive only works on weekends, treat it as an accent family rather than a base. Frequency matters more than novelty.",
        ],
      },
      {
        title: "Mistakes to avoid",
        body: [
          "Avoid equal-strength colors fighting for attention. Bright blue shirt, red sneakers, green jacket, and tan trousers may all be interesting alone, but together they create no hierarchy. Choose the color that leads and quiet the rest.",
          "Avoid buying isolated colors. If a piece does not work with at least three outfits, it is probably not part of your palette. Also watch near-matches: two navies that almost match can look worse than two clearly different blues.",
        ],
      },
      {
        title: "Simple color checklist",
        body: [
          "Use this quick check when an outfit feels off but the pieces are individually good.",
          "If the outfit still feels wrong after the checklist, remove the loudest color first. Most color problems are hierarchy problems. Once the loud piece is gone, the remaining neutrals usually reveal whether the issue was color, contrast, or fit.",
        ],
        checklist: [
          "Start with two neutrals before adding an accent.",
          "Keep the accent to one main piece or two small repeats.",
          "Check whether the outfit is mostly warm, cool, or deliberately mixed.",
          "Use white, grey, or denim as a bridge when temperatures clash.",
          "Decide whether the context needs high or low contrast.",
          "Avoid pieces that do not combine with at least three existing outfits.",
        ],
      },
    ],
  },
};

export const GUIDE_ARTICLE_LIST = Object.values(GUIDE_ARTICLES);

export function getGuideArticle(slug: GuideArticleSlug) {
  return GUIDE_ARTICLES[slug];
}
