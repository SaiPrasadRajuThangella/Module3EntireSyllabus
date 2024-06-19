// let para1=10
// let para2=220
// function abc(para1,para2,...paras) {
//     console.log(para1,para2)
//     console.log(paras)
//     console.log(...paras)
// }
// abc(565,654,5,5,1)

// let obj = {
//       a: 10,
//     };

//     function abc(p1,p2,p3,p4) {
//       console.log(this,p1,p2,p3,p4);
//     }
//     let parameters = []

//  let f1 =    abc.call(obj,1,6,564,235);
//  f1()

// let obj = {
//   a: 10,
// };

// function abc(p1,p2,p3,p4) {
//   console.log(this,p1,p2,p3,p4);
// }
// let parameters = [1,6,564,235]

// abc.apply(obj,parameters);

// let objjjj = {
//   a: 10,
// };
// function ff() {
//   console.log(this);
// }
// ff();
// ff.call(objjjj);

// let obj = {
//   a: "this is obj ",
// };

// function f1(wish) {
//   console.log(this,wish);
// }

// const f2 = f1.bind(obj,);
// f2("102,15,3")

// // const f3 = f1.bind(obj,1515,12,)
// // f3(565,565,5615)

// const f3 = f2.bind(obj,516,545,5656);
// f3()

// const f4=f3.bind(obj,55,551,4)
// f4()

// let arr = new Array(10,20,50,50,)
// console.log(arr)
// var arrayLikeObject = Object.create(null);
// arrayLikeObject[0] = 'apple';
// arrayLikeObject[1] = 'banana';
// arrayLikeObject[2] = 'cherry';

// // Adding a length property to make it behave like an array
// Object.defineProperty(arrayLikeObject, 'length', {
//   value: 3,
//   writable: true,
//   enumerable: false,
//   configurable: true
// });

// // Converting the array-like object to a real array
// var array = Array.from(arrayLikeObject);

// // Testing
// console.log(array); // ['apple', 'banana', 'cherry']
// // true

// let obj={
//     a:10,
//     b:20
// }
// let array = Object.entries(obj);
// console.log(array)

// let objjj = Object.fromEntries(array)
// console.log(objjj)

// let arr=  new Array()

// let a = 10;

// a=10

// function abc() {
//     "use strict"
//   console.log(this);
// }

// abc();
// console.log(a);

// let movie = {
//   name: "rrr",
//   rbc: function () {
//     console.log(this);
//   },
// };
// movie.rbc();
// let input = document.getElementsByTagName('input')[0];
// input.addEventListener("click",function(){console.log(this)})

// va salary = 20000;

// function getSalary(a,b) {
//   console.log(this.salary);
//   console.log(a,b);
// }
// var obj = {
//   salary: 30000,
// };

// let f1 = getSalary.bind(obj);
// f1(1051,5156)

// let employee3 ={
//     name :"xyz",
//     salary:100000
// }

// let employee={
//     greet: function(wish){
//         console.log(this.name,wish)
//     }
// }

// let f1 = employee.greet.bind(employee3,"good morning ")
// f1("good evening")

// let obj={
//     a:70
// }
// function f1(p1,p2){
//     console.log(this);
//     console.log(p1,p2)
// }
// const f5 = f1.bind(obj,10,20)
// f5()
// const f3= f1.bind(obj,12,13)
// f3()

// let obj2={
//     p:"testing"
// }

// const f6 = f5.bind(obj2);
// // f6();
// let arr = new Array();

// Object.prototype.somexyz = "test";

// let obj = {
//   // name: "pc",

// };

// let obj2 = {
//   name: "prakash",
//   city: "delhi",
//   getDetails() {
//     console.log(`hi iam ${this.name} and iam from ${this.city}`);
//   },
// };
// obj.__proto__= obj2;
// obj.getDetails();

// obj2.getDetails();
// let arr = ["a","20"]
// function map(){

//   arr.map((item)=>{
//       item = 2*item
//       console.log(item)
//   })

// }

// map()

// let obj1 = {
//   name: "xyz",
//   age: 25,
// };

// obj2 = Object.create(obj1);

// obj3 = Object.create(obj2);

// console.log(obj3.name);

// let name = "fsndfdsd"
// let arr=[45,151,15,5]
// let person ={
//   name:"abc",
//   age:26
// }

// function movie(name,director){
//   this.moviename=name
//   this.director=director

// }
// movie.prototype.getDetails= function(){
//   console.log("director of", this.moviename ,"is", this.director)
// }
// movie.prototype.sayHello = function(){
//   console.log("hello",this.director)
// }

// movie1= new movie("pushpa","sukumar")

// movie1.getDetails()

// // let nam = "sddsf"
// // let name  = new String("fsdfsddf")

// delete Array.prototype.filter;

// Array.prototype.filter = function(callback){
//   let result = []
//   for(let i=0;i<this.length;i++){
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }

    
     
//   }
//   return result;
// }

// let arr=[1,2,3,4]

// Array.prototype.filter(arr)

// const result = arr.filter((item,index,arra)=>{
//   return item%2==0})
// console.log(result
// )

delete Array.prototype.map;

Array.prototype.map = function(callback){
  let result = []
  for(let i=0;i<this.length;i++){


    result.push(callback(this[i],i,this))
     
  }
  return result;
}

let arr=[1,2,3,4]

Array.prototype.map(arr)

const resulgt = arr.map((item,index,arra)=>{
  return item})
console.log(resulgt)

