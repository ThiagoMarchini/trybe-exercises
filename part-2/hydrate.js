function hydrate(string) {
  const numbers = [...string.replace(/\D/g, '')];
  const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0);
  if (sum > 1) { return `${sum.toString()} copos de água` };
  return `${sum.toString()} copo de água`;
}

module.exports = hydrate;