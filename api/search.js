import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { q } = req.query;

  if (!q || typeof q !== "string" || q.trim().length < 2) {
    return res.status(200).json({ results: [] });
  }

  try {
    const query = `
      *[
        _type in ["post", "news", "article"] &&
        (
          title match $q ||
          headline match $q ||
          excerpt match $q
        )
      ][0...10]{
        _id,
        title,
        "slug": slug.current,
        excerpt
      }
    `;

    const results = await client.fetch(query, {
      q: `${q}*`,
    });

    const formatted = results.map((item) => ({
      id: item._id,
      title: item.title,
      excerpt: item.excerpt,
      url: item.slug ? `/news/${item.slug}` : "#",
    }));

    return res.status(200).json({ results: formatted });
  } catch (err) {
    console.error("Search error:", err);
    return res.status(500).json({ error: "Search failed" });
  }
}
