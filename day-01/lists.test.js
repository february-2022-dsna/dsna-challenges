// ------------------------------ 1 - REVERSE SENTENCE WORDS -----------------

function reverseWords(sentence) {
  return sentence.split('').reverse().join('').split(' ').reverse().join(' ');
}

// TIME COMPLEXITY - O(n) -- ?

test('reverse each word in a sentence', () => {
  const output = reverseWords('alchemy rocks gold');
  expect(output).toEqual('ymehcla skcor dlog');
});

// ------------------------------ 2 - TITLE CASE -----------------

function titleCase(sentence) {
  sentence = sentence.toLowerCase().split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}

// TIME COMPLEXITY - O(n) - searching through string

test('takes sentence and returns same sentence with first letter of each word capitalized', () => {
  const output = titleCase('alchemy ROCKS goLD');
  expect(output).toEqual('Alchemy Rocks Gold');
});

// ------------------------------ 2.1 - ODDISH/EVENISH -----------------

function oddishOrEvenish(number) {
  const splitNumbers = number.split('');
  const sum = splitNumbers.reduce((prev, currentValue) => {
    return (prev += Number(currentValue));
  }, 0);
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

// TIME COMPLEXITY - ?

test.only('is a number oddish(sum of all its digits is odd) or evenish(sum of all its digits is even)', () => {
  const outputOne = oddishOrEvenish('121');
  expect(outputOne).toEqual('Evenish');
  const outputTwo = oddishOrEvenish('41');
  expect(outputTwo).toEqual('Oddish');
});

// ------------------------------ 3 - FIZZBUZZ -----------------

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else arr.push(i);
  }
  return arr;
}

// TIME COMPLEXITY - O(n) -- simply searching through arr

test('fizzbuzz func', () => {
  const arr = fizzBuzz(16);
  expect(arr).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
  ]);
});

// ------------------------------ 4 - ANAGRAM -----------------

function anagrams(wordOne, wordTwo) {
  const wordOneSorted = wordOne.split('').sort().join('');
  const wordTwoSorted = wordTwo.split('').sort().join('');
  return wordOneSorted === wordTwoSorted ? true : false;
}

// TIME COMPLEXITY - O(n log(n)) - .sort method gives us this

test('returns true if anagram(same letters) or false', () => {
  const outputOne = anagrams('superintended', 'unpredestined');
  expect(outputOne).toBe(true);
  const outputTwo = anagrams('pictorialness', 'documentarily');
  expect(outputTwo).toBe(false);
});

// ------------------------------ 5 - UNIQUE STRINGS -----------------

function uniqueString(strings) {
  let newArr = arr.map((a) => {
    return [...new Set(a.toLowerCase())].sort().join('');
  });

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) {
      return arr[i];
    }
  }
}

//TIME COMPLEXITY - O(n) -

test('unique string', () => {
  const outputOne = uniqueString([
    'Aa',
    'aaa',
    'aaaaa',
    'BbBb',
    'Aaaa',
    'AaAaAa',
    'a',
  ]);
  expect(outputOne).toBe('BbBb');
  const outputTwo = uniqueString([
    'abc',
    'acb',
    'bac',
    'foo',
    'bca',
    'cab',
    'cba',
  ]);
  expect(outputTwo).toBe('foo');
});

// ------------------------------ 5 - UNIQUE CHAR -----------------
function uniqueChar(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i]))
      return string[i];
  }

  return '_';
}

// TIME COMPLEXITY - O(n) -

test.only('returns any instance of non-repeating char. If so, return _', () => {
  const outputOne = uniqueChar('abdacabad');
  expect(outputOne).toBe('c');
  const outputTwo = uniqueChar('abacabaabacaba');
  expect(outputTwo).toBe('_');
  const outputThree = uniqueChar('abacabad');
  expect(outputThree).toBe('c');
});
