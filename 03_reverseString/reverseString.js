const reverseString = function(str) {
    let splitArray = str.split("");
    let reversedArray = splitArray.reverse();
    let joinedArray = reversedArray.join("");
    let newString = joinedArray.toString();
    return newString;
};
reverseString("Hello World");

// Do not edit below this line
module.exports = reverseString;
