function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

test.skip('arrays push', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = push(arr, 'd');
  expect(arr).toEqual(['a', 'b', 'c', 'd']);
  expect(newLength).toBe(4);
});

function unshift(arr, item) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = item;
  return arr.length;
}

test.skip('arrays unshift', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = unshift(arr, 'd');
  expect(arr).toEqual(['d', 'a', 'b', 'c']);
  expect(newLength).toBe(4);
});

function pop(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr.length = arr.length - 1;
  }
  return arr.length;
}

test('arrays pop', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = pop(arr, 'c');
  expect(arr).toEqual(['a', 'b']);
  expect(newLength).toBe(2);
});
