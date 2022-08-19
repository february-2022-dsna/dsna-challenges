// function largestEven(nums) {
//   let biggest = [];
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       biggest.push(nums[i]);
//     }
//   }
//   if (biggest.length) {
//     biggest.sort().reverse();
//     return biggest[0];
//   } else {
//     return Number(-1);
//   }
// }

function largestEven(nums) {
  if (nums.length < 1) return -1;

  let num = nums[nums.length - 1];

  if (num % 2 === 0) {
    return nums[nums.length - 1];
  }

  nums.pop();

  return largestEven(nums);
}

test('largestEven func', () => {
  const expected = 8;
  const actual = largestEven([2, 4, 6, 8]);
  expect(actual).toEqual(expected);
});

test('largestEven func', () => {
  const expected = -1;
  const actual = largestEven([1, 3, 5, 7]);
  expect(actual).toEqual(expected);
});

test('largestEven func', () => {
  const expected = 0;
  const actual = largestEven([0, 19, 18973623]);
  expect(actual).toEqual(expected);
});
