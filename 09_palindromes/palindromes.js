const palindromes = function (word) {
    
    const splitword = word.split("");
    
    const cleanWord = splitword.filter ((letter) => letter !== "." && letter !== " " && letter !== "!" && letter !== "?" && letter !== ",").join("").toLowerCase();
    const invertedWord = splitword.filter ((letter) => letter !== "." && letter !== " " && letter !== "!" && letter !== "?" && letter !== ",").reverse().join("").toLowerCase();
    
    return invertedWord == cleanWord;
    
    };

// Do not edit below this line
module.exports = palindromes;
