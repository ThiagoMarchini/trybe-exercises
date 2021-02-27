//dada a posição da rainha e de uma outra peça num tabuleiro de xadrez, verifica se a jogada da rainha para atacar a peça é válida.
const posicaoLinhaRainha = 4;
const posicaoColunaRainha = 4;

const posicaoLinhaPeca = 6;
const posicaoColunaPeca = 1;

let controle = false;

// verifica a linha e a coluna
if(posicaoLinhaPeca == posicaoLinhaRainha || posicaoColunaPeca == posicaoColunaRainha){
  controle = true;
}

//verifica a diagonal superior direita
for (var supDir = 1; supDir < 8; supDir += 1){
  var linhaRainha = posicaoLinhaRainha + supDir;
  var colunaRainha = posicaoColunaRainha + supDir;
  if(posicaoColunaPeca == colunaRainha && posicaoLinhaPeca == linhaRainha){
    if(colunaRainha <= 8 && linhaRainha <= 8){
      controle = true;
    }
  }
}

//verifica a diagonal inferior esquerda
for (var infEsq = 1; infEsq < 8; infEsq += 1){
  var linhaRainha = posicaoLinhaRainha - infEsq;
  var colunaRainha = posicaoColunaRainha - infEsq;
  if(posicaoColunaPeca == colunaRainha && posicaoLinhaPeca == linhaRainha){
    if(colunaRainha > 0 && linhaRainha > 0){
      controle = true;
    }
  }
}

//verifica a diagonal superior esquerda
for (var supEsq = 1; supEsq < 8; supEsq += 1){
  var linhaRainha = posicaoLinhaRainha - supEsq;
  var colunaRainha = posicaoColunaRainha + supEsq;
  if(posicaoColunaPeca == colunaRainha && posicaoLinhaPeca == linhaRainha){
    if(colunaRainha < 9 && linhaRainha > 0){
      controle = true;
    }
  }
}

//verifica a diagonal inferior direita
for (var infDir = 1; infDir < 8; infDir += 1){
  var linhaRainha = posicaoLinhaRainha + infDir;
  var colunaRainha = posicaoColunaRainha - infDir;
  if(posicaoColunaPeca == colunaRainha && posicaoLinhaPeca == linhaRainha){
    if(colunaRainha > 0 && linhaRainha < 9){
      controle = true;
    }
  }
}

console.log(controle);