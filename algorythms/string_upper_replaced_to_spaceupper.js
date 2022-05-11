//Function makes "-" separated string from given string. 
function spinalCase(str) {
  let title = str.replace(/([a-z])([A-Z])/g, "$1 $2"); //replaces Uppercase X to space+X
  title = title.toLowerCase();
  title = title.replace(/_/g, " ");
  console.log(title);
  let temp = title.split(" ");
  //Joining array elements to strings using separator "-".
  let out = temp.join("-");
  console.log(out);
  return out;
}
spinalCase('This Is Spinal_Tap');
//str.replace(/([a-z])([A-Z])/g, "$1 $2") ;