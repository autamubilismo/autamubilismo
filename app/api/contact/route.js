import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
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

    const data = await resend.emails.send({
      from: 'Contato autamubilismo <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'autamubilismo@gmail.com'],
      replyTo: email,
      subject: `Nova mensagem de contato: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ec4899; margin-bottom: 20px;">Nova mensagem de contato</h2>
          <div style="background: #f9fafb; border-left: 4px solid #ec4899; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>E-mail:</strong> ${email}</p>
          </div>
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Mensagem:</h3>
            <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Esta mensagem foi enviada através do formulário de contato do site autamubilismo.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
