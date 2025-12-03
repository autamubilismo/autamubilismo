// schemaTypes/index.ts
import type { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import news from './news'
import article from './articles'
import manifesto from './manifesto'

export const schemaTypes: SchemaTypeDefinition[] = [
  news,
  article,
  manifesto,
  blockContent,
]
