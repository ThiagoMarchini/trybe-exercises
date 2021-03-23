let clickCounter = 0;

document.getElementById('button').addEventListener('click', () => {
  clickCounter += 1;
  document.querySelector('span').innerText = clickCounter;
})