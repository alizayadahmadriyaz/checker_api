// api/proxy.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Use POST");
  const url = `https://api.apify.com/v2/datasets/MCZP9OWeSNiK68Amv/items?format=json&clean=true&token=${process.env.APIFY_TOKEN}`;
  const r = await fetch(url);
  const data = await r.json();
  res.status(200).json(data);
}
