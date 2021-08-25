const fs = require('fs').promises;
const readline = require('readline');

function questionUser(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function readFile() {
  let fileName = await questionUser('Digite o nome do arquivo para leitura: ');
  fileName = './Bonus/' + fileName;

  fs.readFile(fileName, 'utf-8')
    .then((fileContent) => console.log(fileContent))
    .catch((err) => console.error(`Não foi possível abrir o arquivo: ${err.message}`));
}

async function changeWord() {
  let fileName = await questionUser('Digite o nome do arquivo para leitura: ');
  fileName = './Bonus/' + fileName;

  const originalContent = await fs.readFile(fileName, 'utf-8')
    .catch(err => {
      console.error(`Não foi possível ler o arquivo: ${err}`);
      return false;
    });
  if (!originalContent) return;
  
  const wordToReplace = await questionUser('Digite a palavra a ser substituída: ');
  const replacement = await questionUser('Digite a nova palavra: ');
  const newContent = originalContent.replace(new RegExp(wordToReplace, 'g'), replacement);
  console.log(`Novo conteúdo:\n${newContent}`);

  let newFileName = await questionUser('Digite o nome para o novo arquivo: ');
  newFileName = './Bonus/' + newFileName;
  fs.writeFile(newFileName, newContent)
    .then(() => console.log('Arquivo salvo com sucesso!'))
    .catch((err) => console.error(`Não foi possível salvar o arquivo: ${err.message}`));
}

changeWord();