/*Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
*/

let n = 9;
let middle = (n + 1) / 2;
//cria variáveis de controle
let controlLeft = middle;
let controlRight = middle;

let symbol = '*';
//define quantas linhas serão impressas
for (let line = 1; line <= middle; line += 1) {
  //zera a saída
  let outputLine = '';
  //começa a construir a linha
  for (let col = 1; col <= n; col += 1) {
    //compara a posição na coluna com as variáveis de controle
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += '_';
    }
  }
  //incrementa/decrementa as variáveis de controle, abrindo o meio da linha da pirâmide
  controlLeft -= 1;
  controlRight += 1;
  //imprime a linha
  console.log(outputLine);
}