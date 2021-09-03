const connection = require('../models/connection');

const findCEP = async (CEP) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?;';
  const [ response ] = await connection.execute(query, [CEP]);
  return response[0];
}

module.exports = {
  findCEP,
};
