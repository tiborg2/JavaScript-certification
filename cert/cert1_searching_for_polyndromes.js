//Function searches  for poliyndromes excluding non-alphanumerical characters
function palindrome(str) {
  let arr = [];
  let input = str.toLowerCase();
    console.log(input)
    for (char of input){
    if (/\w/.test(char) && char != "_")//Clearing non-alphanumerical characters and forming array
    arr.push(char);
    console.log(arr)
  }
  let arrRev = []
  for (item of arr) {//Forming reversed array
    arrRev.unshift(item)
  }
  console.log(arr, arrRev)

  if (JSON.stringify(arr) === JSON.stringify(arrRev)){//Array to JSON string. Fastest way to compare arrays
    //console.log(JSON.stringify(arr))
    //console.log(JSON.stringify(arrRev))
    return true
  }

  return false;
}

console.log(palindrome("1 eye for of 1 eye."))