const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Finds the more than one most frequently used char(s)', () => {
  expect(maxChar('aaabbbccdd')).toEqual('a,b');
  expect(maxChar('112233445555667777889999')).toEqual('5,7,9');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
