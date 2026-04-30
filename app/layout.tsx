import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FashionPetroHrys — The Style Operating System",
    template: "%s | FashionPetroHrys",
  },
  description:
    "A system for thinking about clothing, building wardrobes, and making better style decisions.",
};

const NAV = [
  { href: "/method", label: "Method" },
  { href: "/system", label: "System" },
  { href: "/outfits", label: "Outfits" },
  { href: "/guides", label: "Guides" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <header className="border-b border-neutral-200">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              FashionPetroHrys
            </Link>
            <nav className="flex gap-5 text-sm text-neutral-600">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-neutral-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
        <footer className="mx-auto max-w-3xl border-t border-neutral-200 px-6 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} FashionPetroHrys
        </footer>
      </body>
    </html>
  );
}
