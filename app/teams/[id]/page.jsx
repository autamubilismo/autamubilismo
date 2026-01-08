import TeamDetailClient from './TeamDetailClient';

export default function TeamDetailPage({ params }) {
  return <TeamDetailClient id={params?.id} />;
}
