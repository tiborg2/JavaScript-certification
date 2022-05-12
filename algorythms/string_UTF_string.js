const squareList = arr => {
  // Only change code below this line
    const sqrArr = arr
      .filter((num) => num > 0 & Number.isInteger(num) == true )
      .map((num) => num*num)
  
  return sqrArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);




function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1; //if a===b same position, a<b stays before b. 
    });
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

function reverseOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1; //if a===b same position, a<b stays before b. 
    });
  // Only change code above this line
}

console.log(reverseOrder(["a", "d", "c", "a", "z", "g"]));
