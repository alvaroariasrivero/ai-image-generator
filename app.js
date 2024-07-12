const submitForm = document.getElementById('api-request-form');
const textInput = document.getElementById('request-container');
const Api_KEY = "";
// const apiUrl = 'https://api.starryai.com/user/';

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

// STARRAI API CORS ISSUE
// submitForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const options = {
//     method: 'POST',
//     headers: {
//       accept: 'application/json',
//       'content-type': 'application/json',
//       'X-API-Key': 'q5PSEA0Rfwg7bPt2cP2QSsd0AfXQGg',
//       'access-control-allow-credentials':	'*'
//     },
//     body: JSON.stringify({
//       model: 'lyra',
//       aspectRatio: 'square',
//       highResolution: false,
//       images: 4,
//       steps: 20,
//       initialImageMode: 'color',
//       prompt: 'dancing dog'
//     })
//   };
//   try {
//     fetch('https://api.starryai.com/creations/', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));
//   } catch (error) {
//     console.error(error);
//   }
// });