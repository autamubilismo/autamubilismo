export default async function handler(req, res) {
  try {
    const { type, slug, url } = req.query;

    if (!slug || !type) {
      return res.status(400).send("Missing parameters");
    }

    // 🔹 Busca direto no Sanity via GROQ
    const projectId = "c7nvssn2";
    const dataset = "production";
    const apiVersion = "2023-10-24";

    const query = `
      *[_type == "${type}" && slug.current == $slug][0]{
        title,
        excerpt,
        image,
        seo{
          metaTitle,
          metaDescription,
          "ogImage": ogImage.asset->url
        }
      }
    `;

    const sanityUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(
      query
    )}&$slug=${slug}`;

    const sanityRes = await fetch(sanityUrl);
    const sanityJson = await sanityRes.json();
    const post = sanityJson.result;

    if (!post) {
      return res.status(404).send("Post not found");
    }

    const ogTitle =
      post.seo?.metaTitle || post.title || "Autamubilismo";
    const ogDescription =
      post.seo?.metaDescription || post.excerpt || "";
    const ogImage =
      post.seo?.ogImage || post.image || "https://www.autamubilismo.com/og-default.jpg";

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`
      <!doctype html>
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <title>${ogTitle}</title>

          <meta property="og:type" content="article" />
          <meta property="og:title" content="${ogTitle}" />
          <meta property="og:description" content="${ogDescription}" />
          <meta property="og:image" content="${ogImage}" />
          <meta property="og:url" content="${url}" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="${ogTitle}" />
          <meta name="twitter:description" content="${ogDescription}" />
          <meta name="twitter:image" content="${ogImage}" />

          <meta http-equiv="refresh" content="0;url=${url}" />
        </head>
        <body></body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("OG function failed");
  }
}
