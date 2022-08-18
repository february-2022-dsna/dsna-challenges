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

//TIME COMPLEXITY - O(n)

test('repeat string', () => {
  const output1 = repeat('ab', 3);
  expect(output1).toEqual('ababab');

  const output2 = repeat('kiwi', 1);
  expect(output2).toEqual('kiwi');

  const output3 = repeat('cherry', 2);
  expect(output3).toEqual('cherrycherry');
});

// ------------------------------ 3 - LARGEST EVEN -----------------

function largestEven(nums, maxEven = -1) {
  //NON-RECURSIVE
  // return nums.reduce((maxEven, num) => {
  //   if (num % 2 === 0 && num > maxEven) return num;
  //   return maxEven;
  // }, -1);

  //RECURSIVE
  if (!nums.length) return maxEven;
  const num = nums.pop();
  if (num % 2 === 0 && num > maxEven) maxEven = num;
  return largestEven(nums, maxEven);
}

//TIME COMPLEXITY -

test.only('largest even', () => {
  expect(largestEven([3, 7, 2, 1, 7, 9, 10, 13])).toBe(10);
  expect(largestEven([1, 3, 5, 7])).toBe(-1);
  expect(largestEven([0, 19, 18973623])).toBe(0);
});
