Anagrams
---

A hard problem made easy with the right use of built-ins

## Challenge

Write a function that takes two words as arguments and returns true if they are anagrams (contain the exact same letters) and false otherwise.

```js
  function anagrams(wordOne, wordTwo) {
    const wordOneArray = wordOne.split('').sort();//break up word one into letters, then sort the letters alphabetically
    const wordTwoArray = wordTwo.split('').sort();//break up word two into letters, then sort the letters alphabetically
    const wordOneString = wordOneArray.join('');//rejoin the letters 
    const wordTwoString = wordTwoArray.join('');//rejoin the letters
    return wordOneString === wordTwoString ? true : false;//check if the letters are the same, if true return true, if false return false
  }
```

> **You can assume valid input**

## Test Cases

Input | Output 
---|---:
`'superintended'`, `'unpredestined'` | `true` 
`'pictorialness'`, `'documentarily'` | `false` 
