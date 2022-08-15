const { anagrams, oddishOrEvenish, uniqueString, titleCase } = require('./functions.js'); 

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