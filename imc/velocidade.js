const readline = require('readline-sync');

const distancia = readline.questionInt("Qual é a distância, em metros?\n");

const tempo = readline.questionInt("Qual é o tempo, em segundos?\n");

const velocidade = (distancia / tempo).toFixed(2);

console.log(`A velocidade média é de ${velocidade} m/s.`);