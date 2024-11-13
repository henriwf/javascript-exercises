const sumAll = function(num1, num2) {
    let numAtual = num1;
    let numTotal = num1;

    for (let i = num1; i < num2; i++) {

        numAtual = numAtual + 1;
        numTotal = numTotal + numAtual;
    
        
    }
    return numTotal;
}
        

    




// Do not edit below this line
module.exports = sumAll;
