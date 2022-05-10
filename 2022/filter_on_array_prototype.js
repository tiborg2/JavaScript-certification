// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
      if (callback (this[i]) === true) {
        newArray.push(callback(this[i]));
      }
  }

  // Only change code above this line
  console.log(newArray);
  return newArray;
  
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
console.log(new_s)