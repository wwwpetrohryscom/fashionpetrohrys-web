import Link from "next/link";

const CARDS = [
  { href: "/method", kicker: "Start here", title: "The Method", body: "How we think about style — three steps, one system." },
  { href: "/system", kicker: "Framework", title: "The System", body: "The vocabulary that turns taste into repeatable decisions." },
  { href: "/guides", kicker: "Read", title: "Guides", body: "Practical articles on building a wardrobe that works." },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          The Style Operating System
        </h1>
        <p className="mt-5 text-lg text-neutral-600">
          A system for thinking about clothing, building wardrobes, and making better style decisions.
        </p>
      </section>

      <section className="grid gap-3">
        {CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-900"
          >
            <div className="text-xs uppercase tracking-wider text-neutral-500">
              {card.kicker}
            </div>
            <div className="mt-1 text-lg font-medium">{card.title}</div>
            <div className="mt-1 text-sm text-neutral-600">{card.body}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
