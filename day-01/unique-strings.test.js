function uniqueString(booger) {
  const newBoog = booger.map((str) => {
    return [...new Set(str.toLowerCase())].sort().join('');
  });
  for (let i = 0; i < newBoog.length; i++) {
    if (newBoog.indexOf(newBoog[i]) === newBoog.lastIndexOf(newBoog[i]))
      return booger[i];
  }
}

test('uniqueString func', () => {
  const expected = 'BbBb';
  const actual = uniqueString([
    'Aa',
    'aaa',
    'aaaaa',
    'BbBb',
    'Aaaa',
    'AaAaAa',
    'a',
  ]);
  expect(expected).toEqual(actual);
});
