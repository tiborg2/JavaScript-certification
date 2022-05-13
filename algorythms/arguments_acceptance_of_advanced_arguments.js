function addTogether() {
  const [arg1, arg2] = arguments;
  console.log (arg1, arg2);
  if (typeof(arg1) !== "number"){
    console.log("there");
    return undefined;
  };
  if (arg2 === undefined){
    console.log("there");
    return (arg2) => addTogether(arg1, arg2)
  };
  if (typeof(arg2) !== "number") {
    console.log("there");
    return undefined;
  }
    return arg1 + arg2;
  
}



console.log(addTogether(18));