const convertToCelsius  = function(tempF) {
  let converted = (tempF - 32) * 5 / 9;
  converted = Math.round(converted*10)/10;
  return converted;
};

const convertToFahrenheit = function(tempC) {
  let converted = tempC * 1.8 + 32;
  converted = Math.round(converted*10)/10;
  return converted;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
