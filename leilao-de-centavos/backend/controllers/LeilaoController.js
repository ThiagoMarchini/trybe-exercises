const { Router } = require('express');

const leilaoModel = require('../models/produto');

const router = Router();

router.get('/', async (_req, res) =>{
  const leilao = await leilaoModel.getAll() 
  res.status(200).json(leilao);
})

module.exports = router;