const Person = function(firstAndLast) {
  // Only change code below this line
  this. fullName  = firstAndLast;
  //this.fName = firstAndLast.split(" ")[0];
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return `${this.fullName}`;
  };
  this.getFirstName = function(){
    return this.fullName.split(" ")[0];
  };
  this.setFullName = function(name){
    this.fullName = name;
  };
  this.getLastName = function(){
    return this.fullName.split (" ")[1];
  };
  this.setFirstName = function (name) {
    this.fullName = `${name} ${this.fullName.split(" ")[1]}`
  };  
  this.setLastName = function (name) {
    this.fullName = `${this.fullName.split(" ")[0]} ${name}`
  }  
}
  

const bob = new Person('Bob Ross');
const jerry = new Person ('Jerry Jensen')
console.log(bob.getFullName());
console.log(jerry.getFirstName());
console.log(bob.getLastName());
console.log(jerry.setFirstName("Joann"));
console.log(jerry.setLastName("Joannson"));
console.log(jerry.getFullName());
console.log(bob.fullName)
console.log(jerry.fName)

