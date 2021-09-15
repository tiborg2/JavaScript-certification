function randomFraction(){
    var out = Math.random() * 20;//Picks random from 0 (included) to 1 (not included) and multiplies to 20.
    out = Math.floor(out); //Rounds number down to nearest whole number. 
    console.log(out) 
    return out
}
randomFraction()