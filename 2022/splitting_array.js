function chunkArrayInGroups(arr, size) {
  //Conditions when function does not need to do anything
  if (arr.length <= size | size == 0){
    return arr
  }

  let out = [];
  //Counting rounds of large "for" loop forming 1st stage of 2D array.
  //Only for full size small arrays.  
  let rounds = arr.length/size;
  for( i = 1; i <= rounds; i++) {
    let tmp = [];
  
  //Forming parts(amall arrays) for 2nd stage of 2D array.  
    for (j = 0; j < size; j++){
      let elm = arr.shift();
      tmp.push (elm);
      console.log(elm, tmp);
    }
  //Pushing small arrays.  
    out.push(tmp);
    
    console.log(out)
     
    }
  //If sometfing left in primary array, pushing it to
    console.log(arr)
  if (arr.length > 0) {
    //let tmp1 = [];
    //tmp1.push(arr);
    out.push(arr)
  } 
  console.log(out);
  return out
}


console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i", "f"], 2));