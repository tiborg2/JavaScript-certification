function orbitalPeriod(arr) {
  const GM = Math.round(398600.4418);
  const earthRadius = Math.round(6367.4447);
  const pi = Math.PI;
  for (let item of arr){
    console.log(item, item['avgAlt']);
    let alt = Math.round(item['avgAlt'])
    console.log(alt)
    let ot = Math.round(2*pi*(Math.sqrt((earthRadius+alt)**3 / GM) ));
    item['orbitalPeriod'] = ot; 
    console.log(item.orbitalPeriod)
  }
  console.log(arr)
  let out  = arr.map(item =>({
    name: item.name,
    orbitalPeriod: item['orbitalPeriod']
  }));
  console.log(out)

  return out;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}, {name : "sputnik", avgAlt : 315873.5553}]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 