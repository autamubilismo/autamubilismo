export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  try {
    const { email } = req.body || {};

    if (!email) {
      return res.status(400).json({ ok: false, error: "Missing email" });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_NEWSLETTER_LIST_ID;

    if (!apiKey) {
      return res.status(500).json({ ok: false, error: "Missing BREVO_API_KEY" });
    }

    if (!listId) {
      return res.status(500).json({ ok: false, error: "Missing BREVO_NEWSLETTER_LIST_ID" });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Brevo error:", text);
      return res.status(502).json({ ok: false, error: "Brevo failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Newsletter API crash:", err);
    return res.status(500).json({ ok: false });
  }
}
