/* 

promise API
(5) Promise.resolve
- It it return resolve value

*/
let prom1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1");
    }, 1000);
})

// let promise_resolve = Promise.resolve("This is Promise.resolve");
let promise_resolve = Promise.resolve(prom1);
promise_resolve.then((value) =>{
    console.log(value);
})