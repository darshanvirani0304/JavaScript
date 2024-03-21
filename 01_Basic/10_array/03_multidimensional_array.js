let arr = [
    [1, "Raj", true],
    [2, "Rajesh", false],
    [3, "Ram", true],
    [4, "Ramesh", false],
    [5, "Parth", true]
]

arr[5] = [6, "Rahul", false];               // add new value in the array

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

console.log("Roll No :", arr[0][0] ,"\t Name :", arr[0][1], "\t Marks :", arr[0][2]);
console.log("Roll No :", arr[1][0] ,"\t Name :", arr[1][1], "\t Marks :", arr[1][2]);
console.log("Roll No :", arr[2][0] ,"\t Name :", arr[2][1], "\t Marks :", arr[2][2]);
console.log("Roll No :", arr[3][0] ,"\t Name :", arr[3][1], "\t Marks :", arr[3][2]);
console.log("Roll No :", arr[4][0] ,"\t Name :", arr[4][1], "\t Marks :", arr[4][2]);
console.log("Roll No :", arr[5][0] ,"\t Name :", arr[5][1], "\t Marks :", arr[5][2]);

console.log(typeof arr);                        // array type
console.log("Array Length :", arr.length);      // find array lenght

// array print using for loop
console.log(">> Multidimensional Array print using for loop");
for(let i=0;i<arr[0].length;i++){
    console.log(arr[0][i]);
}