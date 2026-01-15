import NewsDetail from './NewsDetailClient';
import { sanityClient } from '@/lib/sanityClient';

const siteUrl = 'https://autamubilismo.com';

// Query reutilizável para buscar a notícia
const getNewsQuery = (slug) => {
  return sanityClient.fetch(
    `*[_type == "news" && (
      slug.current == $slug ||
      _id == $slug ||
      string::lower(slug.current) == string::lower($slug)
    )][0]{
      _id,
      title,
      "slug": slug.current,
      "image": coalesce(mainImage.asset->url, image.asset->url),
      "mainImage": mainImage{
        ...,
        asset->
      },
      excerpt,
      category,
      author,
      publishedAt,
      "source": sourceLabel,
      sourceUrl,
      tags,
      seo{
        metaTitle,
        metaDescription,
        ogTitle,
        ogDescription,
        "ogImage": ogImage.asset->url
      },
      body[] {
        ...,
        _type == "image" => {
          ...,
          "url": asset->url
        }
      },
      content[] {
        ...,
        _type == "image" => {
          ...,
          "url": asset->url
        }
      }
    }`,
    { slug: decodeURIComponent(slug) }
  );
};

export async function generateMetadata({ params }) {
  // Em Next.js 15+, params é uma Promise
  const resolvedParams = await params;
  const slugParam = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : '';

  let post = null;
  if (slugParam) {
    try {
      post = await getNewsQuery(slugParam);
    } catch (error) {
      console.error('Erro ao carregar metadata da noticia:', error);
    }
  }

  const title = post?.seo?.metaTitle || post?.title || 'Autamubilismo — Fórmula 1, automobilismo e cultura do paddock';
  const description = post?.seo?.metaDescription || post?.excerpt || 'As ultimas noticias de automobilismo.';
  const ogTitle = post?.seo?.ogTitle || title;
  const ogDescription = post?.seo?.ogDescription || description;

  // Garante URL absoluta da imagem
  let image = post?.seo?.ogImage || post?.image;
  if (image && !image.startsWith('http')) {
    image = `${siteUrl}${image}`;
  }
  if (!image) {
    image = `${siteUrl}/og-default-v2.png`;
  }

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
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: 'Autamubilismo',
      locale: 'pt_BR',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
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
      site: '@autamubilismo',
      creator: '@autamubilismo',
    },
  };
}

// Fetch dos dados no servidor
export default async function NewsItemPage({ params }) {
  // Em Next.js 15+, params é uma Promise
  const resolvedParams = await params;
  const slugParam = resolvedParams?.slug ? decodeURIComponent(resolvedParams.slug) : '';

  let initialPost = null;
  if (slugParam) {
    try {
      initialPost = await getNewsQuery(slugParam);
    } catch (error) {
      console.error('Erro ao carregar noticia:', error);
    }
  }

  return <NewsDetail slug={resolvedParams?.slug} initialPost={initialPost} />;
}
