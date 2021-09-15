function randomRange(myMin, myMax) {
    var out = Math.floor(Math.random() * (myMax + 1  - myMin)) + myMin;
    console.log(out);
    return out;
}
randomRange(1, 10)