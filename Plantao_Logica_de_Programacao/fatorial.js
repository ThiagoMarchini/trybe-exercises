// A partir de N exiba o fatorialde 0 até N
// definições:
// 0! = 1
// 1! = 1 * 0! = 1
// 2! = 2 * 1! = 2
let fat = [1];
n = 4;

for (let index = 1; index < n; index += 1){
  let result = index * fat[index-1];
  fat.push(result);
}
console.log(fat);