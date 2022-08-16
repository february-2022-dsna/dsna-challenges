// ------------------------------ 1 - DIGIT SUM ROOT -----------------

function rootDigit(n) {
  const digits = n.toString().split('');
  console.log('digits', digits);
  const numbers = digits.map((d) => +d);
  console.log('numbers', numbers);
  const sum = numbers.reduce((a, b) => a + b);
  console.log('sum', sum);
  if (numbers.toString().length === 1) {
    return sum;
  }
  return rootDigit(sum);
}

//TIME COMPLEXITY -

test.only('digits sum root', () => {
  const firstOutput = rootDigit(123);
  expect(firstOutput).toEqual(6);
});
