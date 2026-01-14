import { client } from "@/lib/sanity";
import { NewsClient } from "./NewsClient";

export default async function NewsPage() {
  const news = await client.fetch(
    `*[_type == "news"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "image": coalesce(mainImage.asset->url, image.asset->url),
      excerpt,
      publishedAt,
      category,
      author
    }`
  );

  return <NewsClient news={news} />;
}
