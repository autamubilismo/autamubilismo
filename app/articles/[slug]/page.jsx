import { redirect } from 'next/navigation';

export default function ArticleSlugRedirect({ params }) {
  redirect(`/article/${params?.slug || ''}`);
}
