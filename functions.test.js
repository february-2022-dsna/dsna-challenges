const { anagrams, oddishOrEvenish, uniqueString, titleCase, reverseWords, uniqueChar, filter, map } = require('./functions.js'); 

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