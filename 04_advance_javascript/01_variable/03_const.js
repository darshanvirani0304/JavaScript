/* 

const variable - ES6
--> const variable is not possible to redeclar variable and reassigne variable value
--> block scope

--> let makes variable and const makes constans

*/

const a = "hello";
// const a = "hi";         // not possible to redeclare const variable                      --> SyntaxError: Identifier 'a' has already been declared
// a = "how are you?"      // not possible to reassign value in the const variable          --> TypeError: Assignment to constant variable.
console.log(a);



if(1 == 1){
    const num = "const variable";
    console.log(num);
}

// console.log(num);           // ReferenceError: num is not defined





// ---------- You can not use this ----------
// const num;                     // SyntaxError: Missing initializer in const declaration