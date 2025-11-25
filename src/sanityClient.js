// src/sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'seuPc7nvssn2', // pega do sanity.config.ts
  dataset: 'production',            // ou o nome que você escolheu
  apiVersion: '2025-02-01',         // pode ser a data de hoje
  useCdn: true,
});
