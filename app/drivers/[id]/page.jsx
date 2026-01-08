import DriverDetailClient from './DriverDetailClient';

export default function DriverDetailPage({ params }) {
  return <DriverDetailClient id={params?.id} />;
}
