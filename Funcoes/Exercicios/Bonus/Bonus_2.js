// Silly sum. ex: 29 + 28 = 417

function add(num1, num2) {
  let numbers1 = (""+num1).split('').map(Number);
  let numbers2 = (""+num2).split('').map(Number);
  let resultArray = [];
  if (numbers1.length > numbers2.length) {
    numbers1 = numbers1.reverse();
    numbers2 = numbers2.reverse();
    for (let index = 0; index < numbers1.length; index += 1){
      if(isNaN(numbers2[index])) {
        resultArray.push(numbers1[index]);
      }
      else {
        resultArray.push(numbers1[index] + numbers2[index]);
      }
    }
  }

  else if (numbers2.length > numbers1.length) {
    numbers1 = numbers1.reverse();
    numbers2 = numbers2.reverse();
    for (let index = 0; index < numbers2.length; index += 1){
      if(isNaN(numbers1[index])) {
        resultArray.push(numbers2[index]);
      }
      else {
        resultArray.push(numbers1[index] + numbers2[index]);
      }
    }
  }

  else {
    for (let index = numbers1.length - 1; index >= 0; index -= 1){
      resultArray.push(numbers1[index] + numbers2[index]);
    }
  }
  resultArray.reverse();
  return parseInt(resultArray.join(''));
}

console.log(add(29,2228));