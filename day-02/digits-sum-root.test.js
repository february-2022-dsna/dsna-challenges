function sumRoot(number) {
  const digits = number.toString().split('');
  const numbers = digits.map((d) => +d);
  const sum = numbers.reduce((a, b) => a + b);
  if (numbers.toString().length === 1) {
    return sum;
  }
  return sumRoot(sum);
}

test('sumRoot func', () => {
  const expected = 2;
  const actual = sumRoot(4322);
  expect(actual).toEqual(expected);
});
