const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Testando o retorno em uppercase', done => {
  uppercase('teste', (result) => {
    expect(result).toBe('TESTE');
    done();
  });
})