// // let array = [1, 2, [3, 4, [5, 7, [8, 9]]]];

// // function getArrayDepth(array, depth = 1) {
// //   let maxdepth = depth;
// //   array.forEach((ele) => {
// //     if (Array.isArray(ele)) {
// //       const recursiveDepth = getArrayDepth(ele, depth + 1);
// //       if (recursiveDepth > maxdepth) {
// //         maxdepth = recursiveDepth;
// //       }
// //     } else {
// //       return;
// //     }
// //   });

// //   return maxdepth;
// // }

// // // console.log(getArrayDepth(array));



// // function getArrayDepth(array, depth = 1) {
// //     let maxDepth = depth;

// //   array.forEach((element) => {
// //     if (Array.isArray(element)) {
// //       const tempDepth = getArrayDepth(element,depth++);
      

// //     //   const tempDepth = getArrayDepth(element, depth + 1);
// //     maxDepth = Math.max(maxDepth, tempDepth);
// //     }
// //   });

// //   return maxDepth;
// // }

// // console.log(getArrayDepth(arr));

// // let arr = [1, 2, [3, 4, [5, 7, [8, 9]]]];

// // function getArrayDepth(arr){
// //     return Array.isArray(arr) ? 1+Math.max(0,...arr.map(getArrayDepth)):0
// // }



// // console.log(getArrayDepth(arr))

// function getArrayDepth(arr) {
//     if (Array.isArray(arr)) {
//         // console.log(...arr.map(getArrayDepth))
//         return 1 + Math.max(0, ...arr.map(getArrayDepth));
//     } else {
//         return 0;
//     }
// }

// let arr = [1, 2, [3, 4, [5, 7, [8, 9]]]];
// console.log(getArrayDepth(arr));


// let arr = [5,5,7,8,9,4,5,6]
// let newarr = arr.sort().reverse();



function createUserObj(email,password)  {

   let obj = {
    email : email,
    password : password
   }
   return obj


}

console.log(createUserObj( "hom" ,"hello"))
 




