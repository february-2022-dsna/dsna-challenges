function multiplesOfN(n, max = 50) {
  const numbers = [];
  // initializer ; comparison ; post-loop state change
  for (let i = n; i <= max; i += n) {
    numbers.push(i);
  }
  return numbers;
}

test('multiples of n', () => {
  expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});

function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.push('FizzBuzz');
    } else if (i % 3 === 0) {
      list.push('Fizz');
    } else if (i % 5 === 0) {
      list.push('Buzz');
    } else {
      list.push(i);
    }
  }
  return list;
}

test('returns fizz and buzz as multiples of 3 and 5', () => {
  expect(fizzBuzz()).toEqual[
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
