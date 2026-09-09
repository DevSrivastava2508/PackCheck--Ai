export default function handler(req, res) {
  // Enable CORS if needed
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Supply environment variables configured in Vercel Project Dashboard
  res.status(200).json({
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
    GEMINI_API_KEY_2: process.env.GEMINI_API_KEY_2 || '',
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || '',
    OPENROUTER_MODEL: process.env.OPENROUTER_MODEL || 'google/gemma-4-26b-a4b-it:free'
  });
}
