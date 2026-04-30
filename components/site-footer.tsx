import Link from "next/link";
import { FOOTER_NAV } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="text-sm font-semibold tracking-tight">FashionPetroHrys</div>
            <div className="mt-1 text-sm text-neutral-500">
              The Style Operating System
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-neutral-600 sm:grid-cols-3">
            {FOOTER_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-neutral-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} FashionPetroHrys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
