function steamrollArray(arr) {
  //let length  = arr.length;
  let out = [];
  for ( let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      out.push(...steamrollArray(arr[i]));//recursive function
      
      } else {
      out.push(arr[i])
           console.log(out)

    }
  }
  console.log(out)
  return out
}  
 

console.log(steamrollArray([1, [2], [3, [[4]]]]));


/* flattenedArray.push(...steamrollArray(arr[i]));
  return arr;
}*/