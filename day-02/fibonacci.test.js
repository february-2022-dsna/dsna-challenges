function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

test('fibonacci func', () => {
  const expected = 8;
  const actual = fibonacci(6);
  expect(actual).toEqual(expected);
});

test('fibonacci func', () => {
  const expected = 21;
  const actual = fibonacci(8);
  expect(actual).toEqual(expected);
});
