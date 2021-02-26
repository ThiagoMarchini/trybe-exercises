//3- Agora inverta o lado do triângulo. Por exemplo

let n = 5;
let b = '';

for(let index = 1; index <= n; index += 1){
  b = "";
  for (let index2 = (n-index); index2 > 0; index2 -= 1){
    b += " ";
  }
  for(let index3 = index; index3 > 0; index3 -= 1){
  b += "*";
  }
  console.log(b);
}