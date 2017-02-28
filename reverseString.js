function reverseString(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length -1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join("");
}

a = "Yo Mamma"
console.log(reverseString(a));
