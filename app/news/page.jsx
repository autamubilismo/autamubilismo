import { client } from "@/lib/sanity";
import { NewsClient } from "./NewsClient";

// Revalida a página a cada 30 segundos para buscar novos posts automaticamente
export const revalidate = 30;

export default async function NewsPage() {
  const news = await client.fetch(
    `*[_type == "news"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "image": coalesce(mainImage.asset->url, image.asset->url),
      excerpt,
      publishedAt,
      "category": coalesce(category->title, category, "Geral"),
      author,
      _createdAt
    }`
  );

  return <NewsClient news={news} />;
}
