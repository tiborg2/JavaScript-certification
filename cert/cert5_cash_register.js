function checkCashRegister(price, cash, cid) {
  
  let filtered = cid.filter(elem => elem[1] !== 0).reverse();
  let kasoje = [];
  
  kasoje  = filtered.map((elem) => { //Avoiding float calculation shenanigans
    kasoje.push(elem[0])
    kasoje.push(Math.round(elem[1]*100))
    return kasoje
  });    
  let out = {status: "INSUFFICIENT_FUNDS", change: []};//Default return


  //console.log(kasoje)


  
  let graza = Math.round(cash*100) - Math.round(price*100) //Avoiding float. Calculating in cents.
  
  //let kasoje = {};//cashOnHand
  let grazinti = {};

  cid.forEach((value) => {kasoje[value[0]] = Math.round(value [1]*100)})
  return out
}

let result = checkCashRegister(19.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
 ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
   console.log(result)


/*   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
 ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
*/
  /*let i = VALUES.length - 1; 
  while(i >= 0 && graza > 0) {
    let verte = VALUES[i];
    
    if( graza - verte[1] > 0 && kasoje[verte[0]], graza){
      grazinti[verte[0]] = 0;
      
      while(kasoje[verte[0]] > 0 && graza - verte[1] >= 0){
        kasoje[verte[0]] -= verte[1];
        graza -= verte[1];
        grazinti[verte[0]] += verte[1];
      }
    }
    i--; //Frik'n while loop indexer!  
  }

  if (graza === 0){
    let kasaTuscia = true;
     Object.keys(kasoje).forEach((pinigas) =>{//Checking if there are money in the register
      if (kasoje[pinigas] > 0) {
        kasaTuscia = false;
      };
    });
    
    if (kasaTuscia){
      out = {status: "CLOSED", change: cid};
      console.log(out);
      return out;
    } else{
      let temp = [];
      Object.keys(grazinti).map((moneta) =>{
        if (grazinti[moneta] > 0){
          temp.push([moneta, grazinti[moneta] / 100]);//Getting back to dollars from cents.
      }
    });
    out = {status: "OPEN", change: temp};
    return out
    }
  }*/
