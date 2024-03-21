/* 

Async / Await
- It is Return Promise
- It is work in background

*/


// async function first(){
//     return ">> This is Async and Await";
// }

// let first = async function(){
//     return ">> This is Async and Await";
// }

let first = async () =>{
    return ">> This is Async and Await";
}

first().then((value) =>{
    console.log(value);
})