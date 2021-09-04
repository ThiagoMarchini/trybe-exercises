const CEP = require('../models/CEPmodels');

const findCEP = async (cep) => {
  const response = await CEP.findCEP(cep);

  // Caso não seja encontrado o CEP, retornamos um objeto de erro.
  if (response.erro) {
    return {
      error: {
        code: "notFound",
        message: "CEP não encontrado"
      }
    };
  }

  // Caso seja encontrado o CEP, retorna:
  return response;
}

const create = async(cep, logradouro, bairro, localidade, uf) => {
  return await CEP.create(cep, logradouro, bairro, localidade, uf);
}

module.exports = {
  create,
  findCEP,
};