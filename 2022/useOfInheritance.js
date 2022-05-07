function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog
Dog.prototype.bark = function() {console.log (`Woof!`)};

function Bird(){}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.eat = function() {console.log (`Peck peck peck!`)}


let beagle = new Dog();
let chicken = new Bird();
beagle.bark()
beagle.eat()
chicken.eat()