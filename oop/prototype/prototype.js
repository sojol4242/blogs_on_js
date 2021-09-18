// prototype:

// object creation with function
// function User(name, age) {

//     this.name = name;
//     this.age = age;
//     this.eat=function(){
//       console.log("I am eating rice");
//     }

//   }

//   var ob = new User("Sojol", 43);
//   console.log(ob);
//   var ob1 = new User("Sonet", 43);
//   console.log(ob1);

// in above process the problem is the eat function is take memory two time for two object. if we have a large object collection then it will take many extra memory that is not a solution. so for solve this problem we need to introduce with prototype

//  introduce to Object.create()

// const captain={
//     name: "Mahmudullah",
//     age:33,
//     runs:"1230",
//     wckts:36,
//     avg:23.45,
//     sr:120.2,
//     team:"Bangladesh"
// }

// console.dir(captain);

// const player1=Object.create(captain);

/**
 * the prototype is a function property which is point to an object
 *
 */
function test() {}
console.dir(test.prototype);

// prototype Understanding with normal function

function Player(name, age) {
  this.name = name;
  this.age = age;
}

Player.prototype = {
  bat() {
    console.log("He is an opening batsman");
  },
  ball() {
    console.log("He can bowling");
  },
};

const shakib = new Player("Shakib", 34);

console.log(shakib);
shakib.ball();
const tamim = new Player("Tamim", 33);
console.log(tamim);
tamim.bat();
// the new keyword
/**
 * creates a new empty object
 * it binds the value of 'this' to the new empty object
 * it calls the constructor function to build the real object
 * Example:
 * const shakib= new Player("Shakib",34);
 * const tamim= new Player("Tamim",34);
 */

// introduce to class

// class in javascript: blueprints of an object

// class Player {

//     constructor(name,age) {
//         this.name= name;
//         this.age= age;
//     }
//     bat(){
//         console.log(`${this.name} is an opening batsman`);
//     }
//     ball(){
//         console.log(`${this.name} can bowling`);
//     }

// }
// const shakib= new Player("Shakib",34);
// shakib.ball();
// shakib.bat();
// console.log(shakib);
