// Check if all brackets and parenthesis in a list match in the correct format.

function bracket(arr) {
    var newarr = [];
    if (arr[0] == "}" || arr[0] == ")" || arr[0] == "]"){
        console.log("here", arr.length%2);
        return false
    } else {
        newarr.push(arr[0]);
    }
    for (var i = 1; i < arr.length; i++){
        // console.log("i = ", i);
        // console.log("arr[i] = ", arr[i]);
        // console.log("newarr is = ", newarr);
        console.log("on iteration " + i + ", newarr is " + newarr + ", arr[i] is " + arr[i])
        if (arr[i] == "}" || arr[i] == ")" || arr[i] == "]"){
            if ((newarr[newarr.length-1] == "{" && arr[i] == "}") ||
                (newarr[newarr.length-1] == "[" && arr[i] == "]") ||
                (newarr[newarr.length-1] == "(" && arr[i] == ")") ){

                newarr.pop();
                continue
            } else {
                return false;
            }
        }
        newarr.push(arr[i]);
        // console.log("newarr.length = ", newarr.length);
    }
    if (newarr.length == 0){
        return true;
    }
}

var my_arr = ["{", "{", "}", "[", "]", "}"]
console.log(bracket(my_arr));
