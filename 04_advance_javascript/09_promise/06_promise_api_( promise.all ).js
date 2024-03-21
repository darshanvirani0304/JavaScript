/* 

    - promise api
    (1)promise_all
    - promise reject all promise reject

*/
    
let prom1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1");
    }, 1000);
})

let prom2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 2");
        // reject("Promise 2");
    }, 2000);
})

let prom3 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 3");
    }, 3000);
})

let promise_all = Promise.all([prom1, prom2, prom3]);

promise_all.then((value) =>{
    console.log(value);
})