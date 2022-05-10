//Finds sum of all numbers in array from given first and last numbers. 
function sumAll(arr) {
  if (arr[0] == arr[1]) {
    return arr [0]*2;
  } else if (arr[0] > arr[1]) {
      var first = arr[1];
      var second = arr[0];
  } else {
      var first = arr[0];
      var second = arr[1];
  }
  let out = [];
  for (let i = first; i <= second; i++){
    out.push(i);
    console.log(out);
  } 
  return out.reduce((sum, item)  => sum + item);
  
}

console.log(sumAll([155, 100]));