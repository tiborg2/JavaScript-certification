function findLongestWordLength(str) {
  let text = str.split(" ");
  let check = 0;
  for ( i = 0; i < text.length; i++) {
    if (check < text[i].length){
      check = text[i].length;
    }
  }
return check;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");