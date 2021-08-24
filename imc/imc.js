const readline = require('readline-sync');

const peso = readline.questionFloat("Qual é a sua altura?\n");

const altura = readline.questionFloat("Qual é o seu peso?\n");

const imc = (peso / (altura * altura)).toFixed(1);

console.log(`Seu imc é: ${imc} e é considerado `);

switch (true) {
  case (imc < 18.5):
      console.log("Abaixo do peso (magreza)");
    break;
  case ((18.5 < imc) && (imc < 24.9)):
      console.log("Peso normal");
    break;
  case ((25.0 < imc) && (imc < 29.9)):
      console.log("Acima do peso (sobrepeso)");
    break;
  case ((30.0 < imc) && (imc < 34.9)):
      console.log("Obesidade grau I");
    break;
  case ((35.0 < imc) && (imc < 39.9)):
      console.log("Obesidade grau II");
    break;
  default:
      console.log("Obesidade grau III ou IV");
    break;
}
