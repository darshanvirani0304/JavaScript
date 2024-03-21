/* 

promise chaining

*/

let prom1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("This is Promise 1");
    }, 1000);
})

prom1.then((value) =>{
    console.log(value);
    let prom2 = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("This is Promise 2");
        }, 1000)
    })

    return prom2;

}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) =>{                // return
        setTimeout(() =>{
            resolve("This is Promise 3");
        }, 1000)
    });

}).then((value) =>{
    console.log(value);
    return "This is Primise 4";                            // Create Automaticaly Promise 
}).then((value) =>{
    console.log(value);
})