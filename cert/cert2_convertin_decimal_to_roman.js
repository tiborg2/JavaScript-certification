//Function converts decimal number <4000 to Roman numbers 
function convertToRoman(num) {
//Object map decimal numbers to convert to Roman numbers 
  const numRoman = {
  single: {
    "0": "", "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX"
  },
  tenth: {
    "0": "", "1": "X", "2": "XX", "3": "XXX", "4": "XL", "5": "L", "6": "LX", "7": "LXX", "8": "LXXX", "9": "XC"
  },
  hundred: {
    "0": "", "1": "C", "2": "CC", "3": "CCC", "4": "CD", "5": "D", "6": "DC","7": "DCC", "8": "DCCC", "9": "CM"
  },
  thousand: {
    "1": "M", "2": "MM", "3": "MMM"}
}
//console.log(numRoman.thousand[1])
  const str = num.toString();
  let temp = [];
  for (i = str.length-1; i >= 0; i--) {//Convering string to backvard array 
    temp.push(str[i]);
    console.log(temp)
  }
  let arr = [];
//console.log(arr);
  for (let i = 0; i < temp.length; i++) {
    let element = temp[i];
    //console.log(element, i)
    if (i == 0) { //if for choosing appropriate element from Object and pushing it to array
      arr.push(numRoman.single[element]);
    };
    if (i == 1) {
      arr.push(numRoman.tenth[element]);
    };
    if (i == 2) {
      arr.push(numRoman.hundred[element]);
    };
    if ( i == 3 ){
      arr.push(numRoman.thousand[element]);
    };
  }
  console.log(arr);
  let out = ""
  for (let i = arr.length-1; i >= 0; i--){//Forming backwards string from array
    out += arr[i] 
  }
//console.log(out)
  return out;
}
 
convertToRoman(1004);