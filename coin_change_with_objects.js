function coinChange(num) {
    var nobj = {'Q':0, "D":0, "N":0, "P":0};

    while (num > 0) {
        if (num % 25 == 0) {
            nobj['Q'] += 1;
            num -= 25;
        }
        else if (num % 10 == 0) {
            nobj['D'] += 1;
            num -= 10;
        }
        else if (num % 5 == 0) {
            nobj['N'] += 1;
            num -= 5;
        }
        else if (num % 5 !== 0) {
            nobj['P'] += 1;
            num -= 1;
        }
    }
    return nobj
}
console.log(coinChange(31));
