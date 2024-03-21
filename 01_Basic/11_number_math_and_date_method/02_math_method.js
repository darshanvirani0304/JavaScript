/* 

--> Math Method
(1) ceil(x)                             --> rturn upper value                   5.2 --> 6
(2) floor()                             --> return down word value              5.2 --> 5
(3) round()                             --> rerun upper value .5 up and retur down value .5 down    5.8 --> 6    5.4 --> 5
(4) trunc()                             --> retun lower value
(5) max(x, y, ... n)                    --> return max number                   10, 20, 30 --> 30
(6) min(x, y, ... n)                    --> return min number                   10, 20, 30 --> 10
(7) sqrt(x)                             --> return sqrt root                    25 --> 5*5 --> 5
(8) cbrt(x)                             --> cubic root of a number              125 --> 5*5*5
(9) pow(x, y)                           --> return power vlaue                  5 * 3 --> 5*5*5 --> 125
(10) random()                           --> return any random number
(11) abs()                              --> return - value to + value
(12) PI                                 --> return PI value                     3.14

*/


// (1) ceil()
let num1 = Math.ceil(10.2);
// let num1 = Math.ceil(-10.2);
console.log(">> ceil :", num1); 


// (2) floor()
let num2 = Math.floor(10.2);
// let num2 = Math.floor(-10.2);
console.log(">> floor :", num2);


// (3) round()
let num3 = Math.round(10.5);
// let num3 = Math.round(10.8);
// let num3 = Math.round(10.4);
// let num3 = Math.round(10.2);
console.log(">> round() :", num3);


// (4) trunc()
let num4 = Math.trunc(10.8);
// let num4 = Math.trunc(10.3)
console.log(">> trunc() :", num4);


// (5) min(x, y, ... n)
let num5 = Math.max(10,20,30);
console.log(">> min(x, y, ... n) :", num5);


// (6) min(x, y, ... n)
let num6 = Math.min(10,20,30);
console.log(">> min(x, y, ... n) :", num6);

// (7) sqrt()
let num7 = Math.sqrt(25);
// let num7 = Math.sqrt(625);
console.log(">> sqrt(x) :", num7);


// (8) cbrt()
let num8 = Math.cbrt(125);
// let num8 = Math.cbrt(1000);
console.log(">> cbrt(x) :", num8);


// (9) pow()
let num9 = Math.pow(10,2);
// let num9 = Math.pow(5,3);
console.log(">> pow(x, y) :", num9);


// (10) random()
// let num10 = Math.random();
let num10 = Math.round(Math.random() * 100);
console.log(">> random() :", num10);


// (11) abs()
let num11 = Math.abs(-10);
// let num11 = Math.abs(-10.11);
console.log(">> ans() :", num11);


// (12) PI
let num12 = Math.PI;
console.log(">> PI :", num12);