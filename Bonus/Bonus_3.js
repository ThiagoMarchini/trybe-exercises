//Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada value do novo array deverá ser igual ao value correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro value do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro value) e 9 (value seguinte). Já o segundo value do novo array deverá ser 27, pois é a multiplicação de 9 (segundo value) e 3 (value seguinte), e assim por diante. Caso não haja próximo value, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplied = [];

for (let index = 0; index < numbers.length-1; index++){
  let value = numbers[index] * numbers[index+1];
  multiplied.push(value);
}
multiplied.push(numbers[numbers.length-1]*2);
console.log(multiplied);
