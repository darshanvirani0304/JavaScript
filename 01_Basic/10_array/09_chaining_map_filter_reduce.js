let num = [1,2,3,4,5,6,7,8,9,10];

let newNum = num.map((add) =>{
    return add * 10;
}).map((add) =>{
    return add + 1;
}).filter((value) =>{
    return value > 40;
})

console.log(newNum);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr.map((value) =>{
//     return value + 10;
// }).filter((value) =>{
//     return value%2==0;
// }).reduce((value) =>{
//     return value + value;
// })