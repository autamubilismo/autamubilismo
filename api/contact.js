export default async function handler(req, res) {
  // só aceita POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  try {
    const { name, email, message } = req.body;

    // validação básica
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "Campos obrigatórios ausentes",
      });
    }

    // por enquanto, só confirma que chegou
    console.log("Contato recebido:", { name, email, message });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      error: "Erro interno",
    });
  }
}
