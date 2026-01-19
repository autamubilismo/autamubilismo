export const comment = {
  name: 'comment',
  title: 'Comentários',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'comment',
      title: 'Comentário',
      type: 'text',
      validation: (Rule) => Rule.required().min(5).max(1000),
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'news' }, { type: 'article' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'approved',
      title: 'Aprovado',
      type: 'boolean',
      description: 'Comentários precisam ser aprovados antes de aparecerem no site',
      initialValue: false,
    },
    {
      name: 'createdAt',
      title: 'Data de criação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      postTitle: 'post.title',
      approved: 'approved',
    },
    prepare({ name, comment, postTitle, approved }) {
      return {
        title: `${approved ? '✅' : '⏳'} ${name}`,
        subtitle: `${postTitle ? `em "${postTitle.substring(0, 30)}..."` : ''} - ${comment?.substring(0, 50)}...`,
      };
    },
  },
  orderings: [
    {
      title: 'Mais recentes',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
    {
      title: 'Pendentes primeiro',
      name: 'pendingFirst',
      by: [{ field: 'approved', direction: 'asc' }],
    },
  ],
};
