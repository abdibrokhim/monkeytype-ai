import { defineConfig, loadEnv } from 'vite'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true,
});

async function completeWord(userText: string) {
  const systemText: string = `
  Role and Knowledge:

Assume the role of an expert English Professor.
Utilize your comprehensive knowledge of all English words.
Task Description:

You will receive an incomplete word.
Your objective is to generate a complete and valid English word from the incomplete input.
Response Criteria:

Only return a complete English word if it is a valid and correct English word.
If the input cannot form a valid English word, STRICTLY return a dot "."

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
        "content": userText
      }
    ],
    temperature: 1,
    max_tokens: 128,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const generatedContent = response.choices[0].message.content!.trim();

  if (generatedContent === ".") {
    return ".";
  } else {
    return preprocessGeneratedWord(userText, generatedContent);
  }
}

function preprocessGeneratedWord(userText: string, generatedWord: string) {
  var t = generatedWord.slice(userText.length);
  console.log('user entered text: ', userText);
  console.log('generated word based on mistaken letter: ', generatedWord);
  console.log('new word slice: ', t);
  return t;
}

// Example usage
// const userText: string = "wa";
// completeWord(userText).then((result) => {
//   console.log(result); // Output: "ter" if the generated word is "water"
// });

export default completeWord;