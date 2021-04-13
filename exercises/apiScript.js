// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

// Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// // Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => {
  fetchJoke();
}