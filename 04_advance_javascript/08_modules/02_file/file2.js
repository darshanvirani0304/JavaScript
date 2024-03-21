/* 

Modules

*/

// Variable
let fname = "Darshan Virani";


// Function
function add(num1 , num2){
    let num3 = num1 + num2;
    console.log(`>> Addition of Two Number is : ${num3}`);
}


// Function
function mul(num1 , num2){
    return num1 * num2;
}


// Class
class Student{
    constructor(id, name){
        console.log(">> This is Student Class Constructor.");
        this.rollNo = id;
        this.sname = name;
    }

    info(){
        console.log(`>> Student Roll No is ${this.rollNo} and Student Name is ${this.sname}.`);
    }

}


export {fname, add, mul, Student};