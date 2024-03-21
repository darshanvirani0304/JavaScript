/* 

Await
- It is Work in the async function

*/

async function first(){
    console.log("2 : Message");
    await console.log("3 : Message");
    console.log("4 : Message");
    console.log("5 : Message");
}

console.log("1 : Message");
first();
console.log("6 : Message");