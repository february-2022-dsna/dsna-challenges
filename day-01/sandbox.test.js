function annagram(word1, word2){
    // console.log(word1.split('').sort(), 'weird');
    return word1.split('').sort().join() === word2.split('').sort().join() ? true : false;
    
}

test('time to test a function', () => {

    const expected = annagram('superintended','unpredestined');
    
    const actual = true;

    expect(expected).toEqual(actual);
});