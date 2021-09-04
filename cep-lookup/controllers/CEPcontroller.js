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

const create = rescue(async(req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ error: { code: "invalidData", message: error } })
  }

  // Verifica se o formato deo CEP é válido
  const CEPFormat = /\d{5}-?\d{3}/;
  if (!req.body.cep.match(CEPFormat)) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  }

  // verifica se o CEP já existe
  const verify = await CEPService.findCEP(cep);

  if(!verify.error) {
    return res.status(409).json({
      error: { code: "alreadyExists", message: "CEP já existente" }
    })
  }

  const newCEP = await CEPService.create(cep, logradouro, bairro, localidade, uf);

  if(newCEP.error) return next(newCEP.error);

  return res.status(201).json(newCEP);
});

module.exports = {
  create,
  findCEP,
}