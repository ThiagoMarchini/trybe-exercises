// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
const createArray = () => {
  const array = [];
  for (let index = 0; index < 10; index += 1) {
    let number = Math.ceil(Math.random() * 50);
    array.push((number * number));
  }
  return array;  
}


const promise = new Promise((resolve, reject) => {
  const array = createArray();
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  if (sum < 8000) {
    resolve(sum);
  }
  reject(sum);
})
  .then(sum => {
    const division = [2, 3, 5, 10];
    const result = division.map((number) => Math.round(sum / number));
    console.log(result);
    new Promise((resolve, reject) => {
      const sum2 = result.reduce((acc, curr) => acc + curr, 0);
      resolve(sum2);
    })
      .then((sum2) => console.log(sum2))
      .catch((error) => console.log(error));
  })
  .catch (sum => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));