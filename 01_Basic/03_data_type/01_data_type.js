/* 

JavaScript Data Type :-
-> Primitive Data Type
(1) number
(2) string
(3) boolean
(4) null
(5) undefind
(6) symbol
(7) bigint

-> Non-Primitive Data Type
(1) object
(2) array
(3) regExp

*/

// number
let num = 12;
let num1 = 12.12;
console.log(">>", num);
console.log(typeof num);
console.log(">>", num1);
console.log(typeof num1);

// string
let str = "Darshan Virani"
console.log(">>", str);
console.log(typeof str);

// boolean
let a = true;
let b = true;
console.log(">>", a);
console.log(typeof a);
console.log(">>", b);
console.log(typeof b);

// null
let c = null;
console.log(">>", c);
console.log(typeof c);

// undefind
let d;
// let d = undefined;
console.log(">>", d);
console.log(typeof d);

// symbol
let e = Symbol("Javascript");
// let e = Symbol(10);
// let e = Symbol(null);
// let e = Symbol(true);
// let e = Symbol();
console.log(">>", e)
console.log(typeof e);

// BigInt
let f = BigInt(10) + BigInt(10);
console.log(">>", f);
console.log(typeof f);


/* 

Non-Primitive Data Type

*/

// object
let obj = {
    roll_no : 1,
    name : "Raj",
    address : {
        flat_no : 1,
        flat_name : "abc",
        area_name : "hirabagh"
    },
    city : true,
    marks : [10,20,30,40,50],
    retult : null
}

console.log(obj);
console.log(typeof obj);

// array
let arr = [1,"raj",true,null,undefined];
// let arr = [1,2,3,4,5,6,7,8]
console.log(arr);
console.log(typeof arr);

