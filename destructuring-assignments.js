const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;




//Returns array without first two members.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) { 
    "use strict"; 
    const [a, b, ...arr] = list;
    console.log(arr);
    return arr;
}
const arr = removeFirstTwo(source);


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) => (max + min) / 2;