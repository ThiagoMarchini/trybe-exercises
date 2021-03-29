const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  const max = dragon.strength;
  const min = 15;
  let damage = Math.round(Math.random() * max);
  if (damage < min) {
    while (damage < min) {
      damage = Math.round(Math.random() * max);
    }
  }
  return damage;
};

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  const max = (warrior.strength * warrior.weaponDmg);
  const min = warrior.strength;
  let damage = Math.round(Math.random() * max);
  if (damage < min) {
    while (damage < min) {
      damage = Math.round(Math.random() * max);
    }
  }
  return damage;
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamage = () => {
  const min = mage.intelligence;
  const max = (mage.intelligence * 2);
  let damage = Math.round(Math.random() * max);
  if (damage < min) {
    while (damage < min) {
      damage = Math.round(Math.random() * max);
    }
  }
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  }
  return damage;
}

const manaRemaining = () => {
  const remainingMana = mage.mana - 15;
  if (remainingMana < 0) {
    return mage.mana;
  } else {
    return remainingMana;
  }
};

const mageReturn = () => {
  const mageObject = {
    damage: mageDamage(),
    mana: manaRemaining(),
  }
  return mageObject;
}

// ----------- PARTE 2 --------------
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por definição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 - Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage;
    warrior.damage = damage;
    dragon.healthPoints -= damage;
},
  mageTurn: (mageReturn) => {
    const mageObject = mageReturn;
    mage.damage = mageObject.damage;
    dragon.healthPoints -= mageObject.damage;
    mage.mana = mageObject.mana;
  },
  dragonTurn: (dragonDamage) => {
    const damage = dragonDamage;
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },
  result: () => {
    gameActions.warriorTurn(warriorDamage());
    gameActions.mageTurn(mageReturn());
    gameActions.dragonTurn(dragonDamage());
    return battleMembers;
  }
}

console.table(gameActions.result());
