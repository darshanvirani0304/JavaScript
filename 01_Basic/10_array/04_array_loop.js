/* 

for loop
forEach loop

*/

// for loop
let arr = [1,2,3,4,5, "JavaScript", true];

// console.log(">>>> for loop <<<<");
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// console.log(">>>> foreach loop >>>>");
arr.forEach((index, value, array) =>{
    console.log("Index : ", index, ">>> Value :", value, ">>> Array : ", array);
})

// arr.forEach((element) =>{
//     console.log(element);
// })

// arr.forEach(function(element){
//     console.log(element);
// })

// arr.forEach(array_loop);
// function array_loop(element){
//     console.log(element)
// }

// let a = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((odd) =>{
//     console.log(odd%2==0);
// })


/* 

Array.from
--> it is to convert string to array
--> html collection to conver array

*/

let str = "Darshan";
console.log(typeof str);

let arrvalue = Array.from(str);
console.log(typeof arrvalue);
console.log(arrvalue);


/* 

for..of loop

*/

console.log(">>>> for...of <<<<");
let arr2 = [1,"darshan Virani", true, false, null, undefined];
for(let a of arr2){
    console.log(a);
}


/* 

for...in loop
for...in loop is return key and value

*/

console.log(">>>> for...in loop <<<<");
for(let a in arr2){
    console.log("Key :", a, " and Value :", arr2[a])
}