import NewsDetail from './NewsDetailClient';
import { client } from '@/lib/sanity';

const siteUrl = 'https://autamubilismo.com';

export async function generateMetadata({ params }) {
  const slugParam = params?.slug ? decodeURIComponent(params.slug) : '';
  const query = `*[_type == "news" && (
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
    "image": image.asset->url,
    seo{
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset->url
    }
  }`;

  let post = null;
  if (slugParam) {
    try {
      post = await client.fetch(query, { slug: slugParam });
    } catch (error) {
      console.error('Erro ao carregar metadata da noticia:', error);
    }
  }

  const title = post?.seo?.metaTitle || post?.title || 'Autamubilismo';
  const description = post?.seo?.metaDescription || post?.excerpt || 'As ultimas noticias de automobilismo.';
  const image = post?.seo?.ogImage || post?.image || `${siteUrl}/og-default.png`;
  const slug = post?.slug || slugParam;
  const url = `${siteUrl}/news/${encodeURIComponent(slug || '')}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title,
      description,
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
      title,
      description,
      images: [image],
    },
  };
}

export default function NewsItemPage({ params }) {
  return <NewsDetail slug={params?.slug} />;
}
