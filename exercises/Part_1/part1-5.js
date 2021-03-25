const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};


// Compare dois objetos (JSON) para verificar se são idênticos ou não
const compareObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const values1 = Object.values(object1);
  const keys2 = Object.keys(object2);
  const values2 = Object.values(object2);
  if ((keys1 == keys2) && (values1 == values2)) {return true};
  return false;
}

// Comparando objeto 1 e 2, esperado true
assert.deepStrictEqual(compareObjects(obj1, obj2), false, 'Ops, os objetos 1 e 2 são iguais');

// Comparando objeto 1 e 3, esperado false
assert.deepStrictEqual(compareObjects(obj1, obj3), false, 'Ops, os objetos 1 e 3 são iguais');

// Comparando objeto 2 e 3, esperado false
assert.deepStrictEqual(compareObjects(obj2, obj3), false, 'Ops, os objetos 2 e 3 são iguais');
