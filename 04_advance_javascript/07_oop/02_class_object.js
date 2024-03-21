class college{                                                  // --> class
    conform(){                                                  // --> method
        console.log(`>> ${this.studentName} your Addmition is Conform and your Addmition Number is ${this.number}.`);
    }

    cancel(){
        console.log(`>> ${this.studentName} your Addmition is Calcel and your Addmition Cancel Number is ${this.number}.`);
    }

    info(name, num){
        this.studentName = name;
        this.number = num;
    }
}

let s1 = new college();                                          // --> object
let s2 = new college();                                          // --> object

s1.info("Darshan Virani", 101);
s2.info("Pavan Solanki", 102);

s1.conform();
s1.cancel();

s2.conform();
s2.cancel();











// class student{
//     constructor(){                                           //  --> use constructor
//         console.log("This is Constructor.");
//     }
// }
// let s = new student;