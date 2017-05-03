// Given a sorted array and a value, return whether the array contains the value. Do not sequntially iterate the array.
// Instead, divide and conquer taking advantaged of the fact that the array is sorted.

function binarySearch(val, arr) {
    var low  = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (val < arr[mid]) {
            high = mid - 1;
        }
        else if (val > arr[mid]) {
            low = mid + 1;
        }
        else {
            return "True. Found value of "+ mid + " in array";
        }
    }
    return "Value not in array";
}
var array1 = [1, 2, 3, 4, 5, 7];
console.log(binarySearch(7, array1));
