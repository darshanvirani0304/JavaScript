/* 

Write new array method
Declar Array using "new Array" key Word
>> new Array <<

*/

let arr = new Array(1,"Darshna Virani", true, null, undefined)
console.log(arr);

console.log(">> 0 :", arr[0]);
console.log(">> 1 :", arr[1]);
console.log(">> 2 :", arr[2]);
console.log(">> 3 :", arr[3]);
console.log(">> 4 :", arr[4]);

console.log(">> Array Length :", arr.length);           // Find Array Length

arr[5] = "Virani"                                       // add new item in the Array
console.log(">> Add new Item in the Array :", arr[5]);

console.log(">> Array Length :", arr.length);           // Find Array Length

arr[1] = "Darshan";                                     // changing Array value
console.log(">> chaning Array value is :", arr[1]);

console.log(arr);

/* 

Defind Array

*/

let arr2 = new Array(5);
// let arr2 = new Array();
arr2[0] = 1;
arr2[1] = "Darshan VIrani";
arr2[2] = true;
arr2[3] = null;
arr2[4] = undefined;

console.log(arr2);

/* 

using loop

*/

let arr3 = new Array(5);
for(let i=0;i<arr3.length;i++){
    // arr3[i] = prompt("Enter any type of array value");
}

console.log(arr3);