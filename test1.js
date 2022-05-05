function solution(number) {
    var x = 0
    for (i = 3; i < number; i++){
      // console.log(i);  
      if (i % 3 === 0 || i % 5 === 0) {
        x += i;        
      }
    }    
    return x
  }

console.log(solution(10))



