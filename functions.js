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

module.exports = { anagrams, oddishOrEvenish };