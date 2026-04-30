export type ArticleCategory = "guides" | "outfits" | "clothing" | "psychology";

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  href: string;
  readTime: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "capsule-wardrobe-for-men",
    title: "Capsule Wardrobe for Men",
    description:
      "Twelve pieces that solve every weekday outfit problem — and the rule that decides whether a thirteenth belongs.",
    category: "guides",
    href: "/guides/capsule-wardrobe-for-men",
    readTime: "6 min read",
  },
  {
    slug: "how-to-dress-better",
    title: "How to Dress Better",
    description:
      "Three constraints that improve any outfit immediately. None of them require buying anything new.",
    category: "guides",
    href: "/guides/how-to-dress-better",
    readTime: "5 min read",
  },
  {
    slug: "simple-outfit-formulas",
    title: "Simple Outfit Formulas",
    description:
      "The four formulas that cover 80% of real-world dressing — and how to vary them without breaking the system.",
    category: "outfits",
    href: "/outfits/simple-outfit-formulas",
    readTime: "5 min read",
  },
  {
    slug: "how-to-check-clothing-quality",
    title: "How to Check Clothing Quality",
    description:
      "Five tests you can run in 90 seconds before buying anything. Most failures are visible if you know where to look.",
    category: "clothing",
    href: "/clothing/how-to-check-clothing-quality",
    readTime: "7 min read",
  },
  {
    slug: "clothing-and-first-impressions",
    title: "Clothing and First Impressions",
    description:
      "How people read your clothes in the first six seconds — and the three signals that move the read most.",
    category: "psychology",
    href: "/psychology/clothing-and-first-impressions",
    readTime: "5 min read",
  },
  {
    slug: "why-minimal-style-works",
    title: "Why Minimal Style Works",
    description:
      "Minimalism is a constraint, not an aesthetic. Here is what the constraint actually buys you.",
    category: "psychology",
    href: "/psychology/why-minimal-style-works",
    readTime: "4 min read",
  },
];

export function articlesByCategory(category: ArticleCategory): Article[] {
  return ARTICLES.filter((a) => a.category === category);
}
