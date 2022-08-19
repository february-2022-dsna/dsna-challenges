const { expect } = require('expect');

function sumAll(n) {
  if (n === 0) return 0;

  return n + sumAll(n - 1);
}

test.skip('sumAll recursive', () => {
  expect(sumAll(5)).toBe(15);
});

function fizzBuzz(n) {
  const results = [];

  function recurse(n) {
    if (n === 0) return;
    let value = '';
    if (n % 3 === 0) value = 'Fizz';
    if (n % 5 === 0) value = 'Buzz';
    results.push(value || n);
    recurse(n - 1);
  }
  recurse(n);
  return results.reverse();
}

test.skip(' fizz buzz recursion', () => {
  expect(fizzBuzz(16)).toEqual[
    (1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16)
  ];
});
