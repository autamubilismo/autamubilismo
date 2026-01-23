import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "c7nvssn2",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false, // Desabilitado para buscar dados frescos do Sanity
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
