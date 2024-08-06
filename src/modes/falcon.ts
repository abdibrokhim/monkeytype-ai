async function completeWordFalcon(userText: string) {
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
  
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.ai71.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_FALCON_API_KEY}`,
      },
      body: JSON.stringify({
        model: "tiiuae/falcon-180b-chat",
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
      })
    });
    
    const data = await response.json();
  
    const generatedContent = data.response.choices[0].message.content!.trim();
  
    if (generatedContent === ".") {
      return ".";
    } else {
      return preprocessGeneratedWord(userText, generatedContent);
    }
  };

  function preprocessGeneratedWord(userText: string, generatedWord: string) {
    var t = generatedWord.slice(userText.length);
    console.log('user entered text: ', userText);
    console.log('generated word based on mistaken letter: ', generatedWord);
    console.log('new word slice: ', t);
    return t;
  }
  
  export default completeWordFalcon;