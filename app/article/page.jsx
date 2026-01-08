import { client } from '@/lib/sanity';
import { ArticlesClient } from './ArticlesClient';

export default async function ArticlesPage() {
  const posts = await client.fetch(
    `*[_type in ["article", "articles"]] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "imageUrl": coalesce(image.asset->url, mainImage.asset->url),
      excerpt,
      publishedAt,
      "category": coalesce(category->title, category, "Editorial"),
      author
    }`
  );

  return <ArticlesClient posts={posts} />;
}
