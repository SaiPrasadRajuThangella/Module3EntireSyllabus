// Function.prototype.calll = function(obj,...args){
//     obj.tempFn = this;

// }
// let obj = {
//   a: 10,
//   b: 20,
// };

// function sum(a1, a2) {
//   console.log(this);
//   return a1 + a2;
// }

// // console.log(sum.call(obj, 12, 5));

// sum( )

// call polyfill=======================================================================================

// let person1 = {
//   name: "prasad",
// };

// function printAge(age) {
//   return `${this.name} is ${age} years old`;
// }

// Function.prototype.mycall = function (obj, ...args) {
//   if (typeof this != "function") {
//     throw new Error("not call-able");
//   }

//   obj.fn = this;

//   let result = obj.fn(...args);

//   delete obj.fn;
//   return result;
// };
// let re = printAge.mycall(person1, 25);
// console.log(re);
// console.log(printAge.call(person1, 25));

// applypolyfill=====================================================================================================

// let person = {
//   name: "prasad",

// };
// function printName(a,b,c) {
//   // return `hi my name is ${this.name} and age is ${age}`;
//   return `${a} ${b} `
// }

// Function.prototype.myapply = function (obj,args) {
//   obj.tempFn = this;
//   let res = obj.tempFn(...args);
//   delete obj.tempFn;
//   return res;
// };

// console.log(printName.myapply(person,[20,50]));
// console.log(printName.apply(person,[20,50]))

// bind polyfill-----------------------------------------------------------------------------------------
let obj = {
  a:10
}

function sum(a,b){
  console.log(this)
  return 
}
Function.prototype.mybind = function(obj,...args){
    const oldFn = this;
    const newFn = function(...nonFixedArgs);


}























// function old(...args){
//   console.log(args)
//   return "hello"
  
// }

// function newf(...args){
//   return old(...args)
// }

// console.log(newf(1,2,3))



























