const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const simpsonsUtils = require('./simpsonFunctions');
const generateToken = require('./generateToken');

const app = express();

app.use(bodyParser.json());

app.get('/simpsons', rescue(async(req, res) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) {
    res.status(401).json({message: 'Token inválido!'});
  }
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async(req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Token inválido!'});

  const simpsons = await simpsonsUtils.getSimpsons();
  const simpson = simpsons.find((r) => r.id === id);

  if(!simpson) return res.status(404).json({ message: 'simpson not found!'});
  res.status(200).json(simpson);
}));

app.post('/simpsons', rescue(async(req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Token inválido!'});
  const { id, name } = req.body;
  const simpsons = await simpsonsUtils.getSimpsons();
  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }
  simpsons.push({ id, name });
  await simpsonsUtils.setSimpsons(simpsons);
  res.status(204).end();
}));

app.post('/signup', function(req, res) {
  const { email, password, firstName, phone } = req.body;
  if ( !email || !password || !firstName || !phone) {
    res.send(401).json({ message: 'missing fields' });
  }
  const newToken = generateToken();
  res.status(200).json({ token: newToken });
});

app.listen(3001, () => {
  console.log('Aplicação escutando na porta 3001.');
});
