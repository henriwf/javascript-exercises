const palindromes = function (word) {

    const splitword = word.split("");
    const invertedWord = splitword.filter ((letter) => letter !== "." && letter !== "!" && letter !== "?").reverse().join("").toLowerCase();
    
    return invertedWord == word;
    
    };

// Do not edit below this line
module.exports = palindromes;
