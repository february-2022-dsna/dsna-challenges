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
