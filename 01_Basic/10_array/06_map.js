/* 

--> Array Map Method
map - It is Create new Array
map function is return three(3) argument value, index, array

--> Map is a same as forEach Loop
--> but that is return new Array
--> forEach loop is not return Array
--> It is use to modify array and create new array

--> use for calculation

map(value, index, array)

*/

let arr = [10, 20, 30, 40, 50];

arr.map((value) =>{
    console.log(value);
})

let a = arr.map((value) =>{
    return value * 2;
})
console.log(a);

// value, index, array
arr.map((value, index, array) =>{
    console.log("Value :", value, "\t>> Index :", index, "\t>> Array :", array);
})


let arr2 = [
    {
        id : 1,
        name : "Raj"
    },
    {
        id : 2,
        name : "Rajesh"
    },
    {
        id : 3,
        name : "Ram"
    }
]

console.log(arr2);

let arr3 = arr2.map((index) =>{
    return {
        id : index.id,
        fname : index.name,
        info : `Student Id is ${index.id} and Student Name is ${index.name}`
    };
})

console.log(arr3);