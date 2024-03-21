import * as darshan from "./file2.js";

console.log(`>> ${darshan.fname}`);
darshan.add(10,10);
console.log(`>> Multiplication of Two Number is : ${darshan.mul(10,10)}`);

let s = new darshan.Student(1, "Darshan Virani");
s.info();