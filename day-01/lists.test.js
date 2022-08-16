function multiplesOfN(n){
  //set an empty array
  const list = [];
  //loop through 50 instances and push only those that are modulus of n
  for(let i = 1; i <= 50; i++){
  //if an instance is divisible by n push it to the array
    if(i % n === 0)list.push(i);
  }
  //return the array of new numbers.
  return list;
}

test('multiplesOfN Test', () => {
  expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  expect(multiplesOfN(25)).toEqual([25, 50]);
  expect(multiplesOfN(10)).toEqual([10, 20, 30, 40, 50]);
});

// ----------------------------------------------------------------------------------------------

function reverseWords(sentence){
  //split the sentence into words.
  //map over the words and split them into letters, reverse them and rejoin
  //join the sentence back together
  return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

test('reverse words test', () => {
  expect(reverseWords('alchemy rocks gold')).toEqual('ymehcla skcor dlog');
  expect(reverseWords('tacocat is tacocat backwards')).toEqual('tacocat si tacocat sdrawkcab');
});

// ----------------------------------------------------------------------------------------------

function titleCase(sentence){
  return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

test('title case test', () => {
  expect(titleCase('alchemy ROCKS goLD')).toEqual('Alchemy Rocks Gold');
  expect(titleCase('I aM bAtmAn')).toEqual('I Am Batman');
  expect(titleCase('let\'s gO GiRls - sHanIA TwaIn')).toEqual('Let\'s Go Girls - Shania Twain');
});

// ----------------------------------------------------------------------------------------------

function oddishOrEvenish(number){
  const newNumber = String(number).split('').reduce((a, b) => Number(a) + Number(b));
  return newNumber % 2 === 0 ? 'Evenish' : 'Oddish';
}

test('oddish or evenish test', () => {
  expect(oddishOrEvenish(121)).toEqual('Evenish');
  expect(oddishOrEvenish(41)).toEqual('Oddish');
  expect(oddishOrEvenish(93922341)).toEqual('Oddish')
});

// ----------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------
