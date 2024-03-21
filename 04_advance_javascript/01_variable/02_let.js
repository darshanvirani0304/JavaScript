/* 

let variable - ES6
--> let variable is not possible to redeclare variable
--> but possible to reassign variable value
--> block scope

*/

let a = "hello";
// let a = "hi";       // not possible to redeclare let variable        --> SyntaxError: Identifier 'a' has already been declared
a = "how are you?"     // reassign value
console.log(a);


if(1 == 1){
    let num = "let variable";
    console.log(num);
}

// console.log(num);               // ReferenceError: num is not defined