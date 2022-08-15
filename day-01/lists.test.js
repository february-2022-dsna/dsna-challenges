// ------------------------------ FIZZBUZZ -----------------

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else arr.push(i);
  }
  return arr;
}

// TIME COMPLEXITY - O(n) -- simply searching through arr

test('fizzbuzz func', () => {
  const arr = fizzBuzz(16);
  expect(arr).toEqual([
    1,
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
    16,
  ]);
});

// ------------------------------ REVERSE SENTENCE WORDS -----------------

function reverseWords(sentence) {
  return sentence.split('').reverse().join('').split(' ').reverse().join(' ');
}

// TIME COMPLEXITY - O(n) -- ?

test('reverse each word in a sentence', () => {
  const output = reverseWords('alchemy rocks gold');
  expect(output).toEqual('ymehcla skcor dlog');
});
