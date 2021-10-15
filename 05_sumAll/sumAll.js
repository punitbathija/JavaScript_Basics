const sumAll = function(a,b) {
    let sum=0;
    for(i = a; i <= b; i++)
    {  
        sum +=i ;
    }
    return sum;
};

sumAll(10,100);

// Do not edit below this line
module.exports = sumAll;
