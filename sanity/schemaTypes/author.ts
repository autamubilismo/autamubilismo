// schemastypes/author.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Autor(a)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
