//Function checks validity of phone number
function telephoneCheck(str) {
  let strSh = str;
  if (/[a-z][A-Z]*/.test(str)){//Checking if letters exist in string
    console.log(false)
    return false
  }
  let count = 0;//Counting number of digits in string
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])){
      count ++
    }    
  }
  console.log(count);
  if (count > 11 || count < 10) {//It can be only 10 or 11 digits in correct string
    console.log(count);
    return false
  } else if (count === 11 && str[0] == 1) {//If there are 11 digits, it must start with 1
    console.log(count, true);
    strSh = str.slice(1)//Declaration of strSh
    strSh = strSh.trim()
  }
  console.log(strSh)
  //Checking 10 digit long string
  if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(strSh)){//Regex check of  phone validity
    let in1 = strSh.indexOf("(");
    let in2 = strSh.indexOf(")");
      console.log(in1, in2)
    if ((in1 === 0 && in2 === 4) || (in1 == -1 && in2 == -1)) {//Checking if "()" exists  and if place of "()" is correct
      console.log(true);
    return true;
    }
  }
  console.log(false);
  return false;
}

console.log(telephoneCheck("(555)-555-5555"));