// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (phrase) => {
  const array = phrase.split(' ');
  // const bigger = (array) => array.sort()[0];
  console.log(array.sort((a, b) => a.length-b.length)[array.length-1]);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");