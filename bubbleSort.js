function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        // You don't need the - i but it reduces the time needed to complete the algorithm. This is because after the first pass, the last element in the array will be the biggest and we don't need to revisit it.
        for (var x = 0; x < (array.length - i - 1); x++) {
            if(array[x] > array[x+1]) {    //Compare the adjacent positions
                var tmp = array[x];
                array[x] = array[x+1];
                array[x+1] = tmp;
            }
        }
    }
    return array;
}
var x = [4, 22, 62, 3, 1]

console.log(bubbleSort(x));
