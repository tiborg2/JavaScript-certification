let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Mixed function
let glideMixin = function(obj){
  obj.glide = function() {
    console.log("Gliding, sssssttttsssssss!");
  }
}
//Applying mixed function to objects
glideMixin(bird);
glideMixin(boat);

//Executing
bird.glide();
boat.glide();