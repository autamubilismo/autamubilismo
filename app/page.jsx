import { client } from "@/lib/sanity";
import { HomeClient } from "@/components/home/HomeClient";

async function getLatestContent() {
  const news = await client.fetch(`
    *[_type == "news"] | order(publishedAt desc)[0...4] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "image": image.asset->url,
      "category": coalesce(category->title, category, "Geral"),
      publishedAt,
      _createdAt
    }
  `);

  const articles = await client.fetch(`
    *[_type in ["article", "articles"]] | order(publishedAt desc)[0...4] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "image": coalesce(image.asset->url, mainImage.asset->url),
      "category": coalesce(category->title, category, "Opiniao"),
      publishedAt,
      _createdAt
    }
  `);

  return { news, articles };
}

export default async function Home() {
  const { news, articles } = await getLatestContent();

  return <HomeClient news={news} articles={articles} />;
}
