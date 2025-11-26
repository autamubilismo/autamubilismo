import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'c7nvssn2',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
});
