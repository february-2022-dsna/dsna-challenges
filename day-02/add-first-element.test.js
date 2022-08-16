function addFirst(element) {
  return function adder(arr) {
    return Array(element).concat(arr);
  };
}

test('addFirst func', () => {
  const addOrange = addFirst('orange');
  expect(addOrange(['red', 'blue', 'green'])).toEqual([
    'orange',
    'red',
    'blue',
    'green',
  ]);
});
