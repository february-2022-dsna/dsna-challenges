// ------------------------------ 1 - DIGIT SUM ROOT -----------------

function rootDigit(n) {
  const digits = n.toString().split(''); // O(n)
  console.log('digits', digits);
  const numbers = digits.map((d) => +d); // O(n)
  console.log('numbers', numbers);
  const sum = numbers.reduce((a, b) => a + b); // O(n)
  console.log('sum', sum);

  return numbers.toString().length === 1 ? sum : rootDigit(sum);
  //   if (numbers.toString().length === 1) {
  //     return sum;
  //   }
  //   return rootDigit(sum);
}

//TIME COMPLEXITY - O(n)

test('digits sum root', () => {
  const firstOutput = rootDigit(123);
  expect(firstOutput).toEqual(6);
});

// ------------------------------ 2 - REPEAT STRING -----------------

function repeat(txt, n) {
  if (n > 1) {
    return repeat(txt, n - 1) + txt;
  }

  return txt;
}

//TIME COMPLEXITY -

test.only('repeat string', () => {
  const output1 = repeat('ab', 3);
  expect(output1).toEqual('ababab');

  const output2 = repeat('kiwi', 1);
  expect(output2).toEqual('kiwi');

  const output3 = repeat('cherry', 2);
  expect(output3).toEqual('cherrycherry');
});
