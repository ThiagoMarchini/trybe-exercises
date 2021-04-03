// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
// Dica: use parâmetro rest.

const assert = require('assert');

const sum = (...args) => {
    return args.reduce(((acc = 0, curr = 0) => acc + curr), 0);
} 

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);