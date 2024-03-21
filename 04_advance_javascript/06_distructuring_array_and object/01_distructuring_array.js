/* 

Distructuring Array
- એરેની વેલ્યુને વેરીએબલમાં સ્ટોર કરવા માટે

*/

// >>>>>>>>>>>>>>> old way <<<<<<<<<<<<<<<
// let old_arr = ["Darshna Virani", "JavaScript", "Computer"];

// let fname = old_arr[0];
// let language = old_arr[1];
// let device = old_arr[2];
// console.log(fname);
// console.log(language);
// console.log(device);




// >>>>>>>>>>>>>>> ES6 <<<<<<<<<<<<<<<

let arr = ["Darshan Virani", "JavaScript", 30];

let [fname, language, marks] = arr;

console.log(">> Array Length :", arr.length);

console.log(">> Name :", fname);
console.log(">> Language :", language);
console.log(">> Marks :", marks);




// let arr = [, "JavaScript"];
// let [fname, language, marks = 35] = arr;
// console.log(">> Name :", fname);
// console.log(">> Language :", language);
// console.log(">> Marks :", marks);




// >>>>> Nested Array <<<<<
// let arr = ["Darshan Virani", "JavaScript", [10,20,30]];

// let [fname, language, [html, css, js]] = arr;

// console.log(">> Name :", fname);
// console.log(">> Language :", language);
// console.log(">> HTML Marks :", html);
// console.log(">> CSS Marks :", css);
// console.log(">> JS Marks :", js);




// >>>>> Rest Operator use distructor Array <<<<< 
// let arr = ["Darshan Virani", "JavaScript", "Surat", "Gujarat", "India"];

// let [fname, language, ...location] = arr;

// console.log("Name" , fname);
// console.log("Language" , language);
// console.log("Location" , location);




// >>>>> Using Function <<<<<
// function arr([fname, language, marks]){
//     console.log(">> Name :", fname);
//     console.log(">> Language :", language);
//     console.log(">> Marks :", marks);
// }

// arr(["Darshan Virani", "JavaScript", 30]);

// ----- Using Function -----
// function arr(){
//     return ["Darshan Virani", "JavaScript", 30];
// }

// let [fname, language, marks] = arr();
// console.log(">> Name :", fname);
// console.log(">> Language :", language);
// console.log(">> Marks :", marks);