// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const strings = require('./strings');

test('Changing implementation of stringToUppercase to lowercase', () => {
  strings.stringToUppercase = jest
    .fn()
    .mockImplementation((string) => string.toLowerCase());
  
  expect(strings.stringToUppercase('TEste')).toBe('teste');
});

test('Changing implementation of firstLetter to return last letter', () => {
  strings.firstLetter = jest
    .fn()
    .mockImplementation((string) => string[string.length - 1]);
  
  expect(strings.firstLetter('xablau')).toBe('u');
});

test('Changing implementation of concatenate to concat three strings', () => {
  strings.concatenate = jest
    .fn()
    .mockImplementation((string1, string2, string3) => string1.concat(string2, string3));
  
  expect(strings.concatenate('aa', 'bb', 'cc')).toBe('aabbcc');
});
