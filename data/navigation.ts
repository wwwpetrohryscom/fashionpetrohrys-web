export type NavItem = { href: string; label: string };

export const PRIMARY_NAV: NavItem[] = [
  { href: "/method", label: "Method" },
  { href: "/system", label: "System" },
  { href: "/guides", label: "Guides" },
  { href: "/outfits", label: "Outfits" },
  { href: "/clothing", label: "Clothing" },
  { href: "/psychology", label: "Psychology" },
  { href: "/shop", label: "Shop" },
];

export const FOOTER_NAV: NavItem[] = PRIMARY_NAV;
