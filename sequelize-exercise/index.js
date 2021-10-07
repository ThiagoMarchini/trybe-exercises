const express = require('express');
const bodyParser = require('body-parser');

const bookController = require('./controllers/Books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/book', bookController);

app.listen(PORT, () => console.log(`Rodando na Porta ${PORT}...`));

module.exports = app;