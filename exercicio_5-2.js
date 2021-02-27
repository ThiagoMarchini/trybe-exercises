/*
n = 7

   *
  * *
 *   *
*******
*/

let n = 11;
//defines the middle of the line, and the height of the pyramid
let middle = (n+1)/2;
let height = (n+1)/2;
//defines the position os the asterisk, starting in the middle for the first line
let asteriskLeft = middle;
let asteriskRight = middle;
let asterisk = "*";
//defines how many lines will be printed, and loops trough each one:
for (line = 1; line <= height; line +=1){
  let lineOutput = '';
  //start writing the line, passing trough each column position:
  for (let column = 1; column <= n; column += 1){
    //if the column position is ans asterisk position, or the last line, fill it with an asterisk
    if (column == asteriskLeft || column == asteriskRight || line == height){
      lineOutput += asterisk;
    }
    else {
      lineOutput += " "
    }
  }
  //increments or decrements the asterisk position, according to each line
  asteriskLeft -= 1;
  asteriskRight += 1;
  console.log(lineOutput);
}