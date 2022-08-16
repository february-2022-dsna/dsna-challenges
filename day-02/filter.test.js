function filter(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item)) result.push(item);
  }
  return result;
}

test('filter func', () => {
  const expected = [2, 4, 6, 8];
  const actual = filter(expected, (n) => n % 2 === 0);
  expect(actual).toEqual(expected);
});
