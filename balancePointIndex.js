// Note: THIS CODE IS NOT COMPLETE, CURRENTLY IT RETURNS A BALANCE POINT THAT'S INCLUDED FOR THE SUM OF ONE SIDE
// Example: for [1,2,3,4,10] the function returns the index of 3, when it should return "There is no balance point"
// Example for [1,2,3,3] the function returns there is no balance point when it should return the index of 2.

// Make a function that, returns the index of the element of a list where the sums on either side are equal
function balanceIndex(list){
    if (list.length % 2 != 0){
        var sumL = list[0];
        for (var j = 1; j < list.length - 1; j++){
            sumL += list[j];
        }
        var sumR = list[list.length - 1];
        console.log("OUTER sumL is ", sumL);
        console.log("OUTER sumR is ", sumR);
        if (sumL != sumR){
            for (var i = 1; i < list.length; i++){
                console.log("i = ", i);
                console.log("in the while loop. list[list.length - i -1 ] = ", list[list.length - i - 1]);
                sumL -= list[list.length-1 - i];
                sumR += list[list.length-1 - i];
                console.log("sumL is ", sumL);
                console.log("sumR is ", sumR);
                if (sumL == sumR){
                    console.log("balance point is at index:");
                    return list.length - i - 1;
                }
            return "There is no balance point";
            }
        }
    }
    else {
        return "An even number of elements can't have a balance point."
    }
}

// var x = [1,2,3,4];
var x = [1,2,3,4,7,8,9];
console.log(balanceIndex(x));
