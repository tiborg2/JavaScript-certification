(function () {
  console.log("A cozy nest is ready");
})();



//immediatelly invoked function creates module of two functions 

let funModule = (function() {
  return{
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog
Dog.prototype.bark = function() {console.log (`Woof!`)};


 //New Object.Dog.sparky uses module 
let sparky  = new Dog();
funModule.singMixin(sparky);
sparky.isCute();