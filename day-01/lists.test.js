function multiplesOfN(n){
  //set an empty array
  const list = [];
  //loop through 50 instances and push only those that are modulus of n
  for(let i = 1; i <= 50; i++){
    if(i % n === 0)list.push(i);
  }
  return list;
}

test('multiplesOfN Test', () => {
  expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  expect(multiplesOfN(25)).toEqual([25, 50]);
  expect(multiplesOfN(10)).toEqual([10, 20, 30, 40, 50]);
});


function fizzBuzz(n){
    const fizzBuzzArr = Array.from({ length: n }, (_, i) => i + 1); 
  for(let i = 1; i < fizzBuzzArr.length; i++){
    if(i % 3 === 0 && i % 5 === 0) fizzBuzzArr[i - 1] = 'FizzBuzz'; 
    else if(i % 3 === 0) fizzBuzzArr[i -1] = 'Fizz';
    else if(i % 5 === 0) fizzBuzzArr[i -1] = 'Buzz';
  }
  return fizzBuzzArr;
}

test('fizzBuzz', () => {
    const fizzBuzzArr = fizzBuzz(16);
    expect(fizzBuzzArr).toEqual([
        1, 2, 'Fizz', 4, 'Buzz', 
        'Fizz', 7, 8, 'Fizz', 'Buzz', 
        11, 'Fizz', 13, 14, 'FizzBuzz', 
        16
      ])
});
