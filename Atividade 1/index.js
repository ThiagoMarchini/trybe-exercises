/* index.js */ 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const userRouter = require('./userRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/user', userRouter);



app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });