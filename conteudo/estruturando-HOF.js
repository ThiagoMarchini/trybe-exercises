// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// --------------------------------------------------------------------------

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };
// 
// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// --------------------------------------------------------------------------

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// --------------------------------------------------------------------------

// const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

// const greaterThan10 = greaterThan(10);
// console.log(greaterThan10(15));
// // true

// --------------------------------------------------------------------------

const wakeUp = () => console.log('Acordando!');
const coffee = () => console.log('Bora tomar café!');
const sleep = () => console.log('Bora dormir!');

const doingThings = (functionName) => functionName();

doingThings(sleep);