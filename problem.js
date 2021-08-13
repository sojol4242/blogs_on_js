// Find prime number :

// function findPrimeNumber(n) {
//   var div = 2;
//   while (n > div) {
//     if (n % div === 0) {
//       return "Not a prime number";
//     } else div++;
//   }
//   return "Prime number";;
// }
// console.log(findPrimeNumber(11));

//Prime Factors
// function primeFactors(n) {
//   var factors = [],
//     divisor = 2;

//   while (n > 2) {
//     if (n % divisor == 0) {
//       factors.push(divisor);
//       n = n / divisor;
//     //   console.log(n);
//     } else {
//       divisor++;
//     }
//   }
//   return factors;
// }

// console.log(primeFactors(69));

// function greet (person) {
//     if (person =={ name: 'amy' }) {
//       return 'hey amy'
//     } else {
//       return 'hey arnold'
//     }
//   }
//   console.log(result);

//   var result=greet({ name: 'amy' })
//   console.log(result);
// var numbers = [65, 44, 12, 4];
// numbers.forEach(function (item, i, arr) {
//   console.log(arr);
//   console.log(item, i);
// });
// let me = { 
//   name: "Ashutosh Verma", 
//   thisInArrow:() => { 
//   console.log("My name is " + this.name); // no 'this' binding here 
//   }, 
//   thisInRegular(){ 
//   console.log("My name is " + this.name); // 'this' binding works here 
//   } 
//  };
//  me.thisInArrow(); 
//  me.thisInRegular();
var arr = [20, 120, 111, 215, 54, 78]; 
// var max=Math.max.apply(null,arr);
// arr.splice(arr.indexOf(max),1);
// var secondMax=Math.max.apply(null,arr);
// console.log(secondMax);

