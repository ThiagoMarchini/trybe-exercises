//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
//Create a function that receives two strings, word and ending. Verify if the string ending is te end of the string word. Consider ending always smaller than word.

function compareWord(string1, string2) {
  for (let index = 1; index < string2.length; index += 1){
    if (string1[(string1.length - index)] != string2[(string2.length - index)]) {
      return false;
    }
    else {
      return true;
    }
  }
}

word = "banana";
end = "ana";
console.log(compareWord(word, end));