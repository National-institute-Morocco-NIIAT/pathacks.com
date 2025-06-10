// lib/judge0.js

import axios from 'axios';

const API_URL = process.env.JUDGE0_API_URL; // Replace with your Judge0 endpoint

const API_HEADERS = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // If using RapidAPI, replace with your key
  'X-RapidAPI-Host': process.env.RRAPIDAPI_HOST
};

export async function createSubmission(sourceCode, languageId) {
  console.log(API_URL, API_HEADERS, process.env.JUDGE0_API_URL);
  const response = await axios.post(
    `${API_URL}?base64_encoded=false&wait=false`,
    {
      source_code: sourceCode,
      language_id: languageId
    },
    {
      headers: API_HEADERS
    }
  );

  return response.data.token;
}

export async function getSubmission(token) {
  const response = await axios.get(`${API_URL}/${token}`, {
    headers: API_HEADERS
  });

  return response.data;
}
