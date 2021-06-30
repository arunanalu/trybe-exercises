const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acumulador, elemento) => acumulador + elemento.split('').reduce((acc, el) => {
    if (el === 'a' || el === 'A') return acc + 1
    return acc
  }, 0), 0)
}

assert.deepStrictEqual(containsA(), 20);