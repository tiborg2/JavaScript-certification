function destroyer(args, ...num) {
  const temp = num
  const out  = args.filter(x =>!temp.includes(x));
  console.log(temp);
  console.log(out)
  return out;
}

destroyer([1, 2, 3, 1, 2, 3], 1);



function whatIsInAName(collection, source) {
  const compareKeys = Object.keys(source);
  console.log(compareKeys);
  // Only change code below this line
  const filtered = collection
    .filter(obj => compareKeys
                    .every(key =>obj.hasOwnProperty(key) && obj[key] === source[key])); 
  console.log(filtered)
  return filtered
  // Only change code above this line
  }

whatIsInAName([{ first: "Romeo", last: "Montague" },
 { first: "Mercutio", last: null },
 { first: "Tybalt", last: "Capulet" }],
 { last: "Capulet" });



 const sourceKeys = Object.keys(source);

  /*return collection
    .filter(obj => sourceKeys
                     .every(key => obj.hasOwnProperty(key) &&
                            obj[key] === source[key]));
*/

