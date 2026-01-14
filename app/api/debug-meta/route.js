import { sanityClient } from '@/lib/sanityClient';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required. Use ?slug=your-slug' }, { status: 400 });
  }

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
    "image": coalesce(mainImage.asset->url, image.asset->url),
    "mainImageAsset": mainImage.asset->{
      _id,
      url,
      metadata
    },
    seo{
      metaTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      "ogImage": ogImage.asset->url,
      "ogImageAsset": ogImage.asset->{
        _id,
        url,
        metadata
      }
    }
  }`;

  try {
    const post = await sanityClient.fetch(query, { slug });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const siteUrl = 'https://autamubilismo.com';
    const title = post?.seo?.metaTitle || post?.title || 'Autamubilismo';
    const description = post?.seo?.metaDescription || post?.excerpt || 'As ultimas noticias de automobilismo.';
    const ogTitle = post?.seo?.ogTitle || title;
    const ogDescription = post?.seo?.ogDescription || description;

    let image = post?.seo?.ogImage || post?.image;
    if (image && !image.startsWith('http')) {
      image = `${siteUrl}${image}`;
    }
    if (!image) {
      image = `${siteUrl}/og-default.png`;
    }

    return NextResponse.json({
      debug: {
        slug,
        rawPost: post,
        computedMetadata: {
          title,
          description,
          ogTitle,
          ogDescription,
          image,
          url: `${siteUrl}/news/${encodeURIComponent(post.slug || slug)}`
        },
        checks: {
          hasSeoFields: !!post.seo,
          hasOgImage: !!post?.seo?.ogImage,
          hasMainImage: !!post?.image,
          finalImageUsed: image,
          imageIsAbsolute: image?.startsWith('http'),
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to fetch post',
      details: error.message
    }, { status: 500 });
  }
}
