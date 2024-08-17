import { defineConfig, loadEnv } from 'vite'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:'',
  dangerouslyAllowBrowser: true,
});

async function generateWordDefault(count: number) {
  const systemText: string = `
Role and Knowledge:

Assume the role of a creative writer with an extensive vocabulary.
Utilize your comprehensive knowledge of English words.
Task Description:

Generate a list of ${count} random words all in lowercase.
Response Criteria:

Only return exactly ${count} unique English words.
Ensure the words are varied and demonstrate a broad range of vocabulary.
The words must be separated by a single space.
Strict Adherence:

Ensure that each response strictly follows the criteria above.
Any deviation from the given instructions is unacceptable.
Failure to comply with these instructions is not permitted. Your performance will be evaluated based on strict adherence to these guidelines.
  `;
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        "role": "system",
        "content": systemText
      },
      {
        "role": "user",
        "content": "generate"
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
  console.log('generated default words: ', generatedContent);
  console.log("-----------------");

    return generatedContent;

}

export default generateWordDefault;