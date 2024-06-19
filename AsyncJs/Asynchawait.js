// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }
// function fpi() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("weasadsadsather data");
//         resolve(200);
//       }, 2500);
//     });
//   }

// async function getWeatherData() {
//   await fpi()
//   await  api()
//   // console.log(await api())
// }

// getWeatherData();

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 1000);
//   });
// }

// (async function getAlldata(){
//     await getData(655645)
//     await getData(65645)
//     await getData(6545);
// })()

// const p1 = new Promise((resolve,reject)=>{
//     resolve("ssuccessss")
// })

// async function test(){
//     return p1
// }

// console.log(p1.then(value=>console.log(value)) === test().then(value=>console.log(value)))

// ----------------------------
// function intro(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   resolve(name);
//     reject(name)
//     }, 0);
//     // resolve(name);
//   });
// } 

//  async function handlePromise() {
  

  
//   try {
//     console.log(await intro("sfsdfdsf"));
//   } catch (error) {
//     console.log(error)
//   }
  

// }

// handlePromise();




