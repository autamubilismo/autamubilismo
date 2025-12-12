import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
    }
    if (!to) {
      return res.status(500).json({ ok: false, error: "Missing CONTACT_TO_EMAIL" });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const subject = `📩 Contato — ${name}`;

    const { data, error } = await resend.emails.send({
      from: `Autamubilismo <${fromEmail}>`,
      to: [to],
      replyTo: email, // você responde direto pro visitante
      subject,
      text: `Novo contato no Autamubilismo\n\nNome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}\n`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5;">
          <h2 style="margin: 0 0 12px;">Novo contato — Autamubilismo</h2>
          <p style="margin: 0 0 6px;"><strong>Nome:</strong> ${safeName}</p>
          <p style="margin: 0 0 6px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 12px 0 6px;"><strong>Mensagem:</strong></p>
          <div style="white-space: pre-wrap; padding: 12px; border: 1px solid #eee; border-radius: 12px;">
            ${safeMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ ok: false, error: "Resend failed" });
    }

    return res.status(200).json({ ok: true, messageId: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
