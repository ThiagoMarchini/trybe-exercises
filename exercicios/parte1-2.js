// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescent = (array) => {
  let data = array;
  for (let index = 0; index < data.length; index += 1) {
    for (let index = 1; index < data.length; index += 1) {
      if (data[index - 1] > data[index]) {
        let aux = data[index];
        data[index] = data[index - 1];
        data[index - 1] = aux;
      }
    }
  }
  return `Os números ${data} se encontram ordenados de forma crescente!`;
}

// Seu código aqui.

console.log(crescent(oddsAndEvens));

const sortArray = (array) => array.sort((a, b) => (a-b));
console.log(sortArray(oddsAndEvens));