// pages/api/judge0/submit.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = process.env.JUDGE0_API_URL!;
const API_HEADERS = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
  'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { sourceCode, languageId } = req.body;

  try {
    const response = await axios.post(
      `${API_URL}?base64_encoded=false&wait=false`,
      {
        source_code: sourceCode,
        language_id: languageId,
      },
      { headers: API_HEADERS }
    );

    res.status(200).json({ token: response.data.token });
  } catch (err: any) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'Submission failed' });
  }
}
