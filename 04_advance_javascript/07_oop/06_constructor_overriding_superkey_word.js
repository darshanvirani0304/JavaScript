/* 

--> constructor overriding
super(args...)

*/

class Employee{
    constructor(ename){
        console.log("This is Constructor.");
        console.log(`>> Employee Name is ${ename}.`);
    }

    login(){
        console.log(">> Employee is Login.");
    }

    logout(){
        console.log(">> Employee is Logout.");
    }
    
    requestLeave(leave){
        console.log(`>> Employee has Request ${leave} Leaves.`);
    }
}

class Programmer extends Employee{
    // constructor(...args){                                        // --> this constructor is automatical/y create in the JavaScript server
    //     super(...args);
    // }

    constructor(ename){
        super(ename);
        console.log(">> This is Programmer Class Construcror.");
    }

    requestCoffee(){
        console.log(">> Employee has request for Coffee.");
    }

}

let pro = new Programmer("Darshan Virani");
// pro.login();
// pro.logout();
// pro.requestLeave(4);
// pro.requestCoffee();
