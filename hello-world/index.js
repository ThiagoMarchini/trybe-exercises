const readLine = require('readline-sync');

// console.log('Hello, world!');

const name = readLine.question('Qual é o seu nome?\n');

const age =  readLine.questionInt('Qual é a sua idade?\n');

console.log(`Hello, ${name}! You are ${age} years old.`);