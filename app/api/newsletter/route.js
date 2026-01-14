import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'E-mail é obrigatório' },
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

    // Adicionar contato ao Resend Audiences (opcional: você precisa criar uma audience primeiro no painel)
    // Descomente as linhas abaixo quando criar sua audience no Resend
    
    try {
      await resend.contacts.create({
        email: email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
    } catch (audienceError) {
      console.log('Aviso: Não foi possível adicionar à audience:', audienceError);
      // Continua mesmo se falhar - o e-mail ainda será enviado
    }
    

    // Enviar e-mail de confirmação para o usuário
    await resend.emails.send({
      from: 'Autamubilismo <newsletter@autamubilismo.com>',
      to: [email],
      subject: '🏎️ Bem-vindo à Newsletter Autamubilismo!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <div style="background: white; border-radius: 20px; padding: 40px; text-align: center;">
            <h1 style="color: #ec4899; font-size: 32px; margin-bottom: 20px;">🏁 Bem-vindo!</h1>
            <p style="color: #374151; font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
              Você acaba de se inscrever na newsletter mais veloz da F1!
            </p>
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; text-align: left; border-radius: 10px;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>🔥 O que você vai receber:</strong><br>
                • Fofocas quentinhas do paddock<br>
                • Análises exclusivas de corridas<br>
                • Bastidores da F1<br>
                • Conteúdo que você não vai encontrar em outro lugar
              </p>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              Obrigada por fazer parte dessa comunidade! 💜
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                <strong>Autamubilismo</strong><br>
                Velocidade, comportamento e narrativa.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Notificar você sobre o novo inscrito
    await resend.emails.send({
      from: 'Newsletter Autamubilismo <newsletter@autamubilismo.com>',
      to: [process.env.CONTACT_EMAIL || 'autamubilismo@gmail.com'],
      subject: `🎉 Nova inscrição na newsletter!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ec4899; margin-bottom: 20px;">Nova inscrição na newsletter!</h2>
          <div style="background: #f9fafb; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p style="margin: 0 0 10px 0;"><strong>E-mail:</strong> ${email}</p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Data: ${new Date().toLocaleString('pt-BR')}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Notificação automática de inscrição na newsletter.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Inscrição realizada com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar inscrição na newsletter:', error);
    return NextResponse.json(
      { error: 'Erro ao processar inscrição. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
