/* 

Logical Operator
(1) and (&&)
(2) or (||)
(3) not (!)
 
*/

let a = 10;
let b = 20;

// logical and
console.log(">>> Logical and");
console.log(a > 0 && b > a);
console.log(a > 0 && b == a);
console.log(a < 0 && b == a);

// Logical or
console.log(">>> Logical or");
console.log(a > 0 || b > a);
console.log(a > 0 || b == a);
console.log(a < 0 || b == a);

// Logical not
console.log(">>> logical not")
console.log(!true);
console.log(!false);