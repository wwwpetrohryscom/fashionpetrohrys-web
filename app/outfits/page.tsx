import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfits",
  description: "Worked examples of outfits assembled using the system.",
};

const OUTFITS = [
  {
    name: "Weekday Smart Casual",
    pieces: ["White oxford shirt", "Charcoal trousers", "Brown leather loafers", "Tan belt"],
    note: "All four garments sit at smart-casual on the formality ladder. One warm accent (tan) against a cool base.",
  },
  {
    name: "Saturday Casual",
    pieces: ["Cream knit sweater", "Indigo selvedge jeans", "White leather sneakers"],
    note: "Three pieces, one silhouette family (regular). Color temperature stays neutral with a single warm note.",
  },
];

export default function OutfitsPage() {
  return (
    <div className="space-y-8">
      <header>
        <div className="text-xs uppercase tracking-wider text-neutral-500">Outfits</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Worked examples</h1>
        <p className="mt-3 text-neutral-600">
          Each outfit below was assembled using the four dimensions from{" "}
          <a className="underline" href="/system">The System</a>.
        </p>
      </header>

      <ul className="space-y-5">
        {OUTFITS.map((o) => (
          <li
            key={o.name}
            className="rounded-lg border border-neutral-200 p-5"
          >
            <div className="font-medium">{o.name}</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700">
              {o.pieces.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p className="mt-3 text-sm text-neutral-600">{o.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
