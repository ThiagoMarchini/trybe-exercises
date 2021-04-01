const numbers = [50, 85, -30, 3, 15];

// Achando o maior valor com o for
let getBigger = (numbers) => {
  let bigger = numbers[0];
  for (let number of numbers) {
    if (number > bigger) {
      bigger = number;
    }
  }
  return bigger;
}
console.log(getBigger(numbers));

// achando o maior valor com o reduce
getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

let bigger = numbers.reduce(getBigger, 0);
console.log(bigger);