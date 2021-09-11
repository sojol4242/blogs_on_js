// The object literal is the simplest way to create objects

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
console.log(possiblePermutations, invented ,largestCube);  
 
// shorthand property name syntax for object creation
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

 