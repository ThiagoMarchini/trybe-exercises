let status = "";

switch (status) {
  case "approved":
    console.log("Parabéns, você foi aprovado!");
    break;
  case "list":
    console.log("Você está na nossa lista de espera.");
    break;
  case "failed":
    console.log("Você foi reprovado.");
    break;
  default:
    console.log("Não se aplica");
    break;
}