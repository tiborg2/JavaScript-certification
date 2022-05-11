
//Function finds if string statrts with vowel or consonant and modifies str accordigly
function translatePigLatin(str) {
  //First letter check and calling relevant function
  if (/[aeiou]/i.test(str[0])){ //Regex check if vowel.
    return vowel(str);
    } else{
      return consonant(str);
  }
  //Function removes starting row of consonants and adds it to the back of string + string "ay".
  function consonant(str){
    let count = 1;
    for (i = 1; i < str.length; i++){//counts how large first consonants' string is.
      if( !/[aeiou]/i.test(str[i])) {
        count++;
        console.log(count);
      } else{
        break
      }
    };
    let temp =  str.slice(0, count);
    let temp1 = str.slice(count);


  console.log(str[0], temp, temp1);
    let out = `${temp1}${temp}ay`//Forms new string
    console.log(out)
    return out
  }
  //Function adds string "way" to the end of str.
  function vowel (str){
    let out = `${str}way`;
    console.log(str[1], out);
    return out
  }
}

console.log(translatePigLatin("Bconsonant"));


function isVowelRegEx(char) {
  if (char.length == 1) {
    return /[aeiou]/.test(char);
  }
}




const str = "Johanesburgh"
txt = str.slice(0, 2);
txt2 = str.slice (2)
out = txt2.concat("", txt)
console.log(txt, txt2, out)
