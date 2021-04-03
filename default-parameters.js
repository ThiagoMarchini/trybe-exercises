const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!

const greeting2 = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting2(); // // Welcome usuário!

const multiply = (number = 1, value = 1) => {
  return number * value;
};

console.log(multiply(8));