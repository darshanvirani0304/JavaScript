/* 

Bitwise Operator
(1) Bitwise and (&)
(2) Bitwise or(|)
(3) Bitwise xor (^)
(4) Bitwise not (~)
(5) Bitwise left sift
(5) Bitwise right sift
(5) Bitwise right sift with zero

*/

let a = 10;
let b = 20;

/* 

0 -> false
1 -> true

*/

// & Bitwise and
console.log(">> Bitwise and");
console.log(a < b & a != b);    // true
console.log(a < b & a == b);    // false

// | Bitwise or
console.log(">> Bitwise or");
console.log(a > b | a != b);    // true
console.log(a < b | a == b);    // true
console.log(a > b | a == b);    // false

// ^ Bitwise XOR
console.log(">> Bitwise XOR");
console.log(a > b ^ a != b);    // true
console.log(a < b ^ a == b);    // true
console.log(a > b ^ a == b);    // false
console.log(a < b ^ a != b);    // false

// ~ Bitwise NOT
console.log(">> Bitwise NOT");
console.log(~10);
console.log(~-10);

// << Bitwise Left Sift
console.log(">> Bitwise Left Sift");
console.log(10 << 2);

// >> Bitwise Right Sift with Zero
console.log(">> Bitwise Right Sift with Zero");
console.log(10 >> 2);

// >>> Bitwise Right Sift with Zero
console.log(">> Bitwise Right Sift with Zero");
console.log(10 >>> 2);