// pages/api/judge0/result.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = process.env.JUDGE0_API_URL!;
const API_HEADERS = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
  'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');

  const { token } = req.query;

  if (!token) return res.status(400).json({ error: 'Missing token' });

  try {
    const response = await axios.get(`${API_URL}/${token}`, { headers: API_HEADERS });
    res.status(200).json(response.data);
  } catch (err: any) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch result' });
  }
}
