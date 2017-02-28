// Removes the element at index 'ind' from the array 'arr'
function removeAt(arr, ind) {
    if (ind > arr.length -1) {
        return "You must select an index less than the length of the array - 1"
    }
    else {
        var removed_val = arr[ind];
        for (var i = ind; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr.pop();
        return removed_val;
    }
}

var array = [1,3,5,7,9];
console.log(removeAt(array, 0));
