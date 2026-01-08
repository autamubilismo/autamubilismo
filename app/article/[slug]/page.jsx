import ArticleDetail from './ArticleDetailsClient';

export default function ArticlePage({ params }) {
  return <ArticleDetail slug={params?.slug} />;
}
