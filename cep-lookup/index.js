const express = require('express');
const Ping = require('./controllers/Ping');
const CEP = require('./controllers/CEPcontroller');
const errorMiddleware = require('./controllers/ErrorController');

const app = express();

app.get('/ping', Ping.ping);
app.get('/cep/:cep', CEP.findCEP);

app.use(errorMiddleware);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});