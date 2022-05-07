function titleCase(str) {
  //Converting str to lowercase array.
  let strl = str.toLowerCase();
  let arr = strl.split(" ");
  let carr =[];
  let char = "";
  //Making array from first letters and converting them to uppercase.
  for (let i = 0; i < arr.length; i++) {
    char = arr[i][0].toUpperCase();
    carr.push(char);
  }

  console.log(arr, arr[0][0])
  console.log(carr)
  //Making array of words starting with uppercase.
  let warr = [];
  let w = "";
  let cword = "";
  let arrO = [];
  for (i = 0; i < arr.length; i++){
    let w = arr[i].slice(1);
    cword = `${carr[i]}${w}`;
    arrO.push(cword);
    console.log(cword)
  }
  console.log(arrO);
  //Connecting words to new string and trimming unnecessary spaces.
  let out = "";
  for (i = 0; i < arrO.length; i++){
    out += arrO[i]
    out += " ";
    console.log(out)
  }
  out = out.trim();
  return out;
}

titleCase("I'm a little tea pot");