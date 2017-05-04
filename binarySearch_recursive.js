// Given a sorted array and a value, return whether the array contains the value. Do not sequntially iterate the array.
// Instead, divide and conquer taking advantaged of the fact that the array is sorted.
// Use Recursion this time.
function recBinarySearch(val, arr, low, high) {
    if (!low && !high){
        var low  = 0;
        var high = arr.length - 1;
    }
    var mid = Math.floor((low + high) / 2);
    if (low > high){
        return "Value not in array";
    }

    if (val < arr[mid]) {
        high = mid - 1
        return recBinarySearch(val, arr, low, high);
    }
    else if (val > arr[mid]) {
        low = mid + 1;
        return recBinarySearch(val, arr, low, high);
    }
    else{
        return mid;
    }
}

var array1 = [1, 2, 3, 4, 5, 7];
console.log(recBinarySearch(7, array1));
