function median(values) {
    values.sort( function(a,b) {return a - b;} );
    var midpt = Math.floor(values.length/2);
    // console.log(values.length % 2)
    if(values.length % 2 > 0){
        console.log("Here");
        return values[midpt];
    }
    else{
        return (values[midpt-1] + values[midpt])/2;
    }
}

console.log(median([1,2,3,4,5,105]));
