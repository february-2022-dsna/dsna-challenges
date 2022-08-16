// ------------------------------ 5 - ADD PUNCTUATION -----------------

const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

//TIME COMPLEXITY -

test.only('add punctuation', () => {
  const addExcitement = addPunctuation('!!!');
  expect(addExcitement('Hello World')).toBe('Hello World!!!');

  const addUnsure = addPunctuation('?!?');
  expect(addUnsure('Hello World')).toBe('Hello World?!?');
});
