/*6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.*/

let number = 17;
let prime = true;

for( let index = 2; index < number; index += 1){
  var rest = number % index;
  console.log(rest);
  if (rest == 0) {
    prime = false;
  }
}
console.log(prime);