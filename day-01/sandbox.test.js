function annagram(word1, word2){
    // console.log(word1.split('').sort(), 'weird');
    return word1.split('').sort().join() === word2.split('').sort().join() ? true : false;
    
}

test('time to test a function', () => {

    const expected = true;
    
    const actual = annagram('superintended','unpredestined');

    expect(expected).toEqual(actual);
});


// function removeDuplicate(string)
// {
//    return string.split('')
//     .filter(function(item, pos, self)
//     {
//       return self.indexOf(item) == pos;
//     }
//    ).join('');
// }

function uniqueString(booger) {

    const newBoog = booger.map(str => { return [...new Set(str.toLowerCase())].sort().join('')});
    
    for ( let i = 0; i < newBoog.length; i++ ) {
        if ( newBoog.indexOf(newBoog[i]) === newBoog.lastIndexOf(newBoog[i]) ) return booger[i]
    }

}
    







test('uniqe string', () => {

    const strings = [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ];
    
    const expected = 'BbBb';

    const actual = uniqueString(strings);

    expect(expected).toEqual(actual);

    const strings2 = [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ];
    
    const expected2 = 'foo';

    const actual2 = uniqueString(strings2);

    expect(expected2).toEqual(actual2);
});

function uniqueChar(string) {
    for ( let i = 0; i < string.length; i++ ) {
        if ( string.indexOf(string[i]) === string.lastIndexOf(string[i]) ) return string[i]
    }

    return '_'
}

test('uniqe char', () => {

    const letters = 'abdacabad';
    
    const expected = 'c';

    const actual = uniqueChar(letters);

    expect(actual).toEqual(expected);

    const letters2 = 'abacabaabacaba';
    
    const expected2 = '_';

    const actual2 = uniqueChar(letters2);

    expect(actual2).toEqual(expected2);

    const letters3 = 'abacabad';
    
    const expected3 = 'c';

    const actual3 = uniqueChar(letters3);

    expect(actual3).toEqual(expected3);
});

function pluralize(words) {
    let newWords = [];
    for ( let i = 0; i < words.length; i++ ) {
        if (words.indexOf(words[i]) === words.lastIndexOf(words[i])) {newWords.push(words[i])} else newWords.push(words[i] + 's')
    }
    return [...new Set(newWords)]
}

test('pluralize', () => {

    const arr = ["cow", "pig", "cow", "cow"];
    
    const expected = ["cows", "pig"];

    const actual = pluralize(arr);

    expect(expected).toEqual(actual);

    const arr2 = ["table", "table", "table"];
    
    const expected2 = ["tables"];

    const actual2 = pluralize(arr2);

    expect(expected2).toEqual(actual2);

    const arr3 = ["chair", "pencil", "arm"];
    
    const expected3 = ["chair", "pencil", "arm"];

    const actual3 = pluralize(arr3);

    expect(expected3).toEqual(actual3);

});

function progressDays(miles) {
    let countDays = 0;
    for ( let i = 0; i < miles.length; i++ ) {
        if(miles[i + 1] > miles[i]){
            countDays++
        }
    }
    return countDays;
}

test('progressDays', () => {

    const arr = [3, 4, 1, 2];
    
    const expected = 2;

    const actual = progressDays(arr);

    expect(actual).toEqual(expected);

    const arr2 = [6, 5, 4, 3, 2, 9];
    
    const expected2 = 1;

    const actual2 = progressDays(arr2);

    expect(actual2).toEqual(expected2);

    const arr3 = [9, 9];
    
    const expected3 = 0;

    const actual3 = progressDays(arr3);

    expect(actual3).toEqual(expected3);

});