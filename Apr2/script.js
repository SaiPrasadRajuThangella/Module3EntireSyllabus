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

// const deepClone = (obj)=>{
//   const type = typeof obj;
//   if(type !== "object" || !obj )
//   return obj;
//   let arrObj = Object.entries(obj);
//   let deepCloneArrObj =  arrObj.map(([key,value])=>
//     ([key,deepClone(value)]))
// ;
//   return Object.fromEntries(deepCloneArrObj)
// }
// console.log(deepClone(obj)) 


let obj ={
  abc(){
    console.log(this);
  }
}
obj.abc()

