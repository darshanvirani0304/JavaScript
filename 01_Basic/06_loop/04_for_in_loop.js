/* 

for...in loop
for...in loop is use for object


*/

let obj = {
    id : 1,
    name : "Raj",
    address : "A.K.Road",
    city : "Surat",
    marks : [10,20,30,40,50],
    result : null,
    phone_no : undefined
}

// console.log(obj);
for(let a in obj){
    console.log(obj[a]);
}

/* 

a  --> print key
obj[a] --> print value

*/