import Link from "next/link";
import { PRIMARY_NAV } from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          FashionPetroHrys
        </Link>
        <nav className="flex gap-5 overflow-x-auto text-sm text-neutral-600">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
