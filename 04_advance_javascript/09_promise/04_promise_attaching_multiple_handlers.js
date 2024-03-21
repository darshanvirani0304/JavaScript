/* 

Atteching Multipal Handlers

*/


let prom = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(">> This is Promise");
    }, 1000);
})

// (1)
prom.then((value) =>{
    console.log(value);
})

// (2)
prom.then(() =>{
    console.log(">> This is Second Handlers");

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(" >>This is print after 6 Second.");
        }, 6000);
    })

}).then((value) =>{
    console.log(value);
})

// (3)
prom.then(() =>{
    console.log(">> This is Third Handlers");
})