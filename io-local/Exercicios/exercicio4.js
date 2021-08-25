const fs = require('fs').promises;

function printAllSimpsons() {
  fs.readFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    .then((simpsons) => {
      return simpsons.map(({ id, name }) => `${id} - ${name}`);
    })
    .then((strings) => {
      strings.forEach((element) => console.log(element));
    });
}

function printOneSimpson(id) {
  fs.readFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    .then((simpsons) => {
      return simpsons.map(({ id, name }) => `${id} - ${name}`);
    })
    .then((strings) => {
      console.log(strings[id - 1]);
    });
}

function removeTwoSimpsons() {
  fs.readFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    .then((simpsons) => {
      simpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
      return simpsons;
    })
    .then((result) => {
      fs.writeFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsons2.json', JSON.stringify(result), { flag: 'w'});
    });
}

function simpsonsFamily() {
  fs.readFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    .then((simpsons) => {
      simpsons = simpsons.filter((entry, index) => index < 4);
      return simpsons;
    })
    .then((result) => {
      fs.writeFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsonsFamily.json', JSON.stringify(result), { flag: 'w'});
    });
}

function addNelson() {
  fs.readFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    .then((simpsons) => {
      simpsons.push({ "id": "8","name": "Nelson Muntz" });
      return simpsons;
    })
    .then((result) => {
      fs.writeFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsonsFamily.json', JSON.stringify(result));
    });
}

function replaceNelson() {
  fs.readFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    simpsons.filter((entry) => entry.id !== 8);
    return simpsons;
  })
  .then((simpsons) => {
    simpsons.push({ "id": "5","name": "Maggie Simpson" });
  })
  .then((result) => {
    fs.writeFile('/home/thiagomarchini/trybe-exercises/io-local/Exercicios/simpsonsFamily.json', JSON.stringify(result));
  });
}