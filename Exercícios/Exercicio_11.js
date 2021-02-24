let salarioBruto = 3800.00;
let descontoINSS;
let descontoIR;

//Desconto do INSS
switch (true) {
  case (salarioBruto >= 5189.83):
    descontoINSS = 570.88;
    break;
  case (2594.93 <= salarioBruto && salarioBruto <= 5189.82):
    descontoINSS = salarioBruto * 0.11;
    break;
  case (1556.95 <= salarioBruto && salarioBruto <= 2594.92):
    descontoINSS = salarioBruto * 0.09;
    break;
  default:
    descontoINSS = 0;
}

let salarioBase = salarioBruto - descontoINSS;

//desconto IR
switch (true) {
  case (salarioBase >= 4664.69):
    descontoIR = salarioBase * 0.275 - 869.36;
    break;
  case (3751.06 <= salarioBase && salarioBase <= 4664.68):
    descontoIR = salarioBase * 0.225 - 636.13;
    break;
  case (2826.66 <= salarioBase && salarioBase <= 3751.05):
    descontoIR = salarioBase * 0.15 - 354.80;
    break;
  case (1903.99 <= salarioBase && salarioBase <= 2826.65):
    descontoIR = salarioBase * 0.075 - 142.80;
    break;
  default:
    descontoIR = 0;
}

let salarioLiquido = salarioBase - descontoIR;
console.log(salarioLiquido);
