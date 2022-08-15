function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % 15 === 0) {
      arr.push('fizzbuzz');
    } else if (n % 3 === 0) {
      arr.push('fizz');
    } else if (n % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(i);
    }
  }
}

test('fizzbuzz', () => {
  const arr = ['a', 'b', 'c'];
  const newLength = push(arr, 'd');
  expect(arr).toEqual(['a', 'b', 'c', 'd']);
  expect(newLength).toBe(4);
});
