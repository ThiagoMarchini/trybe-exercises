// Crie uma função que faça requisição para a api dog pictures.

const fetch = require('node-fetch');

function fetchURL() {
  return fetch('https://dog.ceo/api/breeds/image/random').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { fetchURL };