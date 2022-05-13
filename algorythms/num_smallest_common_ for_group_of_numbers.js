function smallestCommons(arr) {
  
  let [first, last] = arr.sort((a, b) => a - b);
  let elementNum = last - first + 1;
  let upLim = 1;
  for (let i = first; i <= last; i++) {
    upLim *= i;
    console.log(upLim)
  }
  for (let multiple = last; multiple <= upLim; multiple += last) {
    let divCounter = 0;
    for (let i = first; i <= last; i++) {
      if (multiple % i === 0) {
        divCounter += 1;
      }
    }
    if (divCounter === elementNum) {
      return multiple;
    }
  }
}
console.log(smallestCommons([23, 18]));