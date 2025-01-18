const palindromes = function (word) {

    const splitword = word.split("");
    const invertedWord = splitword.filter ((letter) => letter !== "." && letter !== "!" && letter !== "?").toLowerCase().reverse().join("");
    
    return inventedWord == word;
    
    };

// Do not edit below this line
module.exports = palindromes;
