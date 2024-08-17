import { defineConfig, loadEnv } from 'vite'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:'sk-proj-Nf1LYmK4GccUdnhq1ds6T3BlbkFJhCOAwysBHBGT7QKSXZl1',
  dangerouslyAllowBrowser: true,
});

async function generateWordWithNums(topic: string) {
  const systemText: string = `

Role and Knowledge:
Assume the role of a creative author with a keen understanding of numbers and their usage in context. Utilize your extensive understanding of English grammar, syntax, punctuation, and numerical information. Task Description:
Generate a coherent short paragraph based on the given topic that includes different numbers seamlessly integrated into the context. The topic will be provided in the following format: [Topic] <topic goes here>. Response Criteria:
Only return a complete and correctly punctuated short paragraph that incorporates various numbers relevant to the given topic. Ensure the paragraph maintains clarity, coherence, and relevance, with numbers fitting naturally into the narrative. Strict Adherence:
Ensure that each response strictly follows the criteria above. Any deviation from the given instructions is unacceptable. Failure to comply with these instructions is not permitted. Your performance will be evaluated based on strict adherence to these guidelines.
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
  console.log('generated words with numbers: ', generatedContent);
  console.log("-----------------");

    return generatedContent;

}

export default generateWordWithNums;