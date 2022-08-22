function push(arr, item){
   arr[arr.length] = item;
    return arr;
}

test('array push', () => {
    const arr = ['a', 'b', 'c'];
    const actual = push(arr, 'd');
    expect(actual).toEqual(['a', 'b', 'c', 'd']);
    expect(actual.length).toBe(4);
});

function unshift(arr, item){ 
   for(let i = arr.length -1; i >= 0; i--){
    arr[i +1] = arr[i];
   }
   arr[0] = item;
    return arr;
}

test('array unshift', () => {
    const arr = ['a', 'b', 'c'];
    const actual = unshift(arr, 'd');
    expect(actual).toEqual(['d', 'a', 'b', 'c']);
    expect(actual.length).toBe(4);
});

function pop(arr){
    if(arr.length === 0) return null;
    arr.length = arr.length -1;
    return arr;
}

test('array pop', () => {
    const arr = ['a', 'b', 'c'];
    const actual = pop(arr);
    expect(actual).toEqual(['a', 'b',]);
    expect(actual.length).toBe(2);
});


function shift(arr){
    if (arr.length === 0) return null;
    arr[0] = null;
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length -1
    return arr;
}

test('array shift', () => {
    const arr = ['a', 'b', 'c'];
    const actual = shift(arr);
    expect(actual).toEqual(['b', 'c',]);
    expect(actual.length).toBe(2);
});

function hasDuplicates(arr){
    //edge case in case arr is empty
    if(arr.length === 0) return null;
    // sort arr decending placing repetitive items next to each other
    const newArr = arr.sort();
    //loop through array
    for(let i = 0; i < newArr.length; i++) {
        //if element matches next element return true
       if(newArr[i] === newArr[i+1]) return true;
    }
    //if no elements match return false
    return false;
}

test('array hasDuplicates', () => {
    const arr = ['y', 'k', 'a', 'b', 'c', 'f'];
    const arr2 = ['a', 'b', 'e', 'd', 'e', 'f'];
    const first = hasDuplicates(arr);
    expect(first).toEqual(false);
    const second = hasDuplicates(arr2);
    expect(second).toEqual(true);
});

function inventoryChecker(inventory, { itemName }){
    //look through inventory and compare with item
    // if item has quantity greater than 5 give string else give other string
    return inventory[itemName] > 5 ? 'plenty of inventory' : `running low on ${itemName}`
}

test('inventory checker', () => {
    const inventory = { eggs: 20, bananas: 3, grapes: 12 };
    const item = { itemName: 'grapes'};
    const checker = inventoryChecker(inventory, item);
    expect(checker).toEqual('plenty of inventory');
    expect(inventoryChecker(inventory, { itemName: 'bananas'})).toBe('running low on bananas')
});








