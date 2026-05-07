export type NavKey =
  | "method"
  | "system"
  | "guides"
  | "outfits"
  | "clothing"
  | "psychology"
  | "perfumes"
  | "shop";

export type NavItem = { href: string; key: NavKey };

export const PRIMARY_NAV: NavItem[] = [
  { href: "/method", key: "method" },
  { href: "/system", key: "system" },
  { href: "/guides", key: "guides" },
  { href: "/outfits", key: "outfits" },
  { href: "/clothing", key: "clothing" },
  { href: "/psychology", key: "psychology" },
  { href: "/perfumes", key: "perfumes" },
  { href: "/shop", key: "shop" },
];

export const FOOTER_NAV: NavItem[] = PRIMARY_NAV;
