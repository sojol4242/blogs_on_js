var name1 = "Sojol in old version and not fixed";
// ES6
const name2 = "Sojon is fixed";
let name3 = "sojol can be changed ES6 version";

console.log(name1); // output: Sojol in old version and not fixed
name1 = "Old version changed"; // output:Old version changed
console.log(name2); // output: Sojon is fixed
// name2 = "chnaged"; // error: variables.js:9 Uncaught TypeError: Assignment to constant variable. at variables.js:9

console.log(name3); // output: sojol can be changed
name3 = "sojol  changed in ES6 version";

console.log(name3); // output: sojol can be changed
