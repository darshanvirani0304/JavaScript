/* 

promise api
(3) Promise.race
- It is return first executed resole or reject value

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

let promise_race = Promise.race([prom1, prom2, prom3]);
promise_race.then((value) =>{
    console.log(value);
})