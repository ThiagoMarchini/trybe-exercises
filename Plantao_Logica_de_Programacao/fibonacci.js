let fib = [0,1];
let max = 5;

for (let n = 2; n < max; n += 1){
  fib.push(fib[n-2] + fib[n-1]);
}

console.log(fib);
let out = "";
for (let index = 0; index < fib.length; index += 1){
  out = out + " " + fib[index];
}
console.log(out);