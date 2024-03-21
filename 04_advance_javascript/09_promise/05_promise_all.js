/* 

promise.all

*/

// let prom1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("This is Promise1 resolve.");
//         resolve(10);
//     }, 1 * 1000)
// })

// let prom2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("This is Promise2 resolve.");
//         resolve(20);
//     }, 2 * 1000)
// })

// let prom3 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("This is Promise3 reject.");
//         // resolve(30);
//         reject("Filed");
//     }, 3 * 1000)
// })

// Promise.all([prom1, prom2, prom3]).then((result) =>{
//     console.log(result);
// }).catch((error) =>{
//     console.log(">> ERROR :", error);
// });





// let promisecall = function(value1, value2, time){                       // create promise call function
//     return function(resolve, reject){
//         setTimeout(() => {
//             console.log(`This is ${value1} resolve.`);
//             resolve(value2)
//         }, time * 1000);
//     }
// }

function promisecall(value1, value2, time){
    return function(resolve, reject){
        setTimeout(() => {
            console.log(`This is ${value1} resolve.`);
            resolve(value2)
        }, time * 1000);
    }
}

let p1 = new Promise(promisecall("promise1", true, 1));            // create promise function
let p2 = new Promise(promisecall("promise2", true, 2));
let p3 = new Promise(promisecall("promise3", true, 3));

Promise.all([p1,p2,p3]).then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
});