function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) { //Number of passes
    for (var x = 0; x < (array.length - i- 1); x++) {   // You don't need the - i but it reduces the time needed to complete the algorithm.
      if(array[x] > array[x+1]) {      //Compare the adjacent positions
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
