// ------------------------------ PUSH -----------------

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

// ------------------------------ POP -----------------

function pop(arr) {
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

// TIME COMPLEXITY - O(1) -- removing at the end does not require other elements to be shifted

test('remove last item from array, return removed item', () => {
  const arr = ['a', 'b', 'c'];
  const removedItem = pop(arr);
  expect(arr).toEqual(['a', 'b']);
  expect(removedItem).toBe('c');
});

// ------------------------------ UNSHIFT -----------------

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

// ------------------------------ SHIFT -----------------

function shift(arr) {
  const first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return first;
}

test('removes first item in array, return removed item', () => {
  const arr = ['a', 'b', 'c'];
  const removedItem = shift(arr);
  expect(arr).toEqual(['b', 'c']);
  expect(removedItem).toBe('a');
});
