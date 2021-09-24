function reverseString(str) {
  let arr = str.split('');
  arr.reverse();
  str = arr.join('');
  //console.log(arr, str)
  return str;
}

reverseString("hello");