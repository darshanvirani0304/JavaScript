let str = "This is String";
let str2 = 'This is JavaScript Language';
let str3 = "This is JavaScript's";      // Wrong - "Javascript"s"
let str4 = 'That is JavaScript"S';      // Wrong - 'JavaScript's'

console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);

// typeof
console.log("Data Type is :", typeof str);

// length
console.log("str length :", str.length);
console.log("str2 Length :", str2.length);

// Escape Sequence Charecters
let str5 = "JavaScript\"s";
console.log(str5);

let str6 = 'JavaScript\'s'
console.log(str6);

let str7 = "Darshan\nVirani";       // /n --> new Line
console.log(str7);

let str8 = "Darshan \t Virani";     // /t --> tab
console.log(str8);

let str9 = "D\rarshan Virani";       // \r --> Carriage return
console.log(str9);

// using back tick
// let info = `This is Language's`;
// console.log(info);
// let info2 = `This is Language"s`;
// console.log(info2);