// src/lib/sanityClient.js
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'seuPc7nvssn2',   // copia do sanity.config.ts
  dataset: 'production',         // ou o nome que estiver lá
  apiVersion: '2025-01-01',      // qualquer data recente YYYY-MM-DD
  useCdn: true,                  // true = mais rápido pra leitura
});
