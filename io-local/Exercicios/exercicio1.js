function addAndMultiply(num1, num2, num3) {
  if((!Number.isInteger(num1)) || (!Number.isInteger(num2)) || (!Number.isInteger(num3))) {
    throw new Error('Informe apenas números');
  };
  const resultado = ((num1 + num2) * num3);
  if (resultado < 50) {
    throw new Error('Valor muito baixo');
  }
  return resultado;
};

module.exports = addAndMultiply;
