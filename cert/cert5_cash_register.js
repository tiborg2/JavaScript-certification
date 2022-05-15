function checkCashRegister(price, cash, cid) {
  const VALUES = [["PENNY", 1], ["NICKEL", 2],
                 ["DIME", 10], ["QUARTER", 25],
                 ["ONE", 100], ["FIVE", 500],
                 ["TEN", 1000], ["TWENTY", 2000],
                 ["ONE HUNDRED", 10000]]; //Using values x100(in cents) to avoid float calculations 
  
  //console.log(VALUES[7][0], VALUES[7][1])
  let out = {status: "INSUFFICIENT_FUNDS", change: []};//Default return
  let graza = Math.round(cash*100) - Math.round(price*100) //Avoiding float. Calculating in cents.
  console.log(graza)
  let kasoje = {};//cashOnHand
  let grazinti = {};

  cid.forEach((value) => {kasoje[value[0]] = Math.round(value [1]*100)})

  console.log(kasoje)
  let i = VALUES.length - 1; 
  while(i >= 0 && graza > 0) {
    let verte = VALUES[i];
    console.log(verte, verte[0])
    if( graza - verte[1] > 0 && kasoje[verte[0]], graza){
      console.log (graza - verte[1]);
      grazinti[verte[0]] = 0;
      console.log(grazinti)
      while(kasoje[verte[0]] > 0 && graza - verte[1] >= 0){
        console.log(kasoje)
        kasoje[verte[0]] -= verte[1];
        graza -= verte[1];
        grazinti[verte[0]] += verte[1];
        console.log(grazinti[verte[0]], verte[1])
        console.log(grazinti)
      }
    }
    i--; //Frik'n while loop indexer!  
  }

  if (graza === 0){
    
    let kasaTuscia = true;
    console.log(kasoje)
    Object.keys(kasoje).forEach((pinigas) =>{//Checking if there are money in the register
      if (kasoje[pinigas] > 0) {
        kasaTuscia = false;
      }
      console.log(kasoje[pinigas], pinigas)
    });
    
    if (kasaTuscia){
      out = {status: "CLOSED", change: cid};
      console.log(out);
      return out;
    } else{
    
    let temp = [];
    console.log(grazinti)
    Object.keys(grazinti).map((moneta) =>{
      if (grazinti[moneta] > 0){
        console.log(moneta, grazinti[moneta])
        temp.push([moneta, grazinti[moneta] / 100]);//Getting back to dollars from cents.
        console.log(temp)
      }
      console.log(moneta, grazinti[moneta], temp)
    });
    out = {status: "OPEN", change: temp};
    return out
    }
  }
  return out
}

/*console.log(checkCashRegister(19.5, 20,
  [["PENNY", 1.01],
   ["NICKEL", 2.05],
   ["DIME", 3.1],
   ["QUARTER", 4.25],
   ["ONE", 90],
   ["FIVE", 55],
   ["TEN", 20],
   ["TWENTY", 60],
   ["ONE HUNDRED", 100]]));*/

   let result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
   console.log(result)