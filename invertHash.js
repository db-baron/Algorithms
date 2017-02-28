// OBjective is to swap every key and value in an object (aka hash aka associative array)
function invertHash(dict) {
    for (x in dict) {
        var temp = dict[x];
        var temp2 = x;
        dict[temp] = temp2;   // Create new key called temp and assign it the value temp2
        delete dict[x];
    }
    return dict;
}

var my_dict = {"A":1, "B":2, "C":3};
console.log(invertHash(my_dict));
