//Checks and filters aray for positive numbers.
function checkPositive(arr) {
 return arr.every((item) => item > 0);
 }

console.log(checkPositive([1, 2, 3, -4, 5]));


//Checks if there is at least one positive element inside array.
function checkPositive(arr) {
  return arr.some((item) => item > 0)
}

checkPositive([1, 2, 3, -4, 5]);