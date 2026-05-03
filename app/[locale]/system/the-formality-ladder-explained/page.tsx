import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/i18n";
import { type LocalePageProps, resolveLocale } from "@/lib/locale-page";
import { getMessages } from "@/lib/messages";
import { buildMetadata } from "@/lib/seo";

const ARTICLE_SLUG = "the-formality-ladder-explained";
const ARTICLE_PATH = "/system/the-formality-ladder-explained";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const messages = getMessages(locale);
  const article = messages.articles[ARTICLE_SLUG];

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: ARTICLE_PATH,
    type: "article",
    locale,
  });
}

export default async function Page({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);

  return (
    <article className="space-y-10">
      <Section
        kicker="System"
        title="The Formality Ladder Explained: A 7-Level System for Reading Any Garment"
        description="You put on a blazer with sneakers and something looks off. You change the watch. Still off. You swap the shoes. Better — but you don't know why."
      />

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <p>
          The reason is formality. Every garment sits on a 7-level scale, and your
          blazer was three rungs above your sneakers. Outfits break when garments
          span too many levels — and hold together when they don&apos;t. Once you can
          see the scale, the fix takes seconds.
        </p>

        <p>
          This article is part of{" "}
          <Link className="underline" href={localizePath(locale, "/method")}>
            the method we use
          </Link>{" "}
          to build wardrobes that scale. The full system is 7 levels, one rule,
          and a few worked outfits.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-neutral-900">
          What formality actually measures
        </h2>
        <p>
          Formality is not &quot;how fancy.&quot; It is{" "}
          <strong className="text-neutral-900">
            how much social acknowledgment of the occasion a garment provides
          </strong>
          .
        </p>
        <p>
          A T-shirt at a wedding fails because the T-shirt does not acknowledge the
          event. A tuxedo at a barbecue fails for the opposite reason — too much
          acknowledgment. Every garment makes a contextual claim, and the claim has
          to match the occasion <em>and</em> the other garments in the outfit.
        </p>
        <p>
          That is all formality is: a scale of claim. Higher levels make a louder
          claim. Lower levels make none.
        </p>
      </div>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-neutral-900">
          The seven levels — at a glance
        </h2>
        <pre className="overflow-x-auto rounded-md border border-neutral-200 bg-neutral-50 p-5 font-mono text-sm leading-relaxed text-neutral-800">
{`7  Black tie         ←  tuxedo, black bow tie, patent leather
6  Formal            ←  dark suit, white shirt, conservative tie
5  Business          ←  suit, dress shirt, tie optional
4  Business casual   ←  oxford + chinos + leather loafers
3  Smart casual      ←  knit + dark jeans + leather sneakers
2  Casual            ←  T-shirt + jeans + canvas sneakers
1  Athletic          ←  technical fabric, performance shoes`}
        </pre>
        <p className="max-w-2xl text-neutral-700">
          Read the ladder bottom-up. Each rung adds one increment of contextual
          claim. Every garment you own sits on one of these rungs — most can flex
          one or two rungs depending on styling.
        </p>

        <div className="max-w-2xl space-y-5 text-neutral-700">
          <div>
            <h3 className="font-semibold text-neutral-900">1. Athletic</h3>
            <p>
              Built for movement. Technical fabric, performance construction, no
              social claim. Wearing athletic outside athletic contexts pulls the
              rest of the outfit down to its level.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">2. Casual</h3>
            <p>
              Daily ease. No social claim, but no anti-claim either. T-shirt,
              hoodie, raw denim, canvas sneakers. You could wear it to a grocery
              store with zero comment.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">3. Smart casual</h3>
            <p>
              Casual base with one elevating element — usually footwear, fabric, or
              fit. Knit instead of T-shirt. Leather sneakers instead of canvas.
              Dark denim instead of distressed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">4. Business casual</h3>
            <p>
              Workplace acknowledgment without a suit. Oxford shirt or fine knit,
              wool trousers or chinos, leather shoes (loafers, derbies, Chelsea
              boots). No tie.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">5. Business</h3>
            <p>
              A full suit or unmatched suit-coordinated separates, dress shirt,
              leather shoes. Tie optional in some industries, expected in
              conservative ones.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">6. Formal</h3>
            <p>
              Dark suit in charcoal or navy, white or pale dress shirt,
              conservative tie, polished leather shoes. Most weddings, funerals,
              upscale dinners.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">7. Black tie</h3>
            <p>
              Tuxedo or dinner jacket, black bow tie, formal shirt, patent or
              highly polished leather shoes. Specific to events that explicitly
              request it.
            </p>
          </div>
          <p className="text-sm text-neutral-500">
            Some classification systems include &quot;white tie&quot; as an eighth
            rung. Most people will never encounter it. Seven levels is enough for
            every real-world clothing decision.
          </p>
        </div>
      </section>

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          How to place a single garment
        </h2>
        <p>
          A garment is rarely fixed at one rung. Most have a <em>range</em> — the
          levels they can sit at without breaking the outfit.
        </p>
        <p>
          A white oxford shirt can sit at levels 3 through 6. A plain T-shirt sits
          at 2. A tuxedo sits at 7 only.
        </p>
        <p>To place a garment, ask three questions:</p>
        <ol className="space-y-2 pl-5">
          <li>
            <strong className="text-neutral-900">
              What is its highest believable rung?
            </strong>{" "}
            A leather loafer can reach formal in the right color. A canvas sneaker
            cannot.
          </li>
          <li>
            <strong className="text-neutral-900">
              What is its lowest believable rung?
            </strong>{" "}
            A tuxedo cannot go below black tie. Dark jeans can go as low as casual.
          </li>
          <li>
            <strong className="text-neutral-900">
              Where is its center of gravity?
            </strong>{" "}
            If you had to pick one rung where this garment belongs, which one?
          </li>
        </ol>
        <p>
          The narrower the range, the more situation-specific the garment. The
          wider the range, the more useful per dollar. Capsule wardrobes are built
          almost entirely from wide-range pieces.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-neutral-900">
          The ±1 rule for full outfits
        </h2>
        <p>The single rule that determines whether an outfit holds together:</p>
        <p className="border-l-4 border-signal py-1 pl-4 font-medium text-neutral-900">
          Every garment must sit within one rung of every other garment.
        </p>
        <p>
          Numerically:{" "}
          <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">
            max level − min level ≤ 1
          </code>
          .
        </p>

        <h3 className="pt-2 text-lg font-semibold text-neutral-900">
          A scenario, start to finish
        </h3>
        <p>
          It is Friday morning. You have a client lunch at noon and drinks with
          friends at 7. You want one base outfit you can adjust once.
        </p>
        <p>
          You start with the shoes —{" "}
          <strong className="text-neutral-900">
            brown leather penny loafers, level 4
          </strong>
          . The ±1 rule says everything else has to sit at 3, 4, or 5.
        </p>
        <p>
          You put on a{" "}
          <strong className="text-neutral-900">white oxford shirt (4)</strong>, then{" "}
          <strong className="text-neutral-900">charcoal wool trousers (4)</strong>.
          Range: 0. Coherent business casual. Works for the lunch.
        </p>
        <p>
          At 6 PM you swap the trousers for{" "}
          <strong className="text-neutral-900">dark indigo jeans (3)</strong> and
          untuck the oxford. Range is now 0–1, still inside the rule. The outfit
          reads as smart casual. Same shirt, same shoes, two contexts handled with
          one swap.
        </p>
        <p>
          That is the rule in motion. You did not pick clothes that &quot;look cool
          together&quot; — you picked pieces that satisfied a constraint.
        </p>
        <p>
          The ±1 rule is what makes the{" "}
          <Link
            className="underline"
            href={localizePath(locale, "/outfits/simple-outfit-formulas")}
          >
            outfit examples
          </Link>{" "}
          on this site work. Each formula stays within one rung end-to-end.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-neutral-900">
          Why &quot;blazer with sneakers&quot; is sometimes right and sometimes wrong
        </h2>
        <p>
          The most common formality question on the internet. The ladder answers it
          cleanly: it depends on the sneakers.
        </p>
        <ul className="space-y-1 pl-5">
          <li>
            Blazer (4) +{" "}
            <strong className="text-neutral-900">white leather sneakers</strong> (3)
            → range 1 → works
          </li>
          <li>
            Blazer (4) +{" "}
            <strong className="text-neutral-900">athletic running shoes</strong> (1)
            → range 3 → breaks
          </li>
        </ul>
        <p>The math, not the aesthetic, decides.</p>
      </div>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-neutral-900">Worked examples</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-neutral-200 p-5">
            <div className="font-medium">A Tuesday client lunch</div>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700">
              <li>White oxford shirt — <strong>4</strong></li>
              <li>Mid-grey wool trousers — <strong>4</strong></li>
              <li>Brown leather penny loafers — <strong>4</strong></li>
              <li>Brown leather belt — <strong>4</strong></li>
            </ul>
            <p className="mt-3 text-sm text-neutral-600">
              Range: 0. Pure business casual. The cleanest possible workday outfit.
            </p>
          </li>

          <li className="rounded-lg border border-neutral-200 p-5">
            <div className="font-medium">A Saturday wine bar with a date</div>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700">
              <li>Cream merino crewneck — <strong>3</strong></li>
              <li>Dark indigo jeans — <strong>3</strong></li>
              <li>White leather sneakers, no athletic branding — <strong>3</strong></li>
              <li>Steel watch — neutral</li>
            </ul>
            <p className="mt-3 text-sm text-neutral-600">
              Range: 0. Smart casual, deliberate.
            </p>
          </li>

          <li className="rounded-lg border border-neutral-200 p-5 sm:col-span-2">
            <div className="font-medium">
              Same wine bar, but you grabbed a blazer on the way out
            </div>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700">
              <li>Navy unstructured blazer — <strong>4</strong></li>
              <li>White T-shirt — <strong>2</strong></li>
              <li>Dark indigo jeans — <strong>3</strong></li>
              <li>White leather sneakers — <strong>3</strong></li>
            </ul>
            <p className="mt-3 text-sm text-neutral-600">
              Range: <strong>2</strong>. The outfit breaks. The T-shirt at level 2
              is dragging against the blazer at level 4.
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              One swap fixes it: replace the T-shirt with a{" "}
              <strong>fine merino henley (3)</strong>. Range becomes 1. Outfit
              holds.
            </p>
          </li>

          <li className="rounded-lg border border-neutral-200 p-5 sm:col-span-2">
            <div className="font-medium">
              Cashmere sweater + sweatpants + Air Max
            </div>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700">
              <li>Cashmere crewneck — <strong>3</strong></li>
              <li>Athletic sweatpants — <strong>1</strong></li>
              <li>Air Max sneakers — <strong>1</strong></li>
            </ul>
            <p className="mt-3 text-sm text-neutral-600">
              Range: <strong>2</strong>. The outfit breaks. The $400 sweater does
              not lift the outfit; the athletic pieces drag the sweater down. The
              ladder does not care about price; it cares about claim.
            </p>
          </li>
        </ul>
      </section>

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <h2 className="pt-2 text-xl font-semibold text-neutral-900">
          Common mistakes
        </h2>
        <ol className="space-y-4">
          <li>
            <strong className="text-neutral-900">1. Mistaking price for level.</strong>{" "}
            A $500 cashmere sweater at level 3 does not elevate $20 athletic
            sneakers at level 1. The ladder measures what a garment signals, not
            what it cost.
          </li>
          <li>
            <strong className="text-neutral-900">
              2. Treating &quot;blazer + sneakers&quot; as a fixed verdict.
            </strong>{" "}
            It is a calculation, not an aesthetic. The garments do the math.
          </li>
          <li>
            <strong className="text-neutral-900">3. Assuming all suits are formal.</strong>{" "}
            Most suits sit at business (5) or business casual (4) when worn without
            a tie. A grey suit with a knit polo is business casual. Only a tuxedo
            is automatically formal-or-higher.
          </li>
          <li>
            <strong className="text-neutral-900">
              4. Building a wardrobe with no anchored range.
            </strong>{" "}
            If your garments span levels 1 through 6, every outfit becomes a
            one-off. Pick three consecutive levels and own them deeply.
          </li>
          <li>
            <strong className="text-neutral-900">5. Misreading footwear.</strong>{" "}
            Footwear is the strongest formality signal in any outfit. Get the shoe
            wrong and the rest of the outfit cannot rescue it. Start every outfit
            by deciding the shoe.
          </li>
        </ol>

        <h2 className="pt-4 text-xl font-semibold text-neutral-900">
          What to do with this
        </h2>
        <p>The ladder is only useful if you act on it. Three steps:</p>
        <ol className="space-y-3">
          <li>
            <strong className="text-neutral-900">1. Pick your range.</strong> For
            most people, levels 3–5 (smart casual through business) covers 95% of
            real life — three consecutive rungs, well within ±1 end-to-end.
            Anything outside that range you buy occasion-by-occasion.
          </li>
          <li>
            <strong className="text-neutral-900">
              2. Audit your closet against the range.
            </strong>{" "}
            Pull every garment, place it on the ladder, and remove anything outside
            your committed range that you wear less than once a month. Those pieces
            are noise dressed as options.
          </li>
          <li>
            <strong className="text-neutral-900">
              3. Apply the ±1 rule every time you dress.
            </strong>{" "}
            Pick the shoe first, build up, keep every piece within one rung of
            every other piece. After a few weeks the rule becomes automatic.
          </li>
        </ol>
        <p>
          The formality ladder is not a style. It is a measurement system. Once you
          can measure, you can decide. Once you can decide consistently, you no
          longer need taste — and that is the entire point.
        </p>
      </div>

      <p className="text-sm text-neutral-500">
        See also:{" "}
        <Link
          className="underline"
          href={localizePath(locale, "/outfits/simple-outfit-formulas")}
        >
          Simple Outfit Formulas
        </Link>{" "}
        ·{" "}
        <Link className="underline" href={localizePath(locale, "/method")}>
          The Method
        </Link>
      </p>
    </article>
  );
}
