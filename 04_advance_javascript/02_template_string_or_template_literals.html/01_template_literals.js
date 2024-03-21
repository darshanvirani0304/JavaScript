/* 

--> Template String or Template Literals
`(back tick)
`This is ${variable_name}.`

*/

let fname = "Darshan Virani";
let language = "JavaScript";

console.log(`>> My Name is ${fname} and I am Learning ${language} Language.`);

// let target = `My Name is ${fname} and I am Learning ${language} Language.` 
// console.log(target);



// ---------- object ----------
let obj = {
    fname : "Darshan Virani",
    language : "Javascript",
    live : "Surat"
}

console.log(`>> My Name is ${obj.fname}. I am Learning ${obj.language} Language and I am Live in ${obj.live}.`);



// ---------- function ----------
function targetfun(fname, live){
    return `>> My Name is ${fname} abd I am Live in ${live}.`;
}

let fullname = "Darshan Virani";
let live = "Surat";
console.log(targetfun(fullname, live));