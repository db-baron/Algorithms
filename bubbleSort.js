function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) { //Number of passes
    for (var x = 0; x < (array.length - i- 1); x++) {   // You don't need
      if(array[x] > array[x+1]) {      //Compare the adjacent positions
        var tmp = array[x];  //Temporary variable to hold the current number
        array[x] = array[x+1]; //Replace current number with adjacent number
        array[x+1] = tmp; //Replace adjacent number with current number
      }
    }
  }
  return array;
}
var x = [4, 22, 62, 3, 1]

console.log(bubbleSort(x));
