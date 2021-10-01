function frankenSplice(arr1, arr2, n) {
    let part1 = arr2.slice(0, n);
    let part2 = arr2.slice(n);
    let result = part1.concat(arr1, part2);
    return result;
  }
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
