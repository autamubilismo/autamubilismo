import NewsDetail from './NewsDetailClient';

export default function NewsItemPage({ params }) {
  return <NewsDetail slug={params?.slug} />;
}
