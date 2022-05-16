function checkCashRegister(price, cash, cid) {
  const VERTE = [["PENNY", 1], ["NICKEL", 5],
                 ["DIME", 10], ["QUARTER", 25],
                 ["ONE", 100], ["FIVE", 500],
                 ["TEN", 1000], ["TWENTY", 2000],
                 ["ONE HUNDRED", 10000]];                  //Using values x100(


  let graza = Math.round(cash*100) - Math.round(price*100);
  let kasoje = {};
  let grazinti = {};
  cid.forEach(function(perskaiciuoti){
    kasoje[perskaiciuoti[0]] = Math.round(perskaiciuoti[1]*100);
  });
  cid.forEach(function(perskaiciuoti){
    grazinti[perskaiciuoti[0]] = 0;
  });
    
  let i = VERTE.length -1 ;
  while (i >= 0 && graza > 0){
    if (graza - VERTE[i][1] > 0 && kasoje[VERTE[i][0]], graza){
         
      while (kasoje[VERTE[i][0]] > 0 && graza - VERTE[i][1] >= 0) {
        kasoje[VERTE[i][0]] -= VERTE[i][1];
        grazinti[VERTE[i][0]] += VERTE[i][1];
        graza -= VERTE[i][1];
      };
    };
    i--;
  }
  if(graza === 0 ) {
    let kasaTuscia = true;
    Object.keys(kasoje).forEach(function(pinigas){
      if (kasoje[pinigas] > 0 ){
        kasaTuscia = false;
      }
    });
    //console.log(kasaTuscia)
      if (kasaTuscia) {
        let out = {status: "CLOSED", change: cid};
        return out;
      } 
    
    let rezArr = [];
    Object.keys(grazinti).map(function(pinigas){
      if(grazinti[pinigas] > 0 ) {
        rezArr.unshift([pinigas, grazinti[pinigas]/100])
    };
  });
    let out = {status: "OPEN", change: rezArr};
    return out
  }
  let out  = {status: "INSUFFICIENT_FUNDS", change: []}
  return out
}








let result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
                            ["QUARTER", 4.25], ["ONE", 90],
                            ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
                             ["ONE HUNDRED", 100]]);
console.log(result)





