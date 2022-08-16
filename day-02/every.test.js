function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!predicate(item)) return false;
  }
  return true;
}

test('every func', () => {
  const expected = true;
  const actual = every([2, 4, 6], (item) => item % 2 === 0);
  expect(actual).toEqual(expected);
});

test('every func', () => {
  const expected = false;
  const actual = every([1, 2, 3], (item) => item % 2 === 0);
  expect(actual).toEqual(expected);
});
