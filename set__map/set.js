// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.
const set=new Set([2,33,323]);
console.log(set);
set.add(4);
console.log(set);

// Set Methods
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	Returns an iterator with all the values in a Set

// Property 
// size	Returns the number elements in a Set

// iterate in set with forEach

// set.forEach (function(value) {
//     console.log(value);
//   })
// iterate in set with forof

for (const x of set) {
    console.log(x);
}
for (let x of set.values()) {
    console.log(x);
}
 
// has
console.log(set.has("hello"));// false
// delete
set.delete(4)
console.log("After Delete",set); 