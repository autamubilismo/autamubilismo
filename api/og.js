// api/og.js

const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID || "c7nvssn2";
const SANITY_DATASET = process.env.SANITY_DATASET || "production";
const SANITY_API_VERSION = process.env.SANITY_API_VERSION || "2023-10-24";

function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sanityFetch(query, slug) {
  const url = new URL(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`
  );
  url.searchParams.set("query", query);
  url.searchParams.set("$slug", JSON.stringify(slug));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Sanity fetch failed");
  const json = await res.json();
  return json.result;
}

module.exports = async (req, res) => {
  try {
    const parsed = new URL(req.url, "https://www.autamubilismo.com");
    const type = parsed.searchParams.get("type");
    const slug = parsed.searchParams.get("slug");
    const canonicalUrl =
      parsed.searchParams.get("url") || "https://www.autamubilismo.com";

    if (!type || !slug) {
      res.status(400).send("Missing params");
      return;
    }

    const query =
      type === "news"
        ? `*[_type=="news" && slug.current==$slug][0]{
            title, excerpt,
            "image": image.asset->url,
            seo{ metaTitle, metaDescription, "ogImage": ogImage.asset->url }
          }`
        : `*[_type=="article" && slug.current==$slug][0]{
            title, excerpt,
            "image": image.asset->url,
            seo{ metaTitle, metaDescription, "ogImage": ogImage.asset->url }
          }`;

    const doc = await sanityFetch(query, slug);

    const title =
      doc?.seo?.metaTitle || doc?.title || "Autamubilismo";
    const description =
      doc?.seo?.metaDescription ||
      doc?.excerpt ||
      "Notícias e artigos sobre automobilismo.";
    const image =
      doc?.seo?.ogImage ||
      doc?.image ||
      "https://www.autamubilismo.com/og-default.png";

    const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />

  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Autamubilismo" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${esc(canonicalUrl)}" />
  <meta property="og:image" content="${esc(image)}" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta http-equiv="refresh" content="0;url=${esc(canonicalUrl)}" />
</head>
<body></body>
</html>`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=300");
    res.status(200).send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send("OG error");
  }
};
