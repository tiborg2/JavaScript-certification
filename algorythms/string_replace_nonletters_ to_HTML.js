function convertHTML(str) {
  
  let arr = str.split("");//converting str to arr.
  for (let i = 0; i < arr.length; i++) {//constructing array with replacements
    //console.log(arr[i]);
    if (/\W/.test(arr[i]) && arr[i] != " "){
      let x = arr[i];
      let rpl = switcher(x);//taking replacement
      arr.splice(i, 1, rpl);
    }
  }
  let out = arr.join("");//Joining arr to new string.
  function switcher (x){
    switch(x){
      case "&":
        y = "&amp;";
        break
      case "<":
        y = "&lt;";
        break
      case ">":
        y = "&gt;";
        break
      case '"':
        y = "&quot;"
        break
      case "'":
        y = "&apos;"
    }
    return y
  }
  console.log(out)
  return out
}
convertHTML('Stuff in "quotation marks"');