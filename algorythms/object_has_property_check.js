function truthCheck(collection, pre) {
  let length  = collection.length;
  let count = 0;
  for (let item in collection) {
    if (collection[item].hasOwnProperty(pre) && Boolean(collection[item][pre])){
      console.log(Boolean(collection[item][pre]))
      count ++;
      console.log(count)
    } 
  }
  if (length == count){
    console.log(true)
    return true;
  } else{
    console.log(false)
    return false
  }
}

truthCheck([{name: "Quincy", role: "Founder", isBot: true},
 {name: "Naomi", role: "", isBot: true},
  {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

