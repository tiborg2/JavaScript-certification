const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
let arr = [];
for ( i = s.length - 1 ; i >= 0; i--){
  let elm = s[i];
  s.pop();
  arr.unshift(elm)
  }
for (i = 0; i < arr.length; i++) {
  let elm = arr[i];
  s.unshift(elm);
  console.log(s)
}
return s;
  
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
console.log(s)