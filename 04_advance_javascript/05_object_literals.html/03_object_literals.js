/* 

Object Literals

*/

let myname = "Darshan Virani";
let language = "JavaScript";

function display(name, lan){
    // return `>> My Name is ${name} and I am Learning ${lan} Language.`;
    return {name, lan}              // --> use this { } to create object
}

console.log(display(myname, language));
console.log(typeof display(myname, language));


// new method - ES6

let fname = "Darshan";
let lname = "Virani";
let language2 = "JavaScript";

function show(fname, lname, lan){
    let fullname = fname + " " + lname;
    // return `>> My Name is ${fullname} and I am Learning ${lan} Language.`;
    return {fullname, lan}
}

console.log(show(fname,lname,language2));

let obj = show(fname,lname,language2);              // create function and return object                --> created object
console.log(obj.fullname);
console.log(obj.lan);