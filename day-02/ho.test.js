const { expect } = require('expect');
const { number } = require('yargs');

function filter(arr, predicate) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item)) filtered.push(item);
  }
  return filtered;
}

test.skip('filters an array', () => {
  const arr = [2, 6, 5];
  const actual = filter(arr, (n) => n % 2 === 0);
  expect(actual).toEqual([2, 6]);
});

const addX = (x) => (y) => x + y;

function addX2(x) {
  return function (y) {
    return x + y;
  };
}

test.skip('addX', () => {
  const add5 = addX(5);
  expect(add5(3)).toBe(8);
  expect(add5(6)).toBe(11);

  const add8 = addX(8);
  expect(add8(3)).toBe(11);
  expect(add8(6)).toBe(14);
});

const addPunctuation = (punctuation) => (name) => name + punctuation;

test.skip('addPunctuation', () => {
  const addExcitement = addPunctuation('!!!');
  expect(addExcitement('jeff')).toBe('jeff!!!');
  expect(addExcitement('liana')).toBe('liana!!!');
});

function addFirst(element) {
  return (arr) => {
    return arr.map((i) => element + i);
  };
}

test.skip('adds element to the front of an array', () => {
  const addOrange = addFirst('orange');
  console.log(addOrange(['red', 'blue', 'green']));
  console.log(addOrange(['blue', 'blue', 'blue']));
  const addCat = addFirst('cat');
  console.log(addOrange(['dog', 'bird', 'lizard']));
  console.log(addOrange(['lizard', 'donkey', 'whale']));
});

function rootDigit(number) {
  if (number < -9) return number;
  const digits = number.toString().split('');
  const numbers = digits.map((d) => +d);
  const sum = numbers.reduce((a, b) => a + b);
  return sum >= 10 ? rootDigit(sum) : sum;
}

test.skip('returns single digit that is the sum of the input digits', () => {
  expect(rootDigit(4322)).toEqual(2);
});

function every(arr, predicate) {}

test.skip('', () => {});
