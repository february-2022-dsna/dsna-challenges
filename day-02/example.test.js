function switcheroo(x) {
  arr = [...x];

  for (let i = 0; i < x.length; i++) {
    if (arr[i] === 'a') {
      arr[i] = 'b';
    } else if (arr[i] === 'b') {
      arr[i] = 'a';
    }
  }

  console.log(arr);

  let string = arr.join('');

  return string;
}

test('switcheroo func', () => {
  const expected = 'bbaa';
  const actual = switcheroo('aabb');
  expect(actual).toEqual(expected);
});
