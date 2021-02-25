//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let index = 0;

for(index = 0; index < numbers.length; index++){
  if(maior < numbers[index]){
    maior = numbers[index];
  }
}
console.log(maior);