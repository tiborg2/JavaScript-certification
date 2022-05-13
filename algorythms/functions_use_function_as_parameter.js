



function dropElements(arr, func) {
  if (arr.length == 0 ){
    return arr;
  }
  let out = arr.slice();
  //console.log(out);
  //let length  = arr.length;
  //console.log (out.length, length)
  for (let i = 0; i < arr.length; i++){
    if(func(out[0]) == false){//!!! out[0] NOT out[i] !!! becouse after shift second element becomes first
      out.shift();
      console.log(out)
      
    } else{
      console.log (out[i]);
      break
    }
  }
    console.log(out)
    return out;
}

console.log(dropElements([1, 2, 3], function(n) {return n >= 1; }));



/*function dropElements(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}*/
