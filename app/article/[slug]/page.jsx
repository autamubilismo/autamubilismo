import ArticleDetail from './ArticleDetailsClient';
import { client } from '@/lib/sanity';

const siteUrl = 'https://autamubilismo.com';

export async function generateMetadata({ params }) {
  const slugParam = params?.slug ? decodeURIComponent(params.slug) : '';
  const query = `*[_type in ["article", "articles"] && (
      slug.current == $slug ||
      _id == $slug ||
      string::lower(slug.current) == string::lower($slug)
    )][0]{
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author,
    category,
    "image": coalesce(image.asset->url, mainImage.asset->url),
    seo{
      metaTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      "ogImage": ogImage.asset->url
    }
  }`;

  let post = null;
  if (slugParam) {
    try {
      post = await client.fetch(query, { slug: slugParam });
    } catch (error) {
      console.error('Erro ao carregar metadata do artigo:', error);
    }
  }

  const title = post?.seo?.metaTitle || post?.title || 'Autamubilismo';
  const description = post?.seo?.metaDescription || post?.excerpt || 'Artigos e analises de automobilismo.';
  const ogTitle = post?.seo?.ogTitle || title;
  const ogDescription = post?.seo?.ogDescription || description;
  const image = post?.seo?.ogImage || post?.image || `${siteUrl}/og-default.png`;
  const slug = post?.slug || slugParam;
  const url = `${siteUrl}/article/${encodeURIComponent(slug || '')}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: 'Autamubilismo',
      locale: 'pt_BR',
      images: [
        {
          url: image,
          alt: title,
        },
      ],
      publishedTime: post?.publishedAt,
      authors: post?.author ? [post.author] : undefined,
      section: post?.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [image],
    },
  };
}

export default function ArticlePage({ params }) {
  return <ArticleDetail slug={params?.slug} />;
}
