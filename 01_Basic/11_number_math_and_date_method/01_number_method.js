/* 

--> Number Method
(1) Number()                        --> Convert Number string and boolean value to Number
(2) parseInt()                      --> Convert desimal to integer
(3) parseFloat()                    --> Convert Integer to desimal
(4) isFinite()                      --> Number must be infinite or not              --> return true and false
(5) isInteger()                     --> Number must be integer or not               --> return true and false
(5) toFixed(x)                      --> Value must be between 1 to 100
(6) toPrecision(x)                  --> Value must be between 1 to 100

*/

// (1) Number()
let num = "10";
// let num = "darshan";
// let num = true;
// let num = false;
let num2 = Number(num);
console.log(">> Number() :",num2, typeof num2);
// console.log(num2 + 10);


// (2) parseInt()
let num3 = "10.78";
// let num3 = 10.65;
// let num3 = "19 years";
// let num3 = "years 19";
let num4 = parseInt(num3);
console.log(">> paeseInt() :", num4);


// (3) parseFloat()
let num5 = "20.22";
// let num5 = "19 years";
let num6 = parseFloat(num5);
console.log(">> parseFloat :", num6);


// (4) isFinite() --> return true and false
// let num7 = 43.4;
// let num7 = "Darshan";
let num7 = 0;
let num8 = Number.isFinite(num7);
console.log(">> isFinite() :", num8);


// (5) isInteger    () --> return true and false
let num9 = 10;
// let num9 = 10.654;
// let num9 = "Darshan";
let num10 = Number.isInteger(num9);
console.log(">> isInteger() :", num10);


// (6) toFixed(x)
let num11 = 10.535646646
let num12 = num11.toFixed(2);
// let num12 = num11.toFixed(3);
// let num12 = num11.toFixed(5);
// let num12 = num11.toFixed(20);
console.log(">> toFixed :", num12);


// (7) toPrecision()
let num13 = 12.975345;
let num14 = num13.toPrecision(2);
// let num14 = num13.toPrecision(6);
// let num14 = num13.toPrecision(10);
// let num14 = num13.toPrecision(15);
console.log(">> toPrecision :", num14);