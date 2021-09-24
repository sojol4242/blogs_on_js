// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.
const map=new Map();
console.log(map);
// Map Methods
// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	 
// size	Returns the number of elements in Map
map.set("19EEE019",973);
map.set("19EEE020",76532);
map.set("19EEE021",345);
map.set("19EEE022",4365);
console.log(map);

// iterate in map with forEach
console.log("iterate in map with forEach");
map.forEach (function(value,key) {
    console.log(key,value);
  })

// iterate in map with forof
console.log("iterate in map with forOf");

for (const x of map) {
    console.log(x[0]);
}
console.log("iterate in map with forOf");
for (let x of map.entries()) {
    console.log(x[1]);
}
//  has 
console.log(map.has("19EEE01")); // false

// delete
map.delete("19EEE019") 
console.log("After Delete ",map); 

