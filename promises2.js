// Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));