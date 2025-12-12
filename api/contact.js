import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// sanitização simples pra evitar HTML estranho
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  // só aceita POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    // validação básica
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    // envs obrigatórias
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return res.status(500).json({ ok: false, error: "Missing CONTACT_TO_EMAIL" });
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const text = `
Novo contato — Autamubilismo

Nome: ${name}
Email: ${email}

Mensagem:
${message}
`;

    const { error } = await resend.emails.send({
      from: `Autamubilismo <${fromEmail}>`,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: `${name} <${email}>`,
      subject: `📩 Contato — ${name}`,
      text,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5;">
          <h2>Novo contato — Autamubilismo</h2>
          <p><strong>Nome:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="white-space: pre-wrap; padding: 12px; border: 1px solid #eee; border-radius: 12px;">
            ${safeMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return res.status(502).json({ ok: false, error: "Resend failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Server error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
