const findTheOldest = function(array) {
  
    const updatedArray = array.map(person => ({
        ...person,
        age: person.yearOfDeath 
          ? person.yearOfDeath - person.yearOfBirth 
          : new Date().getFullYear() - person.yearOfBirth
      }));

      const orderedArray = updatedArray.sort((a, b) => a.age > b.age ? 1 : -1);
      
      return orderedArray[orderedArray.length-1];
    


};

// Do not edit below this line
module.exports = findTheOldest;
