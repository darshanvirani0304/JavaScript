/* 

--> rest operator

*/

// function myfun(){
//     console.log(arguments);
// }
// myfun(10,20,30)


// function myfun(){
//     console.log(arguments);
//     let sum = 0;
//     for(let i in arguments){
//         sum += arguments[i];
//     }

//     console.log(sum);
// }

// myfun(10,20,30,40,50);
// myfun("Darshan Virani",10,20,30,40,50);



/* 

--> using rest operator
--> rest operator use 3 dot (...)
--> rest paramiter must be last

*/

// function myfun(name, ...args){
//     console.log(arguments);

//     let sum = 0;
//     for(let i in args){
//         sum += args[i];
//     }

//     console.log(">>String value :", name);
//     console.log(">>Addition :", sum);
// }

// myfun("Darshan Virani", 10, 20, 30, 40, 50);




function myfun(name, course, ...marks){
    console.log(arguments);

    let sum = 0;
    for(let i in marks){
        sum += marks[i];
    }

    console.log(`>> Studnet Name is ${name}. selected Course is ${course} and student marks is ${sum}`);
    console.log(`>> Student marks is ${sum}`);
    console.log(`>> Student marks is ${marks}`);
}

myfun("Darshan Virani", "BCA", 10, 20, 30, 40, 50);




// >>>>>>>>>>>>>>> using String <<<<<<<<<<<<<<<
// function myfun(fname, ...other){
//     console.log(fname);
//     console.log(other);
//     console.log("Rest value Length :", other.length);
//     console.log(other[0]);
//     console.log(other[1]);
//     console.log(other[2]);
//     console.log(other[3]);
//     console.log(other[4]);
// }

// myfun("Darshan Virani", "a", "b", "c", "d", "e");