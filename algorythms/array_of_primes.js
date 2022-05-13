//Function calculates sum of primes from 2 to given number
function sumPrimes(num) {
  if (num <= 1 ) {// number 1 is not prime 
    return 0
  }
  if (num === 2) {
    return 2
  } else if ( num === 3 ){
    return 5
  }

  function isPrime (x) {//Checking if prime
    for (let i = 2; i <= x/2; i++){
      if (x % i === 0){
        return false
      }
    };
    return true;  
  };
  
  const arr = [2, 3];
  let x = 5;
  while (x <= num){//generating array of primes
    if (isPrime(x)){
      arr.push(x);
    }
    x++
  }    
  console.log(arr)  
  let out = arr.reduce((sum, num) => sum + num);//Sum of all array's elements
  console.log(out);
  return out;
}

console.log(sumPrimes(11));

/*

const isPrime = (n) => {
  for(let i = 2; i <= n/2; i++){
     if(n % i === 0){
        return false;
     }
  };
  return true;
};
const generatePrime = num => {
  const arr = [];
  let i = 2;
  while(arr.length < num){
     if(isPrime(i)){
        arr.push(i);
     };
     i = i === 2 ? i+1 : i+2;
  };
  return arr;
};
console.log(generatePrime(6));
console.log(generatePrime(16));
console.log(generatePrime(36));
*/