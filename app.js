const submitForm = document.getElementById('api-request-form');
const textInput = document.getElementById('request-container');
// const Api_KEY = "";

submitForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const requestOptions = {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${Api_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "prompt": textInput.value,
      "model": "dall-e-2",
      "n": 1,
      "size": "1024x1024"
    }) 
  };
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', requestOptions);
    const data = await response.json();
    console.log('esto es data', data);
  } catch (error) {
    console.error(error);
  }
});