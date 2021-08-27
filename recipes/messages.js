const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', function(req, res) {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!`});
});

app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!`});
  res.status(401).json({ message: 'Unauthorized'});
});

app.put('/users/:name/:age', function(req, res) {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});