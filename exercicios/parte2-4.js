const skills = ['HTML', 'JavaScript', 'CSS'];

function transform(string) {
  const array = [];
  for (const letter of 'Tryber x aqui!') {
    (letter === 'x') ? array.push(string) : array.push(letter);
  }
  return array.join('');
}

function showSkills(param) {
  const array = [`${param} Minhas principais habilidades são:
  `];
  for (let item of skills) {
    array.push(`${item};
  `);
  }
  console.log(array.join(''));
}

showSkills(transform('Thiago Marchini'));

