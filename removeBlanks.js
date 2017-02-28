// Remove all blanks from a string
function removeBlanks(str) {
    var newarr = str.split(" ");
    // console.log(newarr);
    var new_str = newarr.join("");
    return new_str;
}

var p = "Pl   ay   T  hat   Funk   y  Mus    ic";
console.log(removeBlanks(p));
