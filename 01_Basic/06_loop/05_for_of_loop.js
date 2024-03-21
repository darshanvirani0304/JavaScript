/* 

for...of loop
for...of loop use for array

*/

let arr = ["Raj", "Rajesh", "Ram", "Ramesh", "Parth"];

for(let a of arr){
    console.log(a);
    // console.log(arr);
}


/*

    How to Access Array of Index
    -To access the index of the array elements inside the loop, you can use the for...of statement with the entries() method of the array.
    -The array.entries() method returns a pair of [index, element] in each iteration.

*/

let student = ["Raj", "Rajesh", "Ram"];

for(let [index, studentname] of student.entries()){
    console.log(`${studentname} Roll Number is ${index + 1}.`);
}