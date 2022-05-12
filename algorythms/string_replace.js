//Function modifies string. Repacement depends on Upper/Lower case of replacable string.
function myReplace(str, before, after) {
  let mod = modifyStr(before, after)
  console.log (mod);
  
  function modifyStr (before, after){
    if (/[A-Z]/.test(before[0])){
      let char = after [0];
      char = char.toUpperCase();
      let str = after.slice(1);
      console.log(char, str);
      return `${char}${str}`
    } else{
      let char = after [0];
      char = char.toLowerCase();
      let str = after.slice(1);
      console.log(char, str)
      return `${char}${str}`;
    }
  }

  let out = str.replace(before, mod);
  console.log (out);
 
  return out;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");