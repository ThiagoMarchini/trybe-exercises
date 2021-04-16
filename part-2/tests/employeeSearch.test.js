const employeeSearch = require('../employeeSearch');

describe('Testes da função de busca por empregados', () => {
  test('Retorno com id e nome', () => {
    expect(employeeSearch('8579-6', 'firstName')).toEqual('8579-6 Ana');
  });
  test('Retorno com id e sobrenome', () => {
    expect(employeeSearch('5569-4', 'lastName')).toEqual('5569-4 Jobs');
  });
  test('Busca por ID inexistente', () => {
    expect(employeeSearch('1563214', 'lastName')).toEqual('ID não identificada');
  });
  test('Busca por informação inexistente', () => {
    expect(employeeSearch('8579-6', 'middleName')).toEqual('Informação indisponível');
  });
});