const fibonacci = function(num) {

let convNum = num.toString();
let sequence = [];
let prevNum = 0;
let curNum = 1;
sequence.push(curNum);

if (convNum == 0) return 0;
if (convNum < 0) return "OOPS";


for (let i = 1; i < convNum; i++) {

    curNum = curNum + prevNum;
    sequence.push(curNum);
    prevNum = curNum - prevNum;

  }

return sequence[sequence.length-1];


};

// Do not edit below this line
module.exports = fibonacci;
