// Return true if all brackets and parenthesis in a list match and have the correct format.
function bracket(arr) {
    var newarr = [];
    // Check easy end cases of the first bracket being a right, or if the arr had an odd number of elements
    if ((arr[0] == "}" || arr[0] == ")" || arr[0] == "]") || (arr.length % 2 == 1)) {
        return false
    } else {
        newarr.push(arr[0]);
    }
    for (var i = 1; i < arr.length; i++){
        console.log("on iteration " + i + "    , newarr is " + newarr + "     , arr[i] is " + arr[i])
        if (arr[i] == "}" || arr[i] == ")" || arr[i] == "]"){
            if ((newarr[newarr.length-1] == "{" && arr[i] == "}") ||  // If last bracket in newarr complements a right bracket (arr[i]), pop the bracket from the new array
                (newarr[newarr.length-1] == "[" && arr[i] == "]") ||
                (newarr[newarr.length-1] == "(" && arr[i] == ")") ){

                newarr.pop();
                continue  // Move on to the next i in the for loop (so you don't get to newarr.push.arr[i])
            } else {
                return false;
            }
        }
        newarr.push(arr[i]); // if the bracket is a left, then it gets pushed to newarr
        console.log("Now newarr is ", newarr);
    }
    if (newarr.length == 0){
        return true;
    }
}

var my_arr = ["{", "{", "}", "[", "]", "}"] // Should return true
console.log(bracket(my_arr));
