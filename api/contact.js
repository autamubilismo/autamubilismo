// api/contact.js

export default async function handler(req, res) {
  // Só aceita POST
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing fields" });
    return;
  }

  try {
    const apiKey = process.env.BREVO_API_KEY; // vamos criar essa env na Vercel
    if (!apiKey) {
      console.error("BREVO_API_KEY não configurada");
      res.status(500).json({ error: "Server misconfigured" });
      return;
    }

    // Envio via Brevo – endpoint de e-mail transacional
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Autamubilismo",
          email: "contato@autamubilismo.com", // depois que o Migadu estiver ok
        },
        to: [
          {
            email: "contato@autamubilismo.com", // para onde você quer receber
            name: "Autamubilismo",
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
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!brevoRes.ok) {
      console.error("Erro Brevo:", await brevoRes.text());
      res.status(500).json({ error: "Erro ao enviar e-mail" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro geral:", err);
    res.status(500).json({ error: "Erro no servidor" });
  }
}
