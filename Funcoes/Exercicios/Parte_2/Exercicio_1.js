// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Create a function to verify if a string is a palindrome, returning true or false.

function verifyPalindrome(word) {
  for (var letter in word) {
    let middle = word.length/2;
    let end = word.length;
    for (let index = 0; index < middle; index += 1){
      if (word[index] == word[(word.length - index - 1)]) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
console.log(verifyPalindrome("arara"));
console.log(verifyPalindrome("desenvolvedor"));