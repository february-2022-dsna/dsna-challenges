Anagrams
---

A hard problem made easy with the right use of built-ins

## Challenge

Write a function that takes two words as arguments and returns true if they are anagrams (contain the exact same letters) and false otherwise.

```js
function anagrams(wordOne, wordTwo) {
  function anagrams(word, words) {
  const wordArray = word.split('').sort();//break up word one into letters, then sort the letters alphabetically
  const wordsArray = words.map(word => word.split('').sort().join(''));//break up word two into letters, then sort the letters alphabetically
  const wordString = wordArray.join('');//rejoin the letters
  const wordsString = wordsArray.join('');//rejoin the letters
  return wordsString.includes(wordString);//check if the letters are the same, if true return true, if false return false
}
}
```

> **You can assume valid input**

## Test Cases

Input | Output 
---|---:
`'superintended'`, `'unpredestined'` | `true` 
`'pictorialness'`, `'documentarily'` | `false` 
