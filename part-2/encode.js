// função auxiliar do Encode
function findVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < vowels.length; index += 1) {
    if (char === vowels[index]) {
      return index + 1;
    }
  }
}

function encode(string) {
  let answer = '';
  for (let letter in string) {
    if (findVowel(string[letter])) {
      answer += findVowel(string[letter]);
    } else {
      answer += (string[letter]);
    }
  }
  return answer;
}

module.exports = encode;