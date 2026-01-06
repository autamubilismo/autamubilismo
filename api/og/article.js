export const config = { runtime: "edge" };

const esc = (s = "") =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return new Response("Missing slug", { status: 400 });

  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const apiVersion = process.env.SANITY_API_VERSION || "2023-10-24";
  const siteUrl = process.env.SITE_URL;

  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    excerpt,
    "slug": slug.current,
    "image": image.asset->url,
    seo{
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset->url
    }
  }`;

  const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", query);
  url.searchParams.set("$slug", JSON.stringify(slug));

  const res = await fetch(url.toString());
  const json = await res.json();
  const post = json.result;

  const title = post?.seo?.metaTitle || post?.title || "Autamubilismo";
  const desc = post?.seo?.metaDescription || post?.excerpt || "Artigos no Autamubilismo.";
  const ogImage = post?.seo?.ogImage || post?.image || `${siteUrl}/og-default.jpg`;
  const pageUrl = `${siteUrl}/articles/${encodeURIComponent(slug)}`;

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:url" content="${esc(pageUrl)}" />
  <meta property="og:image" content="${esc(ogImage)}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${esc(ogImage)}" />

  <meta http-equiv="refresh" content="0;url=${esc(pageUrl)}" />
</head>
<body></body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, s-maxage=300, stale-while-revalidate=3600",
    },
  });
}
