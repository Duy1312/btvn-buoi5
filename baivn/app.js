var arr = [1,5,4,4];

function getphantu(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

console.log(getphantu(arr, 4)); 