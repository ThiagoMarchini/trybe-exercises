//dada a posição da rainha e de uma outra peça num tabuleiro de xadrez, verifica se a jogada da rainha para atacar a peça é válida.
const queenLinePosition = 4;
const queenColumnPosition = 4;

const pieceLinePosition = 7;
const pieceColumnPosition = 7;

let control = false;

// verifica a linha e a coluna
if(pieceLinePosition == queenLinePosition || pieceColumnPosition == queenColumnPosition){
  control = true;
}

//verifica a diagonal superior direita
for (var supRight = 1; supRight < 8; supRight += 1){
  var queenLine = queenLinePosition + supRight;
  var queenColumn = queenColumnPosition + supRight;
  if(pieceColumnPosition == queenColumn && pieceLinePosition == queenLine){
    if(queenColumn <= 8 && queenLine <= 8){
      control = true;
    }
  }
}

//verifica a diagonal inferior esquerda
for (var infLeft = 1; infLeft < 8; infLeft += 1){
  var queenLine = queenLinePosition - infLeft;
  var queenColumn = queenColumnPosition - infLeft;
  if(pieceColumnPosition == queenColumn && pieceLinePosition == queenLine){
    if(queenColumn > 0 && queenLine > 0){
      control = true;
    }
  }
}

//verifica a diagonal superior esquerda
for (var supLeft = 1; supLeft < 8; supLeft += 1){
  var queenLine = queenLinePosition - supLeft;
  var queenColumn = queenColumnPosition + supLeft;
  if(pieceColumnPosition == queenColumn && pieceLinePosition == queenLine){
    if(queenColumn < 9 && queenLine > 0){
      control = true;
    }
  }
}

//verifica a diagonal inferior direita
for (var infRight = 1; infRight < 8; infRight += 1){
  var queenLine = queenLinePosition + infRight;
  var queenColumn = queenColumnPosition - infRight;
  if(pieceColumnPosition == queenColumn && pieceLinePosition == queenLine){
    if(queenColumn > 0 && queenLine < 9){
      control = true;
    }
  }
}

console.log(control);