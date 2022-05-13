//Calculates sum of odd Fibonacci numberst less or equal to defined number
function sumFibs(num) {
  if (num <= 1){
    return num;
  }
  let a1 = 0;
  let a2 = 1;
  let arr = [];
  for (let i = 1; i <= num; i++) {//generating Fibonacci sequence where last number less or equal to number
    console.log(a1);
    nextElm = a1 + a2;
    arr.push(a2)
    a1 = a2;
    a2 = nextElm;
    console.log(arr)
    if (nextElm > num) {
      break
    }
  } 
  let out = arr
    .filter((num) => num%2)//filtering sequence for odd numbers
    .reduce((sum, num) => sum + num); //sum of all members
    console.log(out)
  
  
  /*const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6
 */ 
  return out;
}

sumFibs(3);


