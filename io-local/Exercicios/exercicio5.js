const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function writeFiles() {
  const makePromises = array.map((entry, index) => {
    fs.writeFile(`./Exercicios/file${index + 1}.txt`, entry);
  });
  await Promise.all(makePromises);

  const filenames = [
    './Exercicios/file1.txt',
    './Exercicios/file2.txt',
    './Exercicios/file3.txt',
    './Exercicios/file4.txt',
    './Exercicios/file5.txt',
  ];

  const fileContents = await Promise.all(
    filenames.map((filename) => fs.readFile(filename, 'utf8'))
  );

  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./Exercicios/fileAll.txt', newFileContent);
}

writeFiles();