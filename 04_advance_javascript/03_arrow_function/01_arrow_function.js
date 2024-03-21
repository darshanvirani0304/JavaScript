/* 

Arrow Function

*/

let arrow = () =>{
    console.log(">> This is Arrow Function");
}
arrow();


// Arrow function using parameter
let arrow_para = (a,b) => {
    console.log(`>> Addition of ${a} and ${b} is : ${a + b}`);
}
arrow_para(10,20);


// Arrow function using return value
let arrow_return = (a,b) => {
    return `>> Multiplication of ${a} and ${b} is : ${a * b}`
}
console.log(arrow_return(10,10));