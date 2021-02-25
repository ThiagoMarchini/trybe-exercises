let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); //deve ser 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask); //deve retornar 'Tomar café'

let searchForLastTask = tasksList[tasksList.length-1];
console.log(searchForLastTask); //deve retornar 'Brincar com o cachorro'

tasksList.push('Fazer exercícios da Trybe');
console.log(tasksList);

tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList); // [ 'Tomar café', 'Reunião' ]
tasksList.shift();
console.log(tasksList);

tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask); // 1