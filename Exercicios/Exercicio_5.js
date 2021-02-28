//Utilizando for , descubra qual o largest valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let largest = 0;
let index = 0;

for(index = 0; index < numbers.length; index++){
  if(largest < numbers[index]){
    largest = numbers[index];
  }
}
console.log(largest);