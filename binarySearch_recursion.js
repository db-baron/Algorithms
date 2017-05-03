// Given a sorted array and a value, return whether the array contains the value. Do not sequntially iterate the array.
// Instead, divide and conquer taking advantaged of the fact that the array is sorted.

function recBinarySearch(val, arr) {
    var mid = Math.floor((0 + arr.length - 1) / 2);
    if (val < arr[mid]) {
        return recBinarySearch(val, arr.slice(0, mid));
    }
    else if (val > arr[mid]) {
        return recBinarySearch(arr.slice(mid, arr.length));
    }
    else {
        return "True it's "+mid;
    }

    return mid;
}
var array1 = [1, 2, 3, 4, 5, 7];
console.log(recBinarySearch(7, array1));
