// ------------------------------ 1 - MAP -----------------

function map(arr, callback) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const transformed = callback(arr[i]);
    mapped.push(transformed);
  }
  return mapped;
}

//TIME COMPLEXITY - O(n)

test('maps through an array', () => {
  const arr = [1, 6, 5];
  const actual = map(arr, (n) => n ** 2);
  expect(actual).toEqual([1, 36, 25]);
});

// ------------------------------ 2 - FILTER -----------------

function filter(arr, predicate) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

//TIME COMPLEXITY - O(n)

test.only('filters through an array', () => {
  const arr = [2, 6, 5];
  const actual = filter(arr, (n) => n % 2 === 0);
  expect(actual).toEqual([2, 6]);
});

// ------------------------------ 3 - SOME -----------------

function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return true;
  }
  return false;
}

//TIME COMPLEXITY - O(1) - we are only accessing array and returning true or false?

test('some', () => {
  const arr = [1, 6, 5];
  const actual = some(arr, (n) => n % 2 === 0);
  expect(actual).toBe(true);

  const secondArr = [1, 7, 3];
  const secondActual = some(secondArr, (n) => n % 2 === 0);
  expect(secondActual).toBe(false);
});

// ------------------------------ 4 - EVERY -----------------

function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) return false;
  }
  return true;
}

//TIME COMPLEXITY - O(1) -- accessing array only

test('every', () => {
  const arr = [2, 4, 6];
  const actual = every(arr, (n) => n % 2 === 0);
  expect(actual).toEqual(true);

  const secondArr = [1, 2, 3];
  const secondActual = every(secondArr, (n) => n % 2 === 0);
  expect(secondActual).toEqual(false);
});
