

//Function converts sting with any separators to array
function splitify(str) {
let out = str.split(/\W/);//Uses Regex for non letter/number characters 
return out;
}
console.log(splitify("Hello World,I-am code"));


/*Function converts string with incorrect separators
 to array and back to string sepatared with " " */
function sentensify(str) {
const arr = str.split(/\W/);
const out = arr.join(" ");
console.log(out);
return out;
}
sentensify("May-the-force-be-with-you");

//Function makes "-" separated string from given string. 
function urlSlug(title) {
  //Making string lowercase and converting to array
  title = title.toLowerCase();
  console.log(title);
  let arr = title.split(" ");
  console.log(arr);
  //removing empty elements fro array if exists
  arr = arr.filter(item => item);
  console.log(arr);
  //Joining array elements to strings using separator "-".
  const out = arr.join("-");
  console.log(out);
  return out;
}
urlSlug(" An Mind  Needs Books Like A  Sword  Needs A Whetstone ");

  