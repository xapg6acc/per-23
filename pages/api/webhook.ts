export default function webhook(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log('Отримано нову подію веб-хука:', data);

    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).end();
  }
}
