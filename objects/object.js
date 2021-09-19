// object literal: easiest way to create object
var ob = {};

const game = {
  name: "Fornite",
  developer: "Epic Games",
};

//   Objects are dynamic collections of properties
//   game.year=2000;
//   console.log(game);
//   delete game.name;
//   console.log(game);

//  Objects can store functions
const cp = {
  name: "CP is love",
  toString: function () {
    return this.name;
  },
};
console.log(cp.toString()); // details this topics cover on this.js file

// JavaScript for...in loop

let mobile = {
  brand: "Samsung",
  model: "Galaxy Note 9",
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}
//   JavaScript destructuring assignment shorthand syntax

const rubiksCubeFacts = {
  possiblePermutations: "43,252,003,274,489,856,000",
  invented: "1974",
  largestCube: "17x17x17",
};
const { possiblePermutations, invented, largestCube } = rubiksCubeFacts;
console.log(possiblePermutations, invented, largestCube);

// shorthand property name syntax for object creation
const activity = "Surfing";
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

// Way to declare object
// object literal: easiest way to create object
var ob = {};

var ob = new Object(); // not allow now
console.log(ob);

var ob = Object.create(null);

// with function constructor

function User(name, age) {
  var ob = {};
  ob.name = name;
  ob.age = age;
 
  return ob;
}

var ob = new User("Sojol ", 43);
console.log(ob);

// Singleton pattern:
var ob = new (function () {
  this.name = "Sudheer";
  this.age = 20;
})();
console.log(ob);

// ES6 class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var object = new Person("Sonet", 65);
console.log(object);
// convert to json
// var object = {
//   name: "MdMoniruzzzaman",
// };
// var json = JSON.stringify(object);
// console.log(json);
// convert to javascript object
// console.log(JSON.parse(json));
// console.log(this);
