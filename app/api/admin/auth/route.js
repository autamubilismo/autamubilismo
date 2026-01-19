import { NextResponse } from 'next/server';

// POST - Verificar senha de admin
export async function POST(request) {
  try {
    const { password } = await request.json();

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Senha de admin não configurada no servidor' },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      // Criar um token simples (em produção, use JWT)
      const token = Buffer.from(`${adminPassword}-${Date.now()}`).toString('base64');

      return NextResponse.json(
        { success: true, token },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Senha incorreta' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Erro na autenticação:', error);
    return NextResponse.json(
      { error: 'Erro no servidor' },
      { status: 500 }
    );
  }
}

// GET - Verificar se o token é válido
export async function GET(request) {
  try {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Decodificar e verificar o token
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8');
      const [password] = decoded.split('-');

      if (password === adminPassword) {
        return NextResponse.json(
          { authenticated: true },
          { status: 200 }
        );
      }
    } catch {
      // Token inválido
    }

    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    );
  }
}
