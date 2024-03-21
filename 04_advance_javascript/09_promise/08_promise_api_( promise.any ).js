/* 

promise api
(4) Promise.any
- It is return first executed resolve value and reject value ignore

*/

let prom1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        // resolve("Promise 1");
        reject("Promise 1");
    }, 1000);
})

let prom2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        // resolve("Promise 2");
        reject("Promise 2");
    }, 2000);
})

let prom3 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 3");
    }, 3000);
})

let promise_any = Promise.any([prom1, prom2, prom3]);
promise_any.then((value) =>{
    console.log(value);
})