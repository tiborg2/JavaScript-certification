function largestOfFour(arr) {
  
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    let c = arr[i][0];
    for (let j = 0; j < arr[i].length; j++){
      if ( c < arr[i][j]){
        c = arr[i][j];
      }
    }
    out.push(c);
  }
  console.log(out)
  return out;
  
}

largestOfFour([[4, 5, 1, 10], [13, 27, 18, 26], [32, 10, 37, 39], [-10100, -101, -857, -1000]]);
