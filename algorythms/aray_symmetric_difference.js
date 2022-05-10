//Symmetric difference between arrays
function diffArray(arr1, arr2) {
  let temp1 = arr1.filter(x => !arr2.includes(x));
  let temp2 = arr2.filter(x => !arr1.includes(x));
 
  let diff = temp1.concat(temp2);
 
  console.log(diff);
    
  return diff;
}

diffArray([1, 0, 3, 5], [1, 0, 3, 4, 5, 6]);
