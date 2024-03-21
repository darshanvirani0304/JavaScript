import {fname, add, mul as multiplication, Student} from "./file2.js";

/* 

You can use alis to change any variable, function, class, oject, array ets... name
Syntex : old_name as new_name
Example : mul as multiplication

*/

console.log(`>> ${fname}`);
add(10,10);
console.log(`>> Multiplication of Two Number is : ${multiplication(10,10)}`);

let s = new Student(1, "Darshan Virani");
s.info();