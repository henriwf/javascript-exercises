const add = function(num1, num2) {
	return num1 + num2;
};
// finished

const subtract = function(num1, num2) {
	return num1 - num2;
};
// finished

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};
// finished

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};
// finished

const power = function(num1, num2) {
	return num1 ** num2;
};
// finished

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
