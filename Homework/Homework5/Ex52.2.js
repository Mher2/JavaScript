function flattenArray(array, newArray = []) {
    let { length } = array;
    for (let i = 0; i < length; i++) {
        if (Array.isArray(array[i])) {
            newArray.push(...flattenArray(array[i]))
        } else {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(flattenArray([1, 2, 3, [1, 2, 3, [1, null], '5'], 5,]));
console.log(flattenArray([1,2,[3,4,[[5],[],[6,[7,8],5]]],1]));