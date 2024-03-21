/* 

Object Literals

*/

let n = "student";
let l = "language";

let obj = {
    [n + "name"] : "Darshan Virani",
    [l] : "JavaScript",
    detail : function(){
        return `>> My Name is ${this.studentname} and I am Learning ${this.language} Language.`;
    }
}

console.log(obj);
console.log(obj.detail());

/* 

object in function method

*/

let obj2 = {
    [n + "name"] : "Darshan Virani",
    [l] : "JavaScript",
    method(){                           // new method ES6 - This is function
        return `>> My Name is ${this.studentname} and I am Learning ${this.language} Language.`
    },
    "new method"(){                     // You can give space in the Function using quotes ("")                  
        return `>> My Name is ${this.studentname} and I am Learning ${this.language} Language.`
    }
}

console.log(obj2.method());
console.log(obj2["method"]());          // new method ES6
console.log(obj2["new method"]());