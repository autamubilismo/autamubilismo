import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { sanityClient as client } from "/src/lib/sanityClient.js";

import { BackButton } from '../components/UI';

const NewsPage = ({ theme = "light" }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const isLight = theme === "light";

  useEffect(() => {
    client.fetch(
      `*[_type == "news" && slug.current == $slug][0]{
        _id,
        title,
        "image": image.asset->url,
        excerpt,
        body,
        category,
        author,
        publishedAt
      }`,
      { slug }
    )
    .then((res) => {
      setPost(res);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="animate-in fade-in text-center mt-20">
        <BackButton to="/" theme={theme} />
        <h1 className={`text-3xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Carregando…
        </h1>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="animate-in fade-in text-center mt-20">
        <BackButton to="/" theme={theme} />
        <h1 className={`text-3xl font-black ${isLight ? 'text-gray-800' : 'text-white'}`}>
          Notícia não encontrada
        </h1>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in mx-auto max-w-3xl mt-20 px-6">
      <BackButton to="/news" theme={theme} />

      <h1 className={`text-4xl font-black text-center mb-6 ${
        isLight ? 'text-gray-800' : 'text-white'
      }`}>
        {post.title}
      </h1>

      {post.publishedAt && (
        <p className={`text-center mb-4 ${
          isLight ? 'text-gray-600' : 'text-gray-400'
        }`}>
          {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
        </p>
      )}

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl shadow-lg mb-6"
        />
      )}

      {post.excerpt && (
        <p className={`text-lg leading-relaxed mb-6 ${
          isLight ? 'text-gray-700' : 'text-gray-300'
        }`}>
          {post.excerpt}
        </p>
      )}

      {post.body && (
        <div className={`prose prose-lg max-w-none mb-10 ${
          isLight ? 'prose-gray' : 'prose-invert'
        }`}>
          {Array.isArray(post.body)
            ? post.body.map((block, i) => (
                <p key={i}>{block.children?.[0]?.text}</p>
              ))
            : <p>{post.body}</p>
          }
        </div>
      )}
    </div>
  );
};

export default NewsPage;
