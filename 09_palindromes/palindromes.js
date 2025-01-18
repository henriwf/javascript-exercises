const palindromes = function (word) {

    const splitword = word.split("");
    const removedSpChar = splitword.filter ((letter) => letter !== "." && letter !== "!" && letter !== "?").reverse();
    const comparison = removedSpChar.join();
    
    if (word == comparison) {
        return true
    }
    
    };

// Do not edit below this line
module.exports = palindromes;
