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
const arr2 = [, 56, 22];
const function2 = 
})


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

