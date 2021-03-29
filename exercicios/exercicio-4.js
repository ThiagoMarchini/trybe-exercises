// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const check = (correct, answers) => {
  let count = 0;
  for (index = 0; index < correct.length; index += 1) {
    if (correct[index] === answers[index]) {
      count += 1;
    } else if (answers[index] === 'N.A') {
    } else { count -= 0.5}
  }
  return count;
}

const countPoints = (correct) => (answers) => (funcao) => {
  return console.log(funcao(correct, answers));
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

countPoints(rightAnswers)(studentAnswers)(check);