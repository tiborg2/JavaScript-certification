function uniteUnique(...inp) {
  const input = [...inp];
  console.log(input)
  const arr = [];
  for (item of input) {//taking all input to one array
    for (let i = 0; i < item.length; i++){
      arr.push(item[i]); 
    }
  }
  console.log(arr)
  
  for (let i = 0; i < arr.length; i++) {//Finds and deletes repeating values
    for (let j = i+1; j < arr.length; j++){
      if (!arr[j]){
        continue
      }
      if (arr[i] === arr[j] ){
        delete arr[j];
      }
    }
  }
  console.log(arr)
  const filtered = arr.filter((num)=> !num == "");//Filters all empty spaces

console.log(filtered)
  
  return filtered;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




