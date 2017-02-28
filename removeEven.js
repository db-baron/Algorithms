import removeAt

function removeEven(arr) {
    for (var i = arr.length-1; i = 0; i--) {
        if (arr[i].length % 2 == 0) {
            removeAt(arr, i);
        }
    }
    return arr;
}

a = ["fucko", "fakall", "fuggoff", "fu", "faaaaak"]

console.log(removeEven(a));
