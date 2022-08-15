const { anagrams, oddishOrEvenish } = require('./functions.js'); 

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