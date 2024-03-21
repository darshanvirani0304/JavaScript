/* 

Arrow Function

*/


let arrow = () => console.log(">> This is Arrow Function");
arrow();

let arrow2 = fname => console.log(`>> Your name is ${fname}.`);             // not use round brackets() in single line(optional) but multiline in use round brackest() compulsory
arrow2("Darshan Virani");

let arrow3 = (gretTing, fname) => console.log(`>> ${gretTing} ${fname}.`);
arrow3("Good Morning", "Darshan Virani");





// ---------- Give function paramiter value ----------
// let myarrow = (a, b = 20) =>{
//     a = 10;
//     console.log(a + b);
// }

// myarrow();