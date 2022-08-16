function anagrams(wordOne, wordTwo) {
  const wordOneArray = wordOne.split('').sort();//break up word one into letters, then sort the letters alphabetically
  const wordTwoArray = wordTwo.split('').sort();//break up word two into letters, then sort the letters alphabetically
  const wordOneString = wordOneArray.join('');//rejoin the letters 
  const wordTwoString = wordTwoArray.join('');//rejoin the letters
  return wordOneString === wordTwoString ? true : false;//check if the letters are the same, if true return true, if false return false
}

function oddishOrEvenish(number) {
  //first turn the number into string characters so we can split it
  const newNumber = number
    .toString()
    .split('')
  //then we want to turn characters back to numbers so we can do math with them
    .map(num => {return Number(num)} );

    //here we set up the operation to add the digits inside the newNumber array
    let sum = 0;
    for (i = 0; i < newNumber.length; i++) {
      sum += newNumber[i];
    }
    //we use modulo to determine if there is a remainder. 
      //If remainder is 0, return 'Evenish'
    if (sum % 2 === 0) {
      return 'Evenish';
      //Else return 'Oddish'
    } else {
      return 'Oddish';
    }
  }

function uniqueString(strings) {
  let newArr = strings.map(string => { return [...new Set(string.toLowerCase())].sort().join('') });
  for ( let i = 0; i < newArr.length; i++ ) {
    if ( newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]) ) 
    return strings[i]
  }
}

function titleCase(sentence) {
  //first we want to break up each word into pieces
  //then we want to target the first letter of each word and capitalize it
  //then we want to join the words back together in the same string
  return sentence
    .split(" ")//split up the different words of the sentence
    .map(word => word.slice(0, 1)//map each word and target the first letter
      .toUpperCase() + word.slice(1).toLowerCase()) //capitalize the first letter and add it to the rest of the word lowercase
    .join(" ");//join the sentence back together
}

function reverseWords(sentence) {
  //takes in a sentence of strings
  //reverses the order of letters for each word, but words remain in same order
  //returns reversed sentence

  const newSentence = sentence
    //splits sentence into individual words
    .split(" ")
    //reverses order of words
    .reverse()
    //joins words together in string
    .join(" ");

  return newSentence
    //splits string into individual characters
    .split("")
    //reverses order of characters
    .reverse()
    //joins them back together
    .join("");
}

function uniqueChar(string) {
  //takes in a string
  //returns the first unique character in the string
  //if there are no unique characters, return '_'
  const newString = string
    .split("")
    //sort the characters alphabetically
    .sort()
    //join the characters back together
    .join("");
  for ( let i = 0; i < newString.length; i++ ) {
    if ( newString.indexOf(newString[i]) === newString.lastIndexOf(newString[i]) )
    return newString[i]
  }
  return '_';
}

function filter(arr, predicate) {
  //takes in an array and a callback function
  //returns a new array with only the items that return true from the callback function
  const newArr = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if ( predicate(arr[i]) ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function map(arr, callback) {
  //takes in an array and a callback function
  //returns a new array with the results of the callback function for each item in the array
  const newArr = [];
  for ( let i = 0; i < arr.length; i++ ) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function addPunctuation(punctuation) {
  //takes in a punctuation string
  //returns a callback function that takes in a string
  //returns a new string with the punctuation at the end of the string
  return function(string) {
    return string + punctuation;
  }
}

function repeat(txt, n) {
  //takes in a string and a number
  //returns a new string with the original string repeated n times
  let newString = '';
  for ( let i = 0; i < n; i++ ) {
    newString += txt;
  }
  return newString;
}

function some(arr, predicate) {
  //takes in an array and a callback function
  //returns true if any item in the array returns true from the callback function
  for ( let i = 0; i < arr.length; i++ ) {
    if ( predicate(arr[i]) ) {
      return true;
    }
  }
  return false;
}

function every(arr, predicate) {
  //takes in an array and a callback function
  //returns true if all items in the array return true from the callback function
  for ( let i = 0; i < arr.length; i++ ) {
    if ( !predicate(arr[i]) ) {
      return false;
    }
  }
  return true;
}

module.exports = { anagrams, oddishOrEvenish, uniqueString, titleCase, reverseWords, uniqueChar, filter, map, addPunctuation, repeat, some };