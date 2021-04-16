// Compare dois objetos (JSON) para verificar se são idênticos ou não

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

describe('Object equality tests', () => {
  test('Obj1 === Obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  test('Obj2 !== Obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
  test('Obj1 !== Obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
});