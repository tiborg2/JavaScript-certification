function countOnline(usersObj) {
  // Only change code below this line
  let number = 0;
  for (let user in usersObj){
    if (usersObj[user].online == true){
      number++;
    }
  }
  console.log(number);
  return number;
    // Only change code above this line
}