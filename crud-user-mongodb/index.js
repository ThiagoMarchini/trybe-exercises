const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/Users');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/user', async(_req, res) => {
  const users = await User.getAll();

  res.status(201).json(users);
});

app.get('/user/:id', async(req, res) => {
  const { id } = req.params;

  const user = await User.getById(id);

  if (user.error) return res.status(404).json(user);

  res.status(200).json(user);
});

app.put('/user/:id', async(req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  
  const validation = User.isValid(firstName, lastName, email, password);

  if (validation) {
    return res.status(400).json(validation);
  }

  const update = await User.update(id, firstName, lastName, email, password);
  console.log(update);
  res.status(200).json(update);
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const validation = User.isValid(firstName, lastName, email, password);
  if (validation) {
    return res.status(400).json(validation);
  }

  const response = await User.create(firstName, lastName, email, password);
  if(response.error === true) return res.status(400).json(response);

  res.status(201).json(response);
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});