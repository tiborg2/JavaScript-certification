
//Function finds missing letters to formate alphabeticaly correct string. 
function toUTF(string) {
  let arr = string.split("");
  arr.sort();
  console.log(arr)
  let abc  = arr.join("")//alphabeticaly sorted string
  let out = "";
  for (let i = 0; i < abc.length-1; i++) {
    if (abc.charCodeAt(i)+1 != abc.charCodeAt(i+1)) {//finding "holes", using UTF-8 characters.
      let abc1 = abc.charCodeAt(i);
      let abc2 = abc.charCodeAt(i+1);
      let round = abc2 - abc1;//calculating how much chars are missing
      console.log(abc1, abc2, round)
        for (let i = 1; i < round; i++){
          let check = abc1+i;
          out = out + String.fromCharCode(check);//finding missing characters
          console.log(out)
        }
      } 
    }

  if (!out){
    return undefined
  };
  return out;
}

console.log(toUTF("fhjklqmosptigzwuxyr"))



str = "ThisIsSpinalTap"
str = str.replace(/([a-z])([A-Z])/g, "$1 $2");


console.log(String.fromCharCode(121))