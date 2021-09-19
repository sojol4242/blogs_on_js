// javascript is a sync. and single thread programming language.

// understand the sync. behaviour

// const processOrder = (customer) => {
//   console.log(`processing order for customer 1`);
//   let currentTime = new Date().getTime();

//      while(currentTime+4000>=new Date().getTime());

//   console.log(`oder processed for customer 1`);
// };

// console.log(`take order ofr customer 1`);
// processOrder();
// console.log(`completed order of customer 1`);

// async. way
// const processOrder = (customer) => {
//   console.log(`processing order for customer 1`);
//   let currentTime = new Date().getTime();

//   // setTimeout is a async function
//   setTimeout(() => {
//     currentTime=new Date().getTime();
//     console.log("cooking completed");
//   }, 4000);
//   console.log(`oder processed for customer 1`);
// };

// console.log(`take order ofr customer 1`);
// processOrder();
// console.log(`completed order of customer 1`);

// utilize async function in optimized way
// const takeOrder = (customer, callback) => {
//   console.log(`take order for ${customer}`);
//   callback(customer);
// };

// const processOrder = (customer, callback) => {
//   console.log(`processing order for ${customer}`);
//   let currentTime = new Date().getTime();

//   // async function
//   setTimeout(() => {
//     currentTime = new Date().getTime();
//     console.log("cooking completed");
//     console.log(`oder processed for  ${customer}`);
//     callback(customer);
//   }, 4000);
// };
// const completedOrder = (customer) => {
//   console.log(`completed order for ${customer}`);
// };
// takeOrder("Sojol", (customer) => {
//   processOrder(customer, (customer) => {
//     completedOrder(customer);
//   });
// });

// takeOrder("Sonet", (customer) => {
//   processOrder(customer, (customer) => {
//     completedOrder(customer);
//   });
// });


