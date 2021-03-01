const peca = "caVALO".toLowerCase();

switch (peca) {
  case "peão":
    console.log("1 para frente");
    break;
  case "torre":
    console.log("n para frente, trás ou para os lados");
    break;
  case "cavalo":
    console.log("Em L (3:1)");
    break;
  case "bispo":
    console.log("n nas diagonais");
    break;
  case "rainha":
    console.log("n para frente, trás, laterais ou diagonais");
    break;
  case "rei":
    console.log("1 em qualquer direção");
    break;
  default:
    console.log("Erro! Peça não identificada.");
  
}