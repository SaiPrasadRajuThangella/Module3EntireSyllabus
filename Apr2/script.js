// // let obj1={
// //     a:10
// // };

// // // let obj2=obj1
// // // obj2.a = 20;

// // // console.log(obj1)

// // let obj3 = {
// //     ...obj1
// // };
// // obj3.a=200;
// // console.log(obj1)

// let obj1 = {
//   a: 10,
//   b: {
//     c: 20,
//   },
// };

// let obj3 = {
//   ...obj1,
// };

// obj3.a = 50;
// obj3.b.c = 100;

// console.log(obj1);
// console.log(obj3);
// let obj = {
//   a:10
// }

// let obj = {
//   a:10,
//   b:{
//     c:20
//   }
// }
//  let obj = ["dfgdfgf",5465454,{fgfg:"fgsfg"}]
// const deepClone = (obj)=>{
//   const type = typeof obj;
//   if(type !== "object" || !obj )
//   return obj;

//   if(Array.isArray(obj)){
//     return obj.map((item)=>deepClone(item))
//   }
//   let arrObj = Object.entries(obj);
//   let deepCloneArrObj =  arrObj.map(([key,value])=>
//     ([key,deepClone(value)]))
// ;
//   return Object.fromEntries(deepCloneArrObj)
// }
// console.log(deepClone(obj))


// call method-------------------------------------------------------------

let obj = {
  a: 10,
};
function abc() {
  console.log(this);
}

abc.call(obj);
// ---------------------------------------
let objj = {
  a : 10,
   abcc() {
    console.log(this);
  },
};

objj.abcc();

























// var salary = 20002020


// function getSalary() {
//   console.log(this.salary)
  
  
// }

// employee= {
//   salary : 1211223
// }
// employee2= {
//   salary : 7258567
// }

// getSalary.call(employee) 
// getSalary.call(employee2)