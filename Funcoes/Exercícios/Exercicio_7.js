const nota = -10;

switch (true) {
  case nota > 100 || nota < 0:
    console.log("Nota inválida!");
    break;
  case nota >= 90:
    console.log("Conceito: A");
    break;
  case nota >= 80:
    console.log("Conceito: B");
    break;
  case nota >= 70:
    console.log("Conceito: C");
    break;
  case nota >= 60:
    console.log("Conceito: D");
    break;
  case nota >= 50:
    console.log("Conceito: E");
    break;
  default:
    console.log("Conceito: F");
}