import fetch, { Headers } from 'node-fetch';

// Armazenamento do TOKEN numa variável
// Num ambiente real, esse TOKEN viria de uma variável de ambiente, ou do Local Storage
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criação de um novo Objeto de Headers
const headers = new Headers({
  Authorization: API_TOKEN});

// Criando uma requisição do tipo GET:
fetch('https://postman-echo.com/get?param1=teste', {
  headers,
  method: 'POST',
})
  .then((response) => {
    if(!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorOrResponse) => {
    if(errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }
    console.error(errorOrResponse);
  });