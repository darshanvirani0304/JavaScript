/* 

--> Array Filter Method

The JavaScript array filter() method filter and extract the element of an array that satisfying the provided condition.
It is use to modify array and create new array

*/

let arr = [45,35,25,78,74,44,32,56,78,12,34,46,];

let arr1 = arr.filter((value) =>{
    return value >= 50;
    // return value%2==0;
})
console.log(">> Value greter then 50 is :\n", arr1);

let arr2 = arr.filter((value, index, array) =>{
    return value <= 50;
})
console.log(">> Value less then 50 is :\n", arr2);


let obj = [
    {
        name : "Raj",
        position : "Web Developer"
    },
    {
        name : "Rajesh",
        position : "App Developer"
    },
    {
        name : "Ram",
        position : "Web Developer"
    },
    {
        name : "Ramesh",
        position : "Programer"
    },
    {
        name : "Parth",
        position : "Web Developer"
    }
]

let obj2 = obj.filter((value) =>{
    return value.position == "Web Developer"
})

console.log(obj2);