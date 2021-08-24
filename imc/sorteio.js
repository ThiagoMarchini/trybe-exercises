const readline = require('readline-sync');

function runGame() {
  const numero = readline.questionInt("Digite seu palpite para um número inteiro entre 0 e 10.\n");
  const randomNumber = parseInt(Math.random() * 10);

  if (numero == randomNumber) {
    console.log('Parabéns, você acertou!\n');
  } else {
    console.log(`Não foi dessa vez.\nO número correto era: ${randomNumber}\n`);
  }
  const jogarDeNovo = readline.question('Deseja jogar novamente?\n(Digite S para sim e qualquer outro caractere para não)');
  
  if(jogarDeNovo !== 's') {
    return console.log('Até a próxima!');
  }

  runGame();
}

runGame();
