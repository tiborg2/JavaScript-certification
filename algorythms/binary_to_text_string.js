//Function converts binary to text
function binaryAgent(str) {

  let binArr = str.split(' ')//Making binary array
  let decArr = [];
  //console.log(binArr);
  for(let  i = 0; i < binArr.length; i++){//Making decimal array
    let decimal = parseInt(binArr[i], 2);
    //console.log(decimal);
    decArr.push(decimal);
    //console.log(decArr)
  }
  let outArr = [];
  for (let i = 0; i < decArr.length; i++){//forming characters' array
    outArr.push(String.fromCharCode(decArr[i]));
    //console.log(outArr)
  }
  console.log(Array.isArray(outArr))
  let out = outArr.join("");//Joining array to characters' string
  console.log(out)


  return out;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


