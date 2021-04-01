let numbers = [32, 15, 3, 2, -5, 56, 10];

let sumNumbers = 0;
sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

let getSum = (result, number) => result + number;
sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

const collection = [1, 2, 3, 4, 5];

getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

// O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função . Veja a seguir, será usado o último exemplo dado da soma dos números:

numbers = [32, 15, 3, 2, -5, 56, 10];

getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123