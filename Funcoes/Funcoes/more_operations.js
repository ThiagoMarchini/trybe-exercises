function compare2(num1, num2){
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}

function compare3(num1, num2, num3){
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    }
    else {
      return num3;
    }
  }
  else if (num2 > num3) {
    return num2;
  }
  else {
    return num3;
  }
}

function compareSignal(num){
  let answer = '';
  if (num > 0) {
    answer = "O valor é positivo.";
  }
  else if (num < 0) {
    answer = "O valor é negativo.";
  }
  else {
    answer = "O valor é 0.";
  }
  return answer;
}

function isATriangle(angle1, angle2, angle3) {
  let sum;
  sum = (angle1 + angle2 + angle3);
  if (sum == 180) {
    return "True";
  }
  else {
    return "False";
  }
}

function chessMovements(piece){
  piece = piece.toLowerCase();

  switch (piece) {
    case "peão":
      return "1 para frente";
      break;
    case "torre":
      return "n para frente, trás ou para os lados";
      break;
    case "cavalo":
      return "Em L (3:1/1:3)";
      break;
    case "bispo":
      return "n nas diagonais";
      break;
    case "rainha":
      return "n para frente, trás, laterais ou diagonais";
      break;
    case "rei":
      return "1 em qualquer direção";
      break;
    default:
      return "Erro! Peça não identificada.";
    }
  
}

function grade(value){
  switch (true) {
    case value > 100 || value < 0:
      return "Nota inválida!";
      break;
    case value >= 90:
      return "Conceito: A";
      break;
    case value >= 80:
      return "Conceito: B";
      break;
    case value >= 70:
      return "Conceito: C";
      break;
    case value >= 60:
      return "Conceito: D";
      break;
    case value >= 50:
      return "Conceito: E";
      break;
    default:
      return "Conceito: F";
  }
}

function isThereOneEven(num1, num2, num3) {
  if ((num1 %2 == 0) || (num2 %2 == 0) || (num3 %2 == 0)){
    return "true";
  }
  else {
    return "false";
  }
}

function isThereOneOdd(num1, num2, num3) {
  if ((num1 % 2 != 0) || (num2 % 2 != 0) || (num3 % 2 != 0)){
    return "true";
  }
  else {
    return "false";
  }
}

function profit(units, cost, price) {
  if (cost < 0 || price < 0 || units < 0) {
    return "Erro! Valores de Custo, Venda, ou Unidades não podem ser menores que 0.";
  }
  let grossProfit = ((price - cost) * units);
  //return "Lucro Bruto: " + grossProfit;
  let taxPerUnit = 0.2 * cost;
  let liquidProfit = grossProfit - (taxPerUnit * units);
  return "Lucro Bruto: " + grossProfit +" | " + "Lucro líquido: " + liquidProfit;
}

function liquidSalary (grossSalary) {
  let liquidSalary;
  let payoutINSS;
  let payoutIR;

  //Desconto do INSS
  switch (true) {
    case grossSalary >= 5189.83:
      payoutINSS = 570.88;
      break;
    case 2594.93 <= grossSalary && grossSalary <= 5189.82:
      payoutINSS = grossSalary * 0.11;
      break;
    case 1556.95 <= grossSalary && grossSalary <= 2594.92:
      payoutINSS = grossSalary * 0.09;
      break;
    default:
      payoutINSS = 0;
  }

  grossSalary = grossSalary - payoutINSS;

  //desconto IR
  switch (true) {
    case grossSalary >= 4664.69:
      payoutIR = grossSalary * 0.275 - 869.36;
      break;
    case 3751.06 <= grossSalary && grossSalary <= 4664.68:
      payoutIR = grossSalary * 0.225 - 636.13;
      break;
    case 2826.66 <= grossSalary && grossSalary <= 3751.05:
      payoutIR = grossSalary * 0.15 - 354.8;
      break;
    case 1903.99 <= grossSalary && grossSalary <= 2826.65:
      payoutIR = grossSalary * 0.075 - 142.8;
      break;
    default:
      payoutIR = 0;
  }

  liquidSalary = grossSalary - payoutIR;
  return liquidSalary;
}

console.log(liquidSalary(3000.00));