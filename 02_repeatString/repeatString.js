const repeatString = function(string,num) 
{
    let repeatedString = "";  
    while(num > 0)
    {
        repeatedString += string;
        num--;
    } 
    return repeatedString;
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
