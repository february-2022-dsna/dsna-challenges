// ------------------------------ 1 - MAP -----------------

function map(arr, callback) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const transformed = callback(arr[i]);
    mapped.push(transformed);
  }
  return mapped;
}

//TIME COMPLEXITY -

test('maps through an array', () => {
  const arr = [1, 6, 5];
  const actual = map(arr, (n) => n ** 2);
  expect(actual).toEqual([1, 36, 25]);
});

// ------------------------------ 2 - FILTER -----------------

function filter(arr, predicate) {
  const mapped = [];

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      mapped.push(arr[i]);
    }
  }

  return mapped;
}

//TIME COMPLEXITY -

test.only('filters through an array', () => {
  const arr = [2, 6, 5];
  const actual = filter(arr, (n) => n % 2 === 0);
  expect(actual).toEqual([2, 6]);
});
