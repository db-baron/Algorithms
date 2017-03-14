
function flatten(arr){
    newarr = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof(arr[i]) == 'number'){
            newarr.push(arr[i]);
        }
        else if (arr[i].length != undefined){
            for (var x = 0; x < arr[i].length; x++){
                console.log("There", arr[i][x]);
                newarr.push(arr[i][x]);
            }
        }
    }
    return newarr;
}


x = [1,[2,3,4], 5];
console.log(flatten(x));
