function frankenSplice(arr1, arr2, n) {
  let out = arr2.slice();
   out.splice(n, 0, ...arr1);
  console.log(out);
  return out;
  
  
  
  /*
  let arr3 = [];
  let elm = undefined;
  let position = arr2.length - n;
  console.log(position);
  for (i = 0; i < position; i++){
    elm = arr2.pop();
    arr3.unshift(elm);
  } 
  console.log(arr3, arr2)
  elm = undefined;
  for (let i = 0; i < arr1.length; i++) {
    elm = arr1[i];
    arr2.push(elm);
  }
  elm = undefined;
  for (let i = 0; i < arr3.length; i++) {
    elm = arr3[i];
    arr2.push(elm);
  } 
  console.log(elm, arr3, arr2);
  return arr2;*/
}

console.log(frankenSplice([1, 2, 3], [8, 9, 10], 3));