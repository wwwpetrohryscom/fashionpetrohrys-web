import { ARTICLES, articlesByCategory, type ArticleCategory } from "@/data/articles";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";

export function getLocalizedArticles(locale: Locale) {
  const messages = getMessages(locale);

  return ARTICLES.map((article) => {
    const translated =
      messages.articles[article.slug as keyof typeof messages.articles];

    return {
      ...article,
      href: localizePath(locale, article.href),
      title: translated.title,
      description: translated.description,
      categoryLabel: messages.categories[article.category],
      readTime: `${article.readTime.split(" ")[0]} ${messages.common.readTime}`,
    };
  });
}

export function localizedArticlesByCategory(
  locale: Locale,
  category: ArticleCategory,
) {
  const slugs = new Set(articlesByCategory(category).map((article) => article.slug));
  return getLocalizedArticles(locale).filter((article) => slugs.has(article.slug));
}
