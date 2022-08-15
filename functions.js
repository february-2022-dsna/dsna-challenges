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


module.exports = { anagrams, oddishOrEvenish, uniqueString, titleCase, reverseWords };