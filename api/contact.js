import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
    }
    if (!to) {
      return res.status(500).json({ ok: false, error: "Missing CONTACT_TO_EMAIL" });
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: `Autamubilismo <${fromEmail}>`,
      to: [to],
      reply_to: `${name} <${email}>`,
      subject: `📩 Contato — ${name}`,
      text: `Novo contato — Autamubilismo\n\nNome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}\n`,
    });

    if (result?.error) {
      console.error("Resend error:", result.error);
      return res.status(502).json({ ok: false, error: "Resend failed", details: result.error });
    }

    return res.status(200).json({ ok: true, id: result?.data?.id });
  } catch (err) {
    console.error("CONTACT API crash:", err);
    return res.status(500).json({ ok: false, error: "Server error", details: String(err?.message || err) });
  }
}
