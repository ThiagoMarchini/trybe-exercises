const express = require('express');
const bodyParser = require('body-parser');
const Ping = require('./controllers/Ping');
const CEP = require('./controllers/CEPcontroller');
const errorMiddleware = require('./controllers/ErrorController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', Ping.ping);
app.get('/cep/:cep', CEP.findCEP);
app.post('/cep', CEP.create);

app.use(errorMiddleware);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});