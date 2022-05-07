function reverseString(str) {
  let out ="";
  for (let i = str.length - 1; i >= 0; i--){
    //console.log (i)
    let char = str[i];
    //console.log (char);
    out = out + str[i];
    //console.log(out)
  }  
  return out;
}

console.log(reverseString("hello"))