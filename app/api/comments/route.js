import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

// Cliente com token para escrita
const writeClient = createClient({
  projectId: 'c7nvssn2',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Cliente público para leitura
const readClient = createClient({
  projectId: 'c7nvssn2',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

// GET - Buscar comentários aprovados de um post
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    const postType = searchParams.get('postType') || 'news';

    if (!postId) {
      return NextResponse.json(
        { error: 'postId é obrigatório' },
        { status: 400 }
      );
    }

    const comments = await readClient.fetch(
      `*[_type == "comment" && post._ref == $postId && approved == true] | order(createdAt desc) {
        _id,
        name,
        comment,
        createdAt
      }`,
      { postId }
    );

    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar comentários' },
      { status: 500 }
    );
  }
}

// POST - Criar novo comentário
export async function POST(request) {
  try {
    const { name, email, comment, postId, postType } = await request.json();

    // Validações
    if (!name || !email || !comment || !postId) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { error: 'Nome deve ter entre 2 e 50 caracteres' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    if (comment.length < 5 || comment.length > 1000) {
      return NextResponse.json(
        { error: 'Comentário deve ter entre 5 e 1000 caracteres' },
        { status: 400 }
      );
    }

    // Criar documento no Sanity
    const newComment = await writeClient.create({
      _type: 'comment',
      name: name.trim(),
      email: email.trim().toLowerCase(),
      comment: comment.trim(),
      post: {
        _type: 'reference',
        _ref: postId,
      },
      approved: false,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Comentário enviado! Será publicado após aprovação.',
        id: newComment._id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar comentário:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar comentário. Tente novamente.' },
      { status: 500 }
    );
  }
}
