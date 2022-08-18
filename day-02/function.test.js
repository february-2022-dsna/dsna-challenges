const addFirstElement = (element) => {
    //create a function that takes in an array and places the element in front
    //use spread operation to place element in front
    const newArray = (arr) => [element, ...arr];
    return newArray;
}

test('addFirstElement test', () => {
    const addApple = addFirstElement('apple');
    expect(addApple(['banana', 'orange', 'grapes'])).toEqual(['apple', 'banana', 'orange', 'grapes'])
})

// -------------------------------------------------------------------------------------------------------

const addPunctuation = (punctuation) => (n) => n + punctuation;

test('addPunctuation test', () => {
    const addExcitement = addPunctuation('!!!');
    expect(addExcitement('Whoa')).toEqual('Whoa!!!');
    const addConfusion = addPunctuation('!?!?!?');
    expect(addConfusion('WHAT')).toEqual('WHAT!?!?!?');
})

// -------------------------------------------------------------------------------------------------------

const rootDigit = (number) => {
    const digits = number.toString().split('').map(num => +num).reduce((a, b) => a + b);
    return digits >= 10 ? rootDigit(digits) : digits;
}

test('Root Digit funciton',  () => {
    expect(rootDigit(123)).toEqual(6);
    expect(rootDigit(4322)).toEqual(2);
    expect(rootDigit(999888777)).toEqual(9);
})

// -------------------------------------------------------------------------------------------------------

const every = (arr, predicate) => {
    for(let i = 0; i < arr.length; i++){
       return predicate(arr[i]) ? true: false;
    }
}

test('every test', () => {
    expect(every([2, 4, 6], n => n % 2 === 0)).toEqual(true);
    expect(every([1, 2, 3], n => n % 2 === 0)).toEqual(false);
})

// -------------------------------------------------------------------------------------------------------

const fibonacci = (n) => {
    if (n <=0 )return;
    return n >= 0 && 
}

test('fibonacci test', () => {

})

// -------------------------------------------------------------------------------------------------------

//declarative
// function largestEven(nums){
//     return nums.reduce((maxEven, num) => {
//         return num % 2 === 0 && num > maxEven ? num : maxEven;
//     }, -1);
// }

//recursive version
function largestEven(nums, maxEven = -1){
    if(!nums.length) return maxEven;
    const num = nums.pop();
    if(num % 2 && num > maxEven) maxEven = num;
}

test('largestEven test', () => {
    expect(largestEven([3, 7, 2, 1, 7, 9, 10, 13])).toEqual(10)
})

// -------------------------------------------------------------------------------------------------------

function map(arr, fn) {
 const mapped = [];

 for(let i = 0; i < arr.length; i++){
    if(!arr.hasOwnProperty(i)) continue;
    const transformed = fn(arr[i]);
    mapped.push(transformed);
 }
 return mapped;
}


test('map test',  () => {
const arr = [1, 6, 5];
const function1 = map(arr, n => n ** 2);
expect(function1).toEqual([1, 36, 25])
// const arr2 = [, 56, 22];
// const function2 = 
})

// -------------------------------------------------------------------------------------------------------

function filter(arr, predicate){
    const list = [];
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if(predicate(item)) list.push(item);
    }
    return list;
}

test('filter test', () => {
    expect(filter([2, 6, 5], n => n % 2 === 0)).toEqual([2, 6])});

// function addPunctuation(punctuation){
//     //takes in the punctuation and returns a function
//     return n => (n + punctuation);
// }

// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
