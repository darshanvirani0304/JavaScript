/* 

--> Method Overriding
super.method_name(args...)

*/

class Employee{
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
    requestCoffee(){
        console.log(">> Employee has request for Coffee.");
    }

    // requestLeave(leave){
    //     console.log(`>> Employee has Request ${leave + 1} Leaves.`);
    // }

    requestLeave(){
        super.requestLeave(5);                                      // use super keyword
        console.log(">> Grander one more Extra Leaves.");
    }
}

let pro = new Programmer();
pro.login();
pro.logout();
pro.requestLeave(4);
pro.requestCoffee();
