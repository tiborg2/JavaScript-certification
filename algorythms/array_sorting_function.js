function getIndexToIns(arr, num) {
    arr.sort(function(a, b){return a - b;}); //Sorting. Array of numbers special function.
    console.log(arr)
    if (arr[0] >= num){
        return 0;
    }
    for (let i = (arr.length); i > 0; i--){
        console.log[i];
        if(arr[i] >= num && arr[i-1] < num){
            return i;
        }
    }
    return arr.length;
}
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5))





var numbers = [4, 2, 5, 1, 3, 25];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);


