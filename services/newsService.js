import { sanityClient } from '../lib/sanityClient.js';

export async function fetchNews() {
  const query = `*[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": image.asset->url,
    category,
    author,
    publishedAt
  }`;

  return sanityClient.fetch(query);
}
