/* 
        
--> prototype
use __proto__ keyword
        
*/

let obj1 = {                                        // obj1
    id: 1,
    langauge: 'JavaScript'
}
console.log(obj1);

let obj2 = {                                        // obj2
    message: () => {
        // alert("This is Protoype");
        console.log("This is __proto__");
    }
}

obj1.__proto__ = obj2;                              // __proto__     --> create proto type

obj1.message();

obj2.__proto__ = {                                  // __proto__    --> proto_type to proto_type
    name: "Darshan Virani"
}

console.log(obj1.name);