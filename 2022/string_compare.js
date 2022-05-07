function confirmEnding(str, target) {
  let strLength = str.length;
  let tLength = target.length;
  let dif = 0;
  if ( strLength >= tLength) {
    dif = strLength - tLength
  }
  let slice = str.slice(dif)
  console.log(strLength, tLength, slice)
  if (slice == target){
    return true
  }
  else{
    return false
  }
  
  
  /*
  let arr = str.split(" ")
  let arrayLength = arr.length - 1;
  let lastWLength = arr[arrayLength].length

  let targetLength = target.length;
  console.log(arrayLength, lastWLength, targetLength)

  console.log(arr);
  console.log(arr)
  */
}

console.log(confirmEnding("Bastian", "an"));
