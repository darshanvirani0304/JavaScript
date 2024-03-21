/*

    Hoisting -


*/

console.log(addOne(10));        // Not Give Error

function addOne(num){
    return num + 1;
}



// console.log(addTwo(10));         // Give Error - ReferenceError: Cannot access 'addTwo' before initialization

let addTwo = function(num){         // function expression
    return num + 2;
}
console.log(addTwo(10));




// console.log(addThree(10));      // Give Error - ReferenceError: Cannot access 'addThree' before initialization

let addThree = (num) =>{        // function expression
    return num + 3;
}
console.log(addThree(10));