function positivoNegativoNeutro(number) {
  if (typeof(number) !== 'number') {
    return 'o valor deve ser um número';
  }
  switch (true) {
    case (number > 0):
      return 'positivo'
    case (number < 0):
      return 'negativo'
    default:
      return 'neutro';
  };
};

module.exports = positivoNegativoNeutro;