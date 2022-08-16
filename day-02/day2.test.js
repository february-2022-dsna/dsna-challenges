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

});