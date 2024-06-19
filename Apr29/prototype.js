// let arr = [1, 2, 5, 10];
// Array.prototype.filter1 = function (callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };

// const wholeresult = arr.filter1((item) => item>1);
// const newresult = arr.filter((item)=>item>1)

// console.log(wholeresult);
// console.log(newresult)

// let asd = [56,1,1,1]
//  let res = asd.reduce((acc,ele,ind,arrrr)=>{

//       return acc+ele

//  },0)

// console.log(res)

// reduce-------------------------------------------

// let arr = [1, 2, ];


// Array.prototype.reduced = function (callback, value) {
//   let accu = value 

//   for (let i = 0; i < this.length; i++) {
//     if (accu === undefined) {
//       accu = this[0];
//     } else {
//       accu = callback(accu, this[i]);
//     }
//   }

//   return accu;
// };

// let result = arr.reduced((acc, ele) => {
//   return ele * acc;
// });
// console.log(result);


// //--------------------------------------------------------------