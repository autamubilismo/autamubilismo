export default async function handler(req, res) {
  try {
    const { type, slug, url } = req.query;

    if (!slug || !type) {
      return res.status(400).send("Missing parameters");
    }

    const projectId = "c7nvssn2";
    const dataset = "production";
    const apiVersion = "2023-10-24";

    // Escapa texto pra não quebrar HTML (aspas, <, &, etc.)
    const esc = (s = "") =>
      String(s)
        .split("&").join("&amp;")
        .split("<").join("&lt;")
        .split(">").join("&gt;")
        .split('"').join("&quot;")
        .split("'").join("&#039;");

    // ✅ Mapeia type da URL -> possíveis _type do Sanity
    const candidates =
      type === "news"
        ? ["news", "noticias", "noticia"]
        : ["article", "articles", "artigos", "artigo"];

    let post = null;

    for (const t of candidates) {
      const query = `
        *[_type == "${t}" && slug.current == $slug][0]{
          title,
          excerpt,

          // ✅ resolve imagem principal pra URL
          "image": image.asset->url,

          seo{
            metaTitle,
            metaDescription,
            "ogImage": ogImage.asset->url
          }
        }
      `;

      const sanityUrl =
        `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}` +
        `?query=${encodeURIComponent(query)}` +
        `&$slug=${encodeURIComponent(slug)}`;

      const sanityRes = await fetch(sanityUrl);
      const sanityJson = await sanityRes.json();

      if (sanityJson?.result) {
        post = sanityJson.result;
        break;
      }
    }

    if (!post) {
      // Em vez de 404 (que faz bot desistir), devolve um HTML fallback
      // com redirecionamento — melhor pra crawlers.
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Autamubilismo</title>
    <meta property="og:title" content="Autamubilismo" />
    <meta property="og:description" content="Notícias e artigos sobre automobilismo." />
    <meta property="og:image" content="https://www.autamubilismo.com/og-default.jpg" />
    <meta property="og:url" content="${esc(url || "https://www.autamubilismo.com")}" />
    <meta http-equiv="refresh" content="0;url=${esc(url || "https://www.autamubilismo.com")}" />
  </head>
  <body></body>
</html>`);
    }

    const ogTitle = post.seo?.metaTitle || post.title || "Autamubilismo";
    const ogDescription = post.seo?.metaDescription || post.excerpt || "";
    const ogImage =
      post.seo?.ogImage ||
      post.image ||
      "https://www.autamubilismo.com/og-default.jpg";

    const canonical = url || `https://www.autamubilismo.com`;

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

    // Fallback que não quebra preview (melhor que 500)
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Autamubilismo</title>
    <meta property="og:title" content="Autamubilismo" />
    <meta property="og:description" content="Notícias e artigos sobre automobilismo." />
    <meta property="og:image" content="https://www.autamubilismo.com/og-default.jpg" />
    <meta property="og:url" content="https://www.autamubilismo.com" />
    <meta http-equiv="refresh" content="0;url=https://www.autamubilismo.com" />
  </head>
  <body></body>
</html>`);
  }
}
