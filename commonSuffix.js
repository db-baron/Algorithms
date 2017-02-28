// Find a common suffix between all elements of an array if it exists, if one doesn't exist then return ""
function commonSuf(arr) {
    // var counter = 0;
    // for (var i = 0; i < arr.length - 1; i++) {
    //     for (var x = i + 1, x < arr.length, x++) {
    //         if i == x {
    //             counter ++;
    //         }
    //     }
    // }
    // if counter == str.length {
    //     return "All elements are the same"
    // }
    var list = [];
    var i = 0;
    var suf = "";
    var sorted = arr.sort();
    // console.log(sorted[sorted.length-1])
    while (i <= sorted[sorted.length-1].length) {
        // If we get the second to last element of the array then stop
        for (var j = 0; j < arr.length-2; j++){
            // If we don't have a match
            // console.log("Before the if statement. arr[j] is: ", arr[j])
            console.log("Before the if statement. arr[j][arr[j].length-i] is: ", arr[j][arr[j].length-i])
            if (arr[j][arr[j].length-i] != arr[j+1][arr[j+1].length-i]) {
                list = list.sort();
                return "Longest common suffix is", suf;
            }
        }
        console.log("Hit the second to last, which is", arr.length-2)
        suf += (arr[0][arr[0].length-1-i]);
        i++;
    }
    return suff
}
var array = ['dogs', 'ogs', 'daggogs', 'uggggggogs'];
console.log(commonSuf(array));
