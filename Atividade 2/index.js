const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fetch = require('node-fetch');
const app = express();
const validateToken = require('./validateToken');
const { default: axios } = require('axios');

app.use(bodyParser.json());

app.get(
  '/btc/price', validateToken,
  rescue(async (_req, res) => {
    const data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    res.status(200).json(data.data);
  })
);

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });

