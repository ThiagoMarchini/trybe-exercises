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

async function main() {
  const fileName = await questionUser('Digite o nome do arquivo para leitura: ');

  const originalContent = await fs.readFile(fileName, 'utf-8')
    .catch(err => {
      console.error(`Não foi possível ler o arquivo: ${err}`);
      return false;
    });
  if (!originalContent) return;
}

main();