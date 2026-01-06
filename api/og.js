// /api/og.js
export default async function handler(req, res) {
  try {
    const { type, slug, url } = req.query;

    if (!type || !slug) {
      return res.status(400).send("Missing parameters: type, slug");
    }

    // Só aceito esses dois pra não virar injeção no GROQ
    const sanityType =
      type === "news" ? "news" :
      type === "article" ? "article" :
      null;

    if (!sanityType) {
      return res.status(400).send("Invalid type. Use type=news or type=article");
    }

    const projectId = "c7nvssn2";
    const dataset = "production";
    const apiVersion = "2023-10-24";

    const esc = (s = "") =>
      String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    // ✅ Query correta: transforma image/ogImage em URL
    const query = `
      *[_type == "${sanityType}" && slug.current == $slug][0]{
        title,
        excerpt,
        "imageUrl": image.asset->url,
        seo{
          metaTitle,
          metaDescription,
          "ogImageUrl": ogImage.asset->url
        }
      }
    `;

    const sanityUrl =
      `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}` +
      `?query=${encodeURIComponent(query)}` +
      `&$slug=${encodeURIComponent(slug)}`;

    const sanityRes = await fetch(sanityUrl);
    const sanityJson = await sanityRes.json();
    const post = sanityJson.result;

    // Canonical final
    const canonical =
      url ||
      `https://www.autamubilismo.com/${sanityType === "news" ? "news" : "articles"}/${slug}`;

    // ⚠️ precisa existir de verdade em /public
    const defaultImage = "https://www.autamubilismo.com/og-default.png";

    // Se não achou, ainda devolve HTML 200 (melhor pra bots do que 404)
    const ogTitle = post?.seo?.metaTitle || post?.title || "Autamubilismo";
    const ogDescription =
      post?.seo?.metaDescription || post?.excerpt || "Notícias e artigos sobre automobilismo.";
    const ogImage =
      post?.seo?.ogImageUrl || post?.imageUrl || defaultImage;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");

    return res.status(200).send(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>${esc(ogTitle)}</title>
    <meta name="description" content="${esc(ogDescription)}" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Autamubilismo" />
    <meta property="og:title" content="${esc(ogTitle)}" />
    <meta property="og:description" content="${esc(ogDescription)}" />
    <meta property="og:image" content="${esc(ogImage)}" />
    <meta property="og:url" content="${esc(canonical)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(ogTitle)}" />
    <meta name="twitter:description" content="${esc(ogDescription)}" />
    <meta name="twitter:image" content="${esc(ogImage)}" />

    <meta http-equiv="refresh" content="0;url=${esc(canonical)}" />
  </head>
  <body></body>
</html>`);
  } catch (err) {
    console.error(err);
    return res.status(500).send("OG function failed");
  }
}
