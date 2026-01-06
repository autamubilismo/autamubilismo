export const config = {
  runtime: "nodejs",
};

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

async function sanityFetch(query, params = {}) {
  const url = new URL(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`
  );
  url.searchParams.set("query", query);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(`$${k}`, v);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
  const json = await res.json();
  return json.result;
}

export default async function handler(req, res) {
  try {
    const type = req.query.type; // "news" | "article"
    const slug = req.query.slug;
    const canonicalUrl = req.query.url || "https://autamubilismo.com";
    const siteName = "Autamubilismo";

    if (!type || !slug) {
      res.status(400).send("Missing type or slug");
      return;
    }

    const q =
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

    const doc = await sanityFetch(q, { slug });

    const title =
      doc?.seo?.metaTitle || doc?.title || `${siteName}`;
    const description =
      doc?.seo?.metaDescription || doc?.excerpt || "Notícias e artigos sobre automobilismo.";
    const image =
      doc?.seo?.ogImage || doc?.image || "https://autamubilismo.com/og-default.png";

    const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />

  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="${esc(siteName)}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${esc(canonicalUrl)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${esc(image)}" />

  <meta http-equiv="refresh" content="0;url=${esc(canonicalUrl)}" />
</head>
<body>
  <p>Redirecionando… <a href="${esc(canonicalUrl)}">abrir</a></p>
</body>
</html>`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");
    res.status(200).send(html);
  } catch (e) {
    // falha “de boa”: manda pro canonical e pronto
    const fallback = req.query.url || "https://autamubilismo.com";
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(`<!doctype html><meta http-equiv="refresh" content="0;url=${fallback}">`);
  }
}
