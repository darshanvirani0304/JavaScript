/*

    Convert Object to Array
    For Object Key --> Object.keys
    For Object Value --> Object.values

*/

let obj = {
    id : 1,
    myName: "Darshan Virani",
    language: "JavaScript"
}

console.log(obj);
console.log(typeof obj);

let objToArr = Object.keys(obj);
// let objToArr = Object.values(obj);
// let objToArr = Object.entries(obj);
console.log(objToArr);
console.log(typeof objToArr);
console.log(objToArr.length);