const rescue = require('express-rescue');
const Joi = require('joi');
const CEPService = require('../services/CEPservices');

const findCEP = async (req, res, next) => {
  // Extrai o cep da requisição
  const { cep } = req.params;
  const CEPFormat = /\d{5}-?\d{3}/;

  // Verifica se o formato deo CEP é válido
  if (!cep.match(CEPFormat)) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  }

  //busca o cep
  const response = await CEPService.findCEP(cep);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (response.error) return next(response.error);

  // retorna o resultado
  res.status(200).json(response);
}

module.exports = {
  findCEP,
}