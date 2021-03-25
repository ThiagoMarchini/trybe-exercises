const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let returnArray = [];

  for (const person in people) {
    returnArray.push(`Hello ${people[person]}`);
  }
  return returnArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const expected = greetPeople(parameter);

assert.deepStrictEqual(expected, result, 'O resultado foi diferente do esperado para a função');