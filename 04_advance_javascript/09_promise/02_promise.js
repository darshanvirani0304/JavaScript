/* 

Promise

*/


let prom = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("This is Resolve    --> value - resolve");
        // reject("This is Reject     --> value - reject");
    }, 2000);
});


// handlers
prom.then((value) =>{
    console.log(value);                     // print prom variable in resolve value
    console.log("Resolve Peomise    --> then");
}).catch((value) =>{
    console.log(value);                     // orint prom variable in reject value
    console.log("Reject Promise     --> catch");
})