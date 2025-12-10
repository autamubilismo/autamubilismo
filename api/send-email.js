// api/send-email.js (para Vercel Serverless Functions)
// ou pages/api/send-email.js (para Next.js)

export default async function handler(req, res) {
  // Só aceita POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { name, email, message } = req.body;

  // Validação
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // A API key vem do ambiente do SERVIDOR (segura)
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error('BREVO_API_KEY não configurada no servidor');
    return res.status(500).json({ error: 'Configuração do servidor incompleta' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey, // Key segura no servidor
      },
      body: JSON.stringify({
        sender: {
          name: 'Autamubilismo',
          email: 'autamubilismo@gmail.com',
        },
        to: [
          {
            email: 'autamubilismo@gmail.com',
            name: 'Autamubilismo',
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `Novo contato pelo site – ${name}`,
        htmlContent: `
          <h2>Novo contato pelo site Autamubilismo</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro Brevo:', data);
      return res.status(response.status).json({ 
        error: 'Erro ao enviar email',
        details: data 
      });
    }

    return res.status(200).json({ 
      success: true,
      messageId: data.messageId 
    });

  } catch (error) {
    console.error('Erro geral:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: error.message 
    });
  }
}