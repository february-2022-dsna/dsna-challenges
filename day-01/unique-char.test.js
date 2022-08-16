function uniqueChar(booger) {
  for (let i = 0; i < booger.length; i++) {
    if (booger.indexOf(booger[i]) === booger.lastIndexOf(booger[i])) {
      return booger[i];
    }
  }
  return '_';
}

test('uniqueChar func', () => {
  const expected = 'c';
  const actual = uniqueChar('abdacabad');
  expect(expected).toEqual(actual);
});

test('uniqueChar not found func', () => {
  const expected = '_';
  const actual = uniqueChar('abacabaabacaba');
  expect(expected).toEqual(actual);
});

test('uniqueChar not found func', () => {
  const expected = 'c';
  const actual = uniqueChar('abacabad');
  expect(expected).toEqual(actual);
});
