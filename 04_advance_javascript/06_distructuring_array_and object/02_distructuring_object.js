/* 

Distructuring Object

*/

let obj = {
    fname : "Darshan Virani",
    language : "JavaScript"
}

// >>>>> old way <<<<<
console.log(`>> My Name is ${obj.fname} and I am Learning ${obj.language}. >>>>> old way <<<<<`);


// >>>>> ES6 <<<<<
let {fname, language} = obj;
console.log(`>> My Name is ${fname} and I am Learning ${language}. >>>>> ES6 <<<<<`);         
console.log(fname);
console.log(language);

// let {fname : fullname, language : lan} = obj;
// console.log(`>> My Name is ${fullname} and I am Learning ${lan}. >>>>> ES6 <<<<<`); 





// >>>>>>>>>> Object in Object <<<<<<<<<<
let obj2 = {
    fullname : "Darshan Virani",
    lan : "JavaScript",
    location : {
        city : "Surat",
        state : "Gujarat",
        country : "India"
    }
}

let {fullname, lan, location} = obj2;

console.log(`>>> My Name is ${fullname} and I am Learning ${lan}.`);
console.log(`>>> City : ${location.city}\t State : ${location.state}\t Country : ${location.country}`);









// oldway
// let obj = {
//     fname : "Darshan Viani",
//     lan : "JavaScript"
// }

// let fname = obj.fname;
// let lan = obj.lan;

// console.log(fname);
// console.log(lan);