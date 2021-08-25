const addAndMultiply = require('./exercicio1');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

try {
  const resultado = addAndMultiply(num1, num2, num3);
  console.log(resultado);
} catch (err) {
  console.log(err.message);
}
