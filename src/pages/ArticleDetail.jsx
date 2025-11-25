// src/pages/ArticleDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/UI';
import { client } from '../sanityClient';
import { NEWS_DATA, ARTICLES_DATA, MANIFESTO_POST } from '../data';

const ArticleDetail = ({ theme }) => {
  const isLight = theme === 'light';
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // tenta buscar no Sanity pelo slug
        const data = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            "slug": slug.current,
            "imageUrl": mainImage.asset->url,
            content,
            excerpt,
            publishedAt,
            "category": category->title,
            "author": author->name
          }`,
          { slug: id }
        );

        if (data) {
          setPost({
            ...data,
            contentText: data.content,
          });
          return;
        }

        // fallback: procura nos arrays do data.js
        const allLocal = [
          ...NEWS_DATA,
          ...ARTICLES_DATA,
          MANIFESTO_POST,
        ];

        const found = allLocal.find((item) => item.id === id);

        if (found) {
          setPost({
            ...found,
            imageUrl: found.image,
            contentHtml: found.content,
            category: found.category || found.categoryLabel || 'Editorial',
            author: found.author || 'Tamu',
          });
        }
      } catch (err) {
        console.error('Erro ao buscar post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-10">
        <BackButton to="/articles" theme={theme} />
        <p className={isLight ? 'text-gray-500' : 'text-gray-400'}>
          Carregando post…
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mt-10">
        <BackButton to="/articles" theme={theme} />
        <p className={isLight ? 'text-gray-500' : 'text-gray-400'}>
          Post não encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in max-w-3xl mx-auto">
      <BackButton to="/articles" theme={theme} />

      {/* header */}
      <header className="mb-6">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase mb-3">
          <span
            className={
              isLight
                ? 'px-3 py-1 rounded-full bg-[#F7B8C8] text-white'
                : 'px-3 py-1 rounded-full border border-[#fe88dd] text-[#fe88dd]'
            }
          >
            {post.category || 'Artigo'}
          </span>
          {post.publishedAt && (
            <span
              className={
                isLight ? 'text-gray-400' : 'text-gray-500'
              }
            >
              {post.publishedAt}
            </span>
          )}
        </div>

        <h1
          className={`text-3xl md:text-4xl font-black mb-3 ${
            isLight ? 'text-gray-900' : 'text-white'
          }`}
        >
          {post.title}
        </h1>

        {post.author && (
          <p
            className={
              isLight ? 'text-gray-500 text-sm' : 'text-gray-400 text-sm'
            }
          >
            por {post.author}
          </p>
        )}
      </header>

      {/* imagem de capa */}
      {post.imageUrl && (
        <div className="mb-6 rounded-3xl overflow-hidden bg-gray-200">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      )}

      {/* conteúdo */}
      <article
        className={`prose max-w-none ${
          isLight ? 'prose-p:text-gray-800' : 'prose-invert prose-p:text-gray-200'
        } prose-headings:font-black prose-a:text-[#D8C4F0]`}
      >
        {post.contentHtml ? (
          <div
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        ) : post.contentText ? (
          <p className="whitespace-pre-line leading-relaxed">
            {post.contentText}
          </p>
        ) : post.excerpt ? (
          <p className="leading-relaxed">{post.excerpt}</p>
        ) : (
          <p>Post sem conteúdo… ainda.</p>
        )}
      </article>
    </div>
  );
};

export default ArticleDetail;
