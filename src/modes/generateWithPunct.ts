import { defineConfig, loadEnv } from 'vite'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function generateWordWithPunct(topic: string) {
  const systemText: string = `
Role and Knowledge:
Assume the role of an experienced author and editor. Utilize your extensive understanding of English grammar, syntax, and punctuation. Task Description:
Generate a coherent short paragraph based on the given topic. The topic will be provided in the following format: [Topic] <topic goes here>. Response Criteria:
Only return a complete and correctly punctuated short paragraph relevant to the given topic. Ensure the paragraph maintains clarity, coherence, and relevance to the chosen topic. Strict Adherence:
Ensure that each response strictly follows the criteria above. Any deviation from the given instructions is unacceptable. Failure to comply with these instructions is not permitted. Your performance will be evaluated based on strict adherence to these guidelines.
  `;
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        "role": "system",
        "content": systemText
      },
      {
        "role": "user",
        "content": "[Topic]\n" + topic
      }
    ],
    temperature: 1,
    max_tokens: 128,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const generatedContent = response.choices[0].message.content!.trim();

  console.log("-----------------");
  console.log('generated words with punctuation: ', generatedContent);
  console.log("-----------------");

  return generatedContent;

}

export default generateWordWithPunct;