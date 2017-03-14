// Use recursion to return the sum of all integers from 1 to a number.
// So 5 sigma would be  1 + 2 + 3 + 4 + 5 = 15
function rSigma(n){
    if (n % 1 != 0){
        Math.floor(n);
    }
    if (n === 1){
        return 1;
    }
    return rSigma(n-1)+n;
}

var n = 5;
console.log(rSigma(n));
