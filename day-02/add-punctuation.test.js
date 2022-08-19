const addPunctuation = (punctuation) => (str) => str + punctuation;

test('addPunctuation func', () => {
  const addExcitement = addPunctuation('!');
  const expected = 'Hello World!';
  const actual = addExcitement('Hello World');
  expect(expected).toEqual(actual);
});
