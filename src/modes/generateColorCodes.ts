import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true,
});

async function generateColorCodes(topic: string) {
  const systemText: string = `
  Role and Knowledge:
Assume the role of a creative designer with a deep understanding of color theory and its application. Utilize your extensive knowledge of colors, their combinations, and the emotions they evoke.

Task Description:
Generate a set of four unique colors that reflect and are inspired by the given topic. The topic will be provided in the following format: [Topic] <topic goes here>.

Response Criteria:
STRICTLY return a list of four colors, each represented in hexadecimal code. Ensure that the colors are unique, visually appealing, and relevant to the topic.

Strict Adherence:
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
  console.log('generated color codes: ', generatedContent);
  console.log("-----------------");

//   convert to list of color codes
// then return the list

    return generatedContent.split("\n").map((color: string) => color.trim());

}

export default generateColorCodes;