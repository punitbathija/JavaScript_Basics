const ftoc = function(f) 
{
  return Math.round((f - 32) / 1.8);
};

const ctof = function(c) 
{
  return Math.round((c * 1.8) + 32);
};
ftoc(125);
ftoc(-2);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
