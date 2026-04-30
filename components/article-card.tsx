import Link from "next/link";
import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={article.href}
      className="group block h-full rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-900"
    >
      <div className="text-xs uppercase tracking-wider text-neutral-500">
        {article.category}
      </div>
      <div className="mt-2 text-lg font-medium leading-snug">
        {article.title}
      </div>
      <p className="mt-2 text-sm text-neutral-600">{article.description}</p>
      <div className="mt-3 text-xs text-neutral-500">{article.readTime}</div>
    </Link>
  );
}
