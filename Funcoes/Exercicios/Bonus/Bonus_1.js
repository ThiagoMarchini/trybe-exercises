//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function convertRomanToArabic(string) {
  let romanNumbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
  }
  let input = string.toLowerCase();
  let translation = [];
  for (let index = 0; index < input.length; index += 1){
    for (let key in romanNumbers) {
      if (key == input[index]) {
        console.log("achei");
        translation.push(romanNumbers[key]);
      }
    }
  }
  result = 0;
  for (let index = 0; index < translation.length; index += 2){
    if (translation[index] < translation[index + 1]){
      result = result + (translation[index + 1] - translation[index]);
    }
    else {
      result = result + (translation[index + 1] + translation[index]);
    }
  }
  return result;
}
var xablau = "cm";
console.log(convertRomanToArabic(xablau));
