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