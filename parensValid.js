// Find if there are any unmatched ( or ) characters in a string
function parensValid(s) {
    var str = s;
    var new_arr = str.split("");
    var unmatched_paren = false;
    for (var i = 0; i < new_arr.length; i++) {
        if (new_arr[i] == "(" ) {
            for (var j = 0; j<new_arr.length; j++) {
                while (new_arr[j] != ")") {
                    removeAt(new_arr, j);
                    console.log("inner remove", new_arr);
                }
            removeAt(new_arr, i);
            console.log("outer remove", new_arr);
            }
        }
    }

    for (var x=0; x<new_arr.length; x++) {
        if (new_arr[x] == "()" || new_arr[x] == "}") {
            unmatched_paren = true;
        }
        return unmatched_paren;
    }
}

console.log(parensValid("a(sd(d)v"));
