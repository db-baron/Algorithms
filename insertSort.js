function insertSort(arr){
    for(var i=1; i<arr.length; i++){
        if (arr[i] < arr[i-1]){
            var temp = arr[i];
            for (var j = i-1; j >= 0; j--){
                if (arr[j] > temp){
                    arr[j+1] = arr[j];
                } else{
                    arr[j+1] = temp;
                    break
                }
                if (j==0){
                    arr[0] = temp;
                }
            }
        }
    }
    return arr;
}


arr = [9, 12, 4, 7, 29, 1]

console.log(insertSort(arr))
