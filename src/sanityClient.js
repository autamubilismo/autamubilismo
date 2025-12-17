import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'c7nvssn2',  // ← Seu project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-02-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;