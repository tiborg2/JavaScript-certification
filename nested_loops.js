function multiplyAll(arr) {
  var product = 1;
  var x = 0;
  var y = 0;
  for(x=0; x < arr.length; x++) {
    for (y=0; y < arr[x].length; y++) {
      product *= arr[x][y];
    }
  }
  console.log(product);
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);