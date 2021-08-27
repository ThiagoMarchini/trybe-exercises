const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Essa rota não passa pelo middleware de autenticação:
app.get('/open', function (req, res) {
  res.send('open!');
});

app.use(authMiddleware);

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

function compare(a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }

  return comparison;
}

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next(); 
}

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});

app.put('/recipes/:id', validateName, function(req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', function(req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});
  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, waitTime, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/recipes', function(req, res) {
  res.json(recipes.sort(compare));
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price >= minPrice);
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function(req,res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if(!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  res.status(200).json(recipe);
});

app.post('/drinks', validateName, function(req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!'});
})

app.get('/drinks', function(req, res) {
  res.json(drinks.sort(compare));
});

app.get('/drinks/search', function(req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Drink not found!'});
  res.status(200).json(drink);
})

app.put('/drinks/:id', validateName, function(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});
  drinks.splice(drinkIndex, 1);

  res.status(204).end();
})

app.all('*', function(req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001');
});