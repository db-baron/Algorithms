// Make a function that returns true if a list can be divided in two such that the sum of the left half equals the sum of the right half.
function balancePoint(list){
    var sumL = list[0];
    for (var j = 1; j < list.length - 1; j++){
        sumL += list[j];
    }
    var sumR = list[list.length - 1];
    if (sumL != sumR){
        for (var i = 1; i < list.length; i++){
            console.log("in the while loop. list[list.length - i -1 ] = ", list[list.length - i - 1]);
            sumL -= list[list.length-1 - i];
            sumR += list[list.length-1 - i];
            console.log("sumL is ", sumL);
            console.log("sumR is ", sumR);
            if (sumL == sumR){
                return true;
            }
        return false;
        }
    }
}

// var x = [1,2,3,4];
var x = [1,2,3,4,7,8,9];
console.log(balancePoint(x));
