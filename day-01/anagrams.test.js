function anagrams(wordOne, wordTwo) {
  const stringOne = wordOne.split('').sort().join('');
  const stringTwo = wordTwo.split('').sort().join('');

  return stringOne === stringTwo ? true : false;
}

test('anagrams func', () => {
  const expected = true;
  const actual = anagrams('listen', 'silent');

  expect(expected).toEqual(actual);
});
