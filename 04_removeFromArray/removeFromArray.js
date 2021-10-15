const removeFromArray = function (...args) 
{
    const array = args[0];
    const newArray = [];
    array.forEach((item) => 
    {
      if (!args.includes(item)) 
      {
        newArray.push(item);
      }
    });
    return newArray;    
}
    removeFromArray([1,2,3,4],3);
// Do not edit below this line
module.exports = removeFromArray;
