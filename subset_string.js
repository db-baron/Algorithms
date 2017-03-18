// Takes a string 'abc' and returns an array of all permutations of it (keeping order). So:
// ['abc', 'ab', 'bc', 'ac', 'a', 'b', 'c']
function subset(str, memo, arr){
    if(!memo){ var memo = ""};
    if(!arr){ var arr = []};
    if(str.length === 0){
        arr.push(memo + str)
        return arr;
    };
    subset(str.slice(1, str.length), memo, arr);        // Tree branch to the left
    subset(str.slice(1, str.length), memo + str[0], arr); // Tree branch to the right
    return arr;
}

str = 'abc'
console.log(subset(str));
