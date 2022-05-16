function checkCashRegister(price, cash, cid) {//Using values x100(in cents) to avoid float calculations 
  const values = {"PENNY": 1, "NICKEL": 2, "DIME": 10, "QUARTER": 25, "ONE": 100,
                  "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000}; 
  
  let filtered = cid.filter(elem => elem[1] !== 0).reverse();
  let grazinti = {};

  let kasoje = {};
    
  for (let item  of filtered){
    kasoje[item[0]] = Math.round(item[1]*100)//Calculatiing in cents
  };
    
  const VISO = Object.values(kasoje).reduce((accumulator, curr) => accumulator + curr)
    console.log(VISO);
    
  let graza = Math.round(cash*100) - Math.round(price*100) //Avoiding float. Calculating in cents.
  console.log(graza);
    
  if (VISO - graza < 0){
    let out = {status: "INSUFFICIENT_FUNDS", change: []};
    return out
  }
  const pinVardas = Object.keys(kasoje)//Getting all Oject.kasoje keys(money names)
  let index = 0;

  while ( index < pinVardas.length && graza > 0 ){
    let pinigas  = values[pinVardas[index]];
    if (pinigas <= graza ){
      
      console.log(pinigas)
    }
    
    index++
  }


  //return out
}

let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
 ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
   console.log(result)

