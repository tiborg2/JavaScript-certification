function sum(arr, n) {
  // Only change code below this line
    if (n <= 0) {
    return 0;
  }
    else {    
        return sum(arr, n - 1) + arr[n-1];
  }
}

//console.log(sum ([1,2,3,4,5,6,7,8], 2))


function countdown(n){
    if (n < 1) {
       return [];  
    }
    else {    
        var out = countdown(n - 1);
        out.unshift(n);
        return out;
    }
  }

//console.log(countdown(5))

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum){ 
        return []
    }
    else if (startNum === endNum){
        return [startNum]
    }
    else{
        var out  = rangeOfNumbers (startNum, endNum - 1);
        out.push(endNum);
        return out;
    }
}
console.log(rangeOfNumbers(1,10))