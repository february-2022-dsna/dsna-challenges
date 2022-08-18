const { anagrams, oddishOrEvenish, uniqueString, titleCase, reverseWords, uniqueChar, filter, map, addPunctuation, repeat, some, every, BinaryTreeNode } = require('./functions.js'); 

describe("anagrams", () => {
  it("should return true if the words share the same letters", () => {
    expect(anagrams('superintended', 'unpredestined')).toBe(true);
    expect(anagrams('pictorialness','documentarily')).toBe(false);
  });
});

describe("oddishOrEvenish", () => {
  it("should return a string declaring whether the number is oddish or evenish", () => {
    expect(oddishOrEvenish(121)).toBe("Evenish");
    expect(oddishOrEvenish(41)).toBe("Oddish");
    expect(oddishOrEvenish(12421)).toBe("Evenish");
  });
});

describe("uniqueString", () => {
  it("should return the odd man out", () => {
    expect(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])).toBe("BbBb");
  });
});

describe("titleCase", () => {
  it("should return the sentence capitalizing all the first letters", () => {
    expect(titleCase("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("uniqueChar", () => {
  it("should return the odd man out", () => {
    expect(uniqueChar('abdacabad')).toBe('c');
  });
});

describe("filter", () => {
  it("it calls the callback function with each element of the passed array and conditionally adds the item to the new array if the predicate function returns a truthy value", () => {
    expect(filter([2, 6, 5], n => n % 2 === 0)).toEqual([2, 6]);
  });
});

describe("map", () => {
  it("calls the callback function with each element of the passed array and returns a new array with the results of the callback function for each item in the array", () => {
    expect(map([1, 6, 5], n => n**2)).toEqual([1, 36, 25]);
  });
});

const addExcitement = addPunctuation('!!!');
const addUnsure = addPunctuation('?!?');
describe("addPunctuation", () => {
  it("takes in punctuation and a string and returns the string with the punctuation at the end", () => {
    expect(addUnsure('Hello World')).toBe('Hello World?!?');
    expect(addExcitement('Hello World')).toBe('Hello World!!!');
  })
});

describe("repeat", () => {
  it("takes in a string and a number and returns a new string with the original string repeated n times", () => {
    expect(repeat('Hello', 3)).toBe('HelloHelloHello');
  });
});

describe("some", () => {
  it("If the callback function returns `true`, the `some` call can short-circuit and return `true`, If every callback function returns `false`, the `some` function returns `false`", () => {
    expect(some([1, 6, 5], n => n % 2 === 0)).toBe(true);
    expect(some([1, 7, 3], n => n % 2 === 0)).toBe(false);
  });
});

describe("every", () => {
  it("If the callback function returns `true`, the `every` call can short-circuit and return `true`, If any callback function returns `false`, the `every` function returns `false`", () => {
    expect(every([1, 2, 3], n => n % 2 === 0)).toBe(false);
    expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true);
  });
});

test('binary tree', () => {
  const B = new BinaryTreeNode('B');
  const A = new BinaryTreeNode('A');
  const C = new BinaryTreeNode('C');
  const D = new BinaryTreeNode('D');

  B.add(A);
  B.add(D);
  B.add(C);

  console.log(B)

  expect(B.left).toBe(A);
  expect(B.right).toBe(D);
  expect(A.left).toBe(null);
  expect(C.left).toBe(null);
});
