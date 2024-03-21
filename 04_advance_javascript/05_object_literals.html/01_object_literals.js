/* 

Object Literas

*/

// old
let fname = "Darshan Virani";
let language = "Javascript";

let obj = {
    fname : fname,
    language : language
}

console.log(obj);

// new - ES6 --> Propety and value name same use this method           --> use variable as a propety name
let obj2 = {                                                        // --> It is use to object property name and key(value) name are same 
    fname,
    language
}

console.log(obj2);

/* 

key value is variable 
- use variable as a propety name

*/

let n = "name";
let l = "language";
let obj3 = {
    [n] : "Darshan Virani",
    [l] : "JavaScript"
}
console.log(obj3);
console.log(obj3.name);
console.log(obj3.language);

let n2 = "student";
let l2 = "language";
let obj4 = {
    [n2 + "Name"] : "Darshan Virani",
    [l2] : "JavaScript"
}
console.log(obj4);
console.log(obj4.studentName);
console.log(obj4.language);