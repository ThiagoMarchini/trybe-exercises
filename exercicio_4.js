//faça uma pirâmide com asteriscos na base

let n = 5;
let b = '';

for(let index = 1; index <= n; index += 2){
  b = "";
  for (let index2 = (n-index); index2 > 0; index2 -= 2){
    b += " ";
  }
  for(let index3 = index; index3 > 0; index3 -= 1){
  b += "*";
  }
  console.log(b);
}