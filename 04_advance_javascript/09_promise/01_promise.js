/* 

--> Promise :
Promise paramiter
resolve
reject

- It is work in the background
- and work complit and get message to your work is complited


*/

let prom = new Promise((resolve, reject) => {
    let condition = true;
    // let condition = false;
    if (condition) {
        resolve("Success");
    }
    else {
        reject("Fail");
    }
})

console.log(prom);

prom.then((value) =>{
    console.log(value);
}).catch((value) =>{
    console.log(value);
})


// let result = (value) => {
//     console.log(value);
// }
// let fail = (value) => {
//     console.log(value);
// }
// prom.then(result).catch(fail);










// let prom = new Promise((resolve, reject) =>{
//     let value = "Darshan Virani";
//     // let value = 10;
//     if(typeof value === "string"){
//         resolve("It is String");
//     }
//     else{
//         reject("It is not String");
//     }
// });

// // console.log(prom);

// prom.then((result) =>{
//     console.log(result);
//     // console.log("It is String");
// }).catch((reject) =>{
//     console.log(reject);
//     // console.log("It is not String");
// });