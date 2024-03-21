/* 

Array is Collection of the Item
Array is use all JavaScript Datatype

*/

let arr = [1,"Darshan Virani", true, null, undefined];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1].length);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);        // This value is not Defind - undefined

arr[5] = "Add Item";
console.log("Add new Item array is :", arr[5]);

arr[1] = "Darshan";         // changing array value Darshan Virani --> to --> Darshan
console.log("new Array (change array) value is :", arr[1]);

console.log(arr);

console.log("Array Lenght is :", arr.length);    // Find Array Length

// Array Cisplay using for Loop
console.log(">>>> Array Collection Display using for Loop <<<<");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Array Collection Display using for_of Loop
console.log(">>>> Array Collection Display using for...of loop");
for(let a of arr){
    console.log(a);
}