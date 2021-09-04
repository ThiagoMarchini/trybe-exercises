const connection = require('../models/connection');
const axios = require('axios');

const findCEP = async (CEP) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?;';
  const [ response ] = await connection.execute(query, [CEP]);
  if (!response[0]) {
    const fetchResponse = await fetchFromAPI(CEP);
    if (!fetchResponse.erro) {
      const { cep, logradouro, bairro, localidade, uf } = fetchResponse;
      const createResponse = await create(cep, logradouro, bairro, localidade, uf);
      return createResponse;
    }
    return fetchResponse;
  }
  return response[0];
}

const fetchFromAPI = async (CEP) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
    return response.data;
  } catch (error) {
    return error
  }
}

const create = async(cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);';
  const [response] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  if(!response[0]) return { cep, logradouro, bairro, localidade, uf };
  return response;
}

module.exports = {
  create,
  findCEP,
};
