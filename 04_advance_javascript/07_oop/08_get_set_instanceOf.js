/* 

(1) get
(2) set
It is use to simply get and set value

(3) instanceof

--> Instanceof operator is used to checked whether an object is an instance of a particular class or constructor function.
--> It is Return Boolean value 'true' and 'false'
--> It is work in the Inheritance

-->syntex : object instanceof class_name/constructorFunction



*/

class Student{
    constructor(name){
        this.sname = name;
    }

    info(){
        console.log(">> This is Student Information.");
    }

    get getvalue(){
        return this.sname;
    }

    set setvalue(yname){
        this.sname = yname;
    }
}

class Tearcher extends Student{
    info(){
        super.info();
        console.log(">> This is Tearcher infomation");
    }
}

let s = new Student("Darshan Virani");
let t = new Tearcher();

t.info();

console.log("Get Method :", s.getvalue);
s.setvalue = "Virani";
console.log("Set Method :", s.getvalue);

let a = 10;

console.log(s instanceof Student);          // return true or false
console.log(s instanceof Tearcher);
console.log(t instanceof Student);
console.log(t instanceof Tearcher);
console.log(a instanceof Student);