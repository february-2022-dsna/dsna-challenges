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
