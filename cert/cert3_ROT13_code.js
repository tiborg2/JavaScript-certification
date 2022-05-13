//Function to code string with ROT13 code uppercase letters only
function rot13(str) {
  let out = "";
  for (let i = 0; i < str.length; i++){//checking all elements of string
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
      let code = str.charCodeAt(i) + 13;//checking if letters from A to M and shifting their UTF code by 13 
      out += String.fromCharCode(code);
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90 ) {
      let code = str.charCodeAt(i) - 13;//checking if letters from N to Z and unshifting their UTF code by 13
      out += String.fromCharCode(code)
    } else {
      out += str[i]//other element remain unchanged
    }
}
  console.log(out)
  return out;
}




//rot13("SERR PBQR PNZC");
//rot13("SERR CVMMN!")

//rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")




