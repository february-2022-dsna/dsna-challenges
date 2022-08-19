function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item)) return true;
  }
  return false;
}

test('some func', () => {
  const expected = false;
  const actual = some([1, 3, 5, 7], (item) => item % 2 === 0);
  expect(actual).toEqual(expected);
});

test('some func', () => {
  const expected = true;
  const actual = some([1, 3, 6, 7], (item) => item % 2 === 0);
  expect(actual).toEqual(expected);
});
