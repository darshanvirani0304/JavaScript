/* 

    --> Array reduce Method

    - The Reduce method reduces the given array into a single value by ececuing a reducer function
    - It is use to modify array and create new array

    Syntax -
    - array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

*/

let arr = [10,20,30,40,50];

let arr1 = arr.reduce((num1, num2) =>{
    return num1 + num2;
})
console.log(arr1);

function sumNum(num1, num2){
    return num1 + num2;
}
let arr2 = arr.reduce(sumNum);
console.log(arr2);