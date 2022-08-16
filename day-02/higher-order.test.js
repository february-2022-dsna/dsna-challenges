// ------------------------------ 5 - ADD PUNCTUATION -----------------

const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

//TIME COMPLEXITY -

test('add punctuation', () => {
  const addExcitement = addPunctuation('!!!');
  expect(addExcitement('Hello World')).toBe('Hello World!!!');

  const addUnsure = addPunctuation('?!?');
  expect(addUnsure('Hello World')).toBe('Hello World?!?');
});

// ------------------------------ 5 - ADD FIRST ELEMENT -----------------

const addFirst = (element) => (array) => Array(element).concat(array);

test('add first element', () => {
  const addOrange = addFirst('orange');
  expect(addOrange(['red', 'blue', 'green'])).toEqual([
    'orange',
    'red',
    'blue',
    'green',
  ]);
});
