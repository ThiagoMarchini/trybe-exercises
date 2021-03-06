function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// -------------------- EXERCÍCIO 1 ----------------------------
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const monthListItem = document.createElement('li');
    monthListItem.innerHTML = days;
    monthListItem.className = 'day';
    const holidays = [24, 25, 31];
    for (const index2 of holidays) {
      if (index2 === dezDaysList[index]) {
        monthListItem.className += ' holiday';
      }
    }
    // if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    //   monthListItem.className += ' holiday';
    // }
    const fridays = [4, 11, 18, 25];
    for (const index3 of fridays) {
      if (index3 === dezDaysList[index]) {
        monthListItem.className += ' friday';
      }
    }
    monthDaysList.appendChild(monthListItem);
  };
}

createDaysOfTheMonth();

// -------------------- EXERCÍCIO 2 ----------------------------

function createButton (text) {
  let element = document.createElement('button');
  element.innerText = text;
  element.id = "btn-holiday";
  btnDiv = document.querySelector(".buttons-container");
  btnDiv.appendChild(element);
}

createButton('Feriados');

// -------------------- EXERCÍCIO 3 ----------------------------
function getClickHoliday() {
  let button = document.getElementById('btn-holiday');
  let comparsion = document.querySelector(".holiday");
  
  button.addEventListener("click", function () {
    let holidays = document.querySelectorAll(".holiday");

    if (comparsion.style.backgroundColor == "yellow") {
      let holidays = document.querySelectorAll(".holiday");
      for (const day of holidays) {
        day.style.backgroundColor = "rgb(238,238,238)";
      }
    } else {
      for (const day of holidays) {
        day.style.backgroundColor = "yellow";
      }
    }
  });
};
getClickHoliday();
// -------------------- EXERCÍCIO 4 ----------------------------

function createButton2 (text) {
  let element = document.createElement('button');
  element.innerText = text;
  element.id = "btn-friday";
  btnDiv = document.querySelector(".buttons-container");
  btnDiv.appendChild(element);
}

createButton2('Sexta-feira');

// -------------------- EXERCÍCIO 5 ----------------------------
function getClickFriday() {
  let button2 = document.getElementById("btn-friday");
  let comparsion2 = document.querySelector(".friday");
  let fridaysList = [4, 11, 18, 25];
  
  button2.addEventListener("click", function () {
    let fridays = document.querySelectorAll(".friday");

    if (comparsion2.innerText == "SEXTA-FEIRA!") {
      let fridays = document.querySelectorAll(".friday");
      for (let index = 0; index < fridays.length; index += 1) {
        fridays[index].innerText = fridaysList[index];
      }
    } else {
      for (const day of fridays) {
        day.innerText = "SEXTA-FEIRA!";
      }
    }
  });
};
getClickFriday();

// -------------------- EXERCÍCIO 6 ----------------------------

function zoomIn(event) {
  event.target.style.fontSize = "170%";
}

function zoomOut(event) {
  event.target.style.fontSize = '100%';
}

const ul = document.querySelector('#days');
ul.addEventListener('mouseover', zoomIn);
ul.addEventListener("mouseout", zoomOut);

// -------------------- EXERCÍCIO 7 ----------------------------

function addTask(string) {
  let div = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  text = string;
  span.innerText = string;
  div.appendChild(span);
}

addTask('cozinhar');

// -------------------- EXERCÍCIO 8 ----------------------------

function colorTask (color) {
  let newDiv = document.createElement('div');
  let div = document.querySelector('.my-tasks');

  newDiv.style.backgroundColor = color;
  newDiv.className = 'task';
  div.appendChild(newDiv);
}

colorTask('red');

// -------------------- EXERCÍCIO 9 ----------------------------

function setTaskClass () {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');

  myTask.addEventListener('click', function(event) {
    if (selectedTask.length == 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}

setTaskClass();

// -------------------- EXERCÍCIO 10 ----------------------------

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// -------------------- BÔNUS ----------------------------

function createTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Não é possível adicionar uma tarefa vazia');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

createTask();