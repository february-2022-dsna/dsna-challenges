// ------------------------------ 1 - DIGIT SUM ROOT -----------------

function rootDigit(n) {
  const digits = n.toString().split(''); // O(n)
  console.log('digits', digits);
  const numbers = digits.map((d) => +d); // O(n)
  console.log('numbers', numbers);
  const sum = numbers.reduce((a, b) => a + b); // O(n)
  console.log('sum', sum);

  return sum.toString().length === 1 ? sum : rootDigit(sum);
  //   if (numbers.toString().length === 1) {
  //     return sum;
  //   }
  //   return rootDigit(sum);
}

//TIME COMPLEXITY - O(n)

test.only('digits sum root', () => {
  const firstOutput = rootDigit(123);
  expect(firstOutput).toEqual(6);
});
