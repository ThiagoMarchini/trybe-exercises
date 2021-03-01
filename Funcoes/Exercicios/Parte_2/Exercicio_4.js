//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Create a function tha receives an array on manes and returns the biggest one.

function biggestName(array) {
  let biggest = array[0].length;
  let name;
  for (let key = 1; key < array.length; key += 1){
    if (array[key].length > biggest) {
      biggest = array[key].length;
      name = array[key];
    }
  }
  return name;
}

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestName(test));