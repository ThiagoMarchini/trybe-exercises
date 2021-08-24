const readline = require('readline-sync');

const scripts = [
  { name: 'IMC', script: './imc.js' },
  { name: 'Velocidade', script: './velocidade.js' },
  { name: 'Sorteio', script: './sorteio.js' },
  { name: 'Fatorial', script: './fatorial.js' },
  { name: 'Fibonacci\n', script: './fibonacci.js' },
];

// Cria uma lista numerada
let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);

// Adiciona uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script:');

// Junta tudo numa string:
mensagem = mensagem.join('\n');

// Recebe o número digitado e subtrai 1 para corresponder ao número correto do Array scripts
const scriptNumber = readline.questionInt(mensagem) - 1;

const chosenScript = scripts[scriptNumber];

// Se a opção digitada não existe, sai
if (!chosenScript) return console.log('Opção inválida. Saindo!');

// Chamamos o script selecionado
require(chosenScript.script);