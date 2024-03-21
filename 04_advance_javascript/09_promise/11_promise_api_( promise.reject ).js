/* 

promise API
(6) Promise.reject
- It it return reject value

*/

let promise_resolve = Promise.resolve(new Error(">> This is promise.reject"));
promise_resolve.then((value) =>{
    console.log(">> This is reject Promise");
    console.log(value);
})