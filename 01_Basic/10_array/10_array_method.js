/* 

--> Array Method
(1) toString()        --> convert array to strinh                       --> create new array
(2) join()            --> joint array value in specifc character        --> create new array
(3) push()            --> add new element in the array (last element)   --> return value
(4) pup()             --> remove last element                           --> return value
(5) unshift()         --> add new element in the array (first element)  --> return value
(6) shift()           --> remove first element                          --> return value
(7) delete()          --> delete element but not effect to the length   --> return true and false
(8) concat()          --> combain tow array and retuen new array        --> return new array
(9) reverse()         --> reverse array value                           
(10) slice()          --> cut array                                     --> create new array
(11) splice()         --> add new array                                 --> return value 
(position, remove(old) element, new element)
(12) indexOf          --> It is Check exist element and give index number
(indexOf("Search Item", Start))
(13) lastIndexOf      --> It is same as indexOf and that is start last
(14) sort()           --> sort alphabetically array
(15) valueOf          --> same as normal array print
(16) fill()           --> to make all value same
(17) find()           --> check first value
(18) findIndex()      --> check first value and return index value
(19) inclues()        --> It is return ture and false
(20) some()           --> It is return ture and false
(21) every()          --> It is return ture and false

*/

// (1) toString()
let arr1 = [1, 2, 3, 4, 5];
let str = arr1.toString()
console.log(">> toString()\t :", str);


// (2) join()
let arr2 = [1, 2, 3, 4, 5];
let joinArray = arr2.join("-");
console.log(">> join()\t :", joinArray);


// (3) push()
let arr3 = [1, 2, 3, 4, 5];
let lastAdd = arr3.push("Darshan");
console.log(">> push()\t :", arr3, lastAdd);


// (4) pop()
let arr4 = [1, 2, 3, 4, 5, "Darshan"];
let lastRemove = arr4.pop();
console.log(">> pull()\t :", arr4, lastRemove);


// (5) unshift()
let arr5 = [1, 2, 3, 4, 5];
let firstAdd = arr5.unshift("Darshan");
console.log(">> unshift()\t :", arr5, firstAdd);


// (6) shift()
let arr6 = ["Darshan", 1, 2, 3, 4, 5];
let firstRemove = arr6.shift();
console.log(">> shift() \t :", arr6, firstRemove);


// (7) delete()
let arr7 = ["Raj", "Rajesh", "Ram", "Ramesh", "Parth"];
let a = delete arr7[1];
console.log(">> delete() \t :", arr7, a, "\t --> Array Length :",arr7.length);


// (8) concat()
let arr8 = [1,2,3];
let arr9 = [4,5,6];
let arr10 = [7,8,9];
let concatArray = arr8.concat(arr9, arr10, 10);
console.log(">> concat() \t :", concatArray);


// (9) reverse()
let arr11 = [1,2,3,4,5,6,7,8,9,10];
let reverseArray = arr11.reverse();
console.log(">> reverse() \t :", reverseArray);


// (10) slice()
let arr12 = [1,2,3,4,5,6,7,8,9,10];
let sliceArray = arr12.slice(3);
// let sliceArray = arr12.slice(3,6);
console.log(">> slice() \t :", sliceArray);


// (11) splice()
let arr13 = [1,2,3,4,5,6,7,8,9,10];
let spliceArray = arr13.splice(3, 3, 44, 55, 66, 77);       // (starting point, delete count number, new element)
console.log(">> splice() \t :", arr13,  spliceArray);


// (12) indexOf()
let arr14 = ["Raj", "Rajesh", "Ram", "Raj", "Ramesh", "Path", "Raj"];       // indexOf("search item", start)
// let indexOfArray = arr14.indexOf("Ram");
// let indexOfArray = arr14.indexOf("Raj");
// let indexOfArray = arr14.indexOf("Raj", 2);
let indexOfArray = arr14.indexOf("Raj", 5);
console.log(">> indexOf \t :", indexOfArray);


// (13) lastIndexOf()
let arr15 = ["Raj", "Rajesh", "Ram", "Raj", "Ramesh", "Path", "Raj"];
// let lastIndeOfArray = arr15.lastIndexOf("Ram");
// let lastIndeOfArray = arr15.lastIndexOf("Raj");
// let lastIndeOfArray = arr15.lastIndexOf("Raj", 5);
let lastIndeOfArray = arr15.lastIndexOf("Raj", 2);
console.log(">> lastIndexOf \t :", lastIndeOfArray);


// (14) sort()
let arr16 = [65,94,13,32,1,75,74,23,125,785,21,55,58,12,31,5,45,31];
let compare = (a,b) =>{
    return a - b;
}
let sortArray = arr16.sort(compare);
console.log(">> sort() \t :", sortArray);


// (15) valueOf()
let arr17 = [1,2,3,4,5];
console.log(">> valueOf \t :", arr17.valueOf());


// (16) fill()
let arr18 = [1,2,3,4,5];
let fillArray = arr18.fill(1);
console.log(">> fill \t :", fillArray);


// (17) find()
// (18) findIndex()
let ages = [15,35,43,21.4];
function adultAge(age){
    return age >= 18;
}
let findAge = ages.find(adultAge)
let findIndexAge = ages.findIndex(adultAge)
console.log(">> Find \t :", findAge);
console.log(">> FindIndex \t :", findIndexAge);


// (19) includes - return true or false
let arr19 = ["Raj", "Rajesh", "Ram", "Ramesh", "Parth"];
let includeArray = arr19.includes("Raj");               // true
// let includeArray = arr19.includes("Rahul");          // false
console.log(">> includes \t :", includeArray);


// (20) some() - return true and false
let ages2 = [32,1,3,45,15];
function adultarge2(age){
    return age >= 180;
    // return age >= 100;
}
let someArray = ages.some(adultarge2)
console.log(">> some \t :", someArray);


// (21) every() - all value true this true and all value true and one value false return flase
let arr20 = [10,20,30,40,50];
function checkEvery(check){
    return check <= 100;
}
let everyArray = arr20.every(checkEvery);
console.log(">> every() \t :", everyArray);