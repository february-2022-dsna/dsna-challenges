function addPuncuation(punc) {
    return (string) => string + punc;
}

test('add punctuation', () => {
    const addExcite = addPuncuation('!!!')
    const expected = 'Pokemon, catch em all!!!';

    const actual = addExcite('Pokemon, catch em all');

    expect(actual).toEqual(expected);

});

function addFirst(newItem) {

    return (arr) => [newItem, ...arr];
}

test('add first', () => {

    const addOrange = addFirst('orange')

    const expected = ['orange','red','blue','green'];

    const actual = addOrange(['red', 'blue', 'green']);

    expect(actual).toEqual(expected);


    const addCat = addFirst('cat')

    const expected2 = ['cat','dog','bird','lizard'];

    const actual2 = addCat(['dog', 'bird', 'lizard']);

    expect(actual2).toEqual(expected2);

});

function rootDigit(n) {
   
    if(n.toString().length === 1){ 
        return n;
    }

    const digits = n.toString().split('');
    const numbers = digits.map(d => +d);
    const sum = numbers.reduce((a, b) => a + b);
    
    return rootDigit(sum);

}

test('root digit', () => {

    const expected = 6;

    const actual = rootDigit(123);

    expect(actual).toEqual(expected);

    const expected2 = 2;

    const actual2 = rootDigit(4322);

    expect(actual2).toEqual(expected2);

    const expected3 = 9;

    const actual3 = rootDigit(999888777);

    expect(actual3).toEqual(expected3);

});

function every(arr, predicate) {

    for(let i = 0; i < arr.length; i++) {
        if(predicate(arr[i]) === false) return false;
    }
    
    return true;
}

test('root digit', () => {

    const expected = true;

    const actual = every([2, 4, 6], n => n % 2 === 0);

    expect(actual).toEqual(expected);

    const expected2 = false;

    const actual2 = every([1, 2, 3], n => n % 2 === 0);

    expect(actual2).toEqual(expected2);


});