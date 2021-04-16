function translateNumbers(int) {
  let table = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (let key in table) {
    if (int === key) {
      return table[key];
    }
  }
}

function decode(string) {
  let answer = '';
  for (let letter in string) {
    if (translateNumbers(string[letter])) {
      answer += translateNumbers(string[letter]);
    } else {
      answer += (string[letter]);
    }
  }
  return answer;
}
module.exports = decode;
