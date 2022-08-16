function filter(arr) {
  return arr.filter((item) => {
    return item % 2 === 0;
  });
}

test('filter func', () => {
  const expected = [2, 4, 6, 8];
  const actual = filter([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(expected).toEqual(actual);
});
