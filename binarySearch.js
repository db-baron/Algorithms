// Given a sorted array and a value, return whether the array contains the value. Do not sequntially iterate the array.
// Instead, divide and conquer taking advantaged of the fact that the array is sorted.
function binarySearch(val, arr) {
    var low  = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = (low + (high - low)) / 2;
        // if not a decimal
        if ((mid % 1) > 0) {
            mid = Math.floor(mid);
        }
        if (val < arr[mid]) {
            high = mid - 1;
        }
        else if (val > arr[mid]) {
            low = mid + 1;
        }
        else {
            return mid;
        }
    }
    return "error";
}
var x = [1,2,4,5];
console.log(binarySearch(2, x));
