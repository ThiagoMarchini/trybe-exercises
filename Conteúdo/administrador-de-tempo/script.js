function changeBackgroundID(element, color) {
  document.getElementById(element).style.backgroundColor = color;
}

function changeBackgroundClass(element, color) {
  document.getElementsByClassName(element)[0].style.backgroundColor = color;
}

function changeBackgroundQueryAll(element, color){
  let list = document.querySelectorAll(element);
  for (index = 0; index < list.length; index += 1) {
    document.querySelectorAll(element)[index].style.backgroundColor = color;
  }
}

changeBackgroundID('header-container', 'green');

changeBackgroundClass('emergency-tasks','orange');
changeBackgroundClass('no-emergency-tasks', 'cyan');

changeBackgroundQueryAll('.emergency-tasks h3', 'red');
changeBackgroundQueryAll('.no-emergency-tasks h3', 'blue');