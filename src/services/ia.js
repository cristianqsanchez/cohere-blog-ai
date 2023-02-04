import { API, KEY } from '../config'

export async function writeMyPost (input) {
  const data = {
    model: 'command-xlarge-nightly',
    prompt: `Write a body paragraph for a blog post about ${input}`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  }

  const response = await fetch(API, {
    method: 'POST',
    headers: {
      Authorization: `BEARER ${KEY}`,
      'Content-Type': 'application/json',
      'Cohere-Version': '2022-12-06'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())

  const { text } = response.generations[0]
  return text
}
