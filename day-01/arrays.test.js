function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

// TIME COMPLEXITY - O(1) -- no need to shift array, adding to end

test('add item to end of array', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = push(arr, 'd');
  expect(arr).toEqual(['a', 'b', 'c', 'd']);
  expect(newLength).toBe(4);
});

// ------------------------------

function unshift(arr, item) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = item;
  return arr.length;
}

// TIME COMPLEXITY - O(n) -- inserting requires shifting elements to the right by one

test('adjust items in array to make room and add item to beginning of array', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = unshift(arr, 'd');
  expect(arr).toEqual(['d', 'a', 'b', 'c']);
  expect(newLength).toBe(4);
});

// ------------------------------
