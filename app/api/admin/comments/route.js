import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';

const writeClient = createClient({
  projectId: 'c7nvssn2',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// GET - Listar todos os comentários (aprovados e pendentes)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get('filter') || 'all'; // all, pending, approved

    let query = `*[_type == "comment"] | order(createdAt desc) {
      _id,
      name,
      email,
      comment,
      approved,
      createdAt,
      "postTitle": post->title,
      "postSlug": post->slug.current,
      "postType": post->_type
    }`;

    if (filter === 'pending') {
      query = `*[_type == "comment" && approved != true] | order(createdAt desc) {
        _id,
        name,
        email,
        comment,
        approved,
        createdAt,
        "postTitle": post->title,
        "postSlug": post->slug.current,
        "postType": post->_type
      }`;
    } else if (filter === 'approved') {
      query = `*[_type == "comment" && approved == true] | order(createdAt desc) {
        _id,
        name,
        email,
        comment,
        approved,
        createdAt,
        "postTitle": post->title,
        "postSlug": post->slug.current,
        "postType": post->_type
      }`;
    }

    const comments = await writeClient.fetch(query);
    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar comentários' },
      { status: 500 }
    );
  }
}

// PATCH - Aprovar ou reprovar comentário
export async function PATCH(request) {
  try {
    const { id, approved } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'ID do comentário é obrigatório' },
        { status: 400 }
      );
    }

    await writeClient.patch(id).set({ approved }).commit();

    return NextResponse.json(
      { success: true, message: approved ? 'Comentário aprovado!' : 'Comentário reprovado.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao atualizar comentário:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar comentário' },
      { status: 500 }
    );
  }
}

// DELETE - Excluir comentário
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID do comentário é obrigatório' },
        { status: 400 }
      );
    }

    await writeClient.delete(id);

    return NextResponse.json(
      { success: true, message: 'Comentário excluído!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao excluir comentário:', error);
    return NextResponse.json(
      { error: 'Erro ao excluir comentário' },
      { status: 500 }
    );
  }
}
