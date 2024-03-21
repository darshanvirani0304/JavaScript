/* 

spread operator

*/

// function myfun(name, ...marks){
//     let sum = 0;
//     for(let i in marks){
//         sum += marks[i];
//     }

//     console.log(`Student Name is ${name} and Marks is ${sum}`);
//     console.log(`Student Marks is ${sum}`);
// }
// let arr = [10,20,30,40,50];
// myfun("Darshan Virani", ...arr);



// let arr = [10,20,30,40,50];
// console.log([...arr]);                   // cloning arr


/* 

concat array

*/

let arr1 = [10,20,30];
let arr2 = [40,50,60];
// let arr3 = arr1.concat(arr2);
// let arr3 = [...arr1, ...arr2];
// let arr3 = [...arr2, ...arr1];
let arr3 = [0,...arr1, ...arr2, 70];
console.log(arr3);



/* 

It is use in object
concat object

*/

let obj1 = {
    fname : "Darshan Virani"
}

let obj2 = {
    language : "JavaScript"
}

let obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(`My Name is ${obj3.fname} and I am Learning ${obj3.language}.`);



// >>>>> concate array <<<<<
let str1 = ["Raj", "Rajesh"];
let str2 = ["Ram", "Ramesh"];
let str3 = ["Parth"];
let str4 = [...str1, ...str2, ...str3];
console.log(str4);
