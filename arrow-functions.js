const magic = () => new Date();


const myConcat = (arr1, arr2) => arr2.concat(arr1);

console.log(myConcat([1, 2], [3, 4, 5]));




//default value
const increment = (number, value = 1) => number + value;




const sum = (...args) => args.reduce((a, b) => a + b, 0);
