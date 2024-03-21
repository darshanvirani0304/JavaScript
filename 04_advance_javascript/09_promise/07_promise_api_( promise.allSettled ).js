/* 

promise api
(2) promise.allSettled()
- It is Display promise stauts and value

*/

let prom1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1");
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

let promise_allsettled = Promise.allSettled([prom1, prom2, prom3]);
promise_allsettled.then((value) =>{
    console.log(value);
})