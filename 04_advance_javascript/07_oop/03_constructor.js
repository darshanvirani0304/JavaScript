/* 

--> Constructor

*/

class college{                                                  // --> class
    constructor(name, num){                                     // --> constructor (in-build method)
        this.studentName = name;
        this.number = num;
    }

    conform(){                                                  // --> method
        console.log(`>> ${this.studentName} your Addmition is Conform and your Addmition Number is ${this.number}.`);
    }

    cancel(){
        console.log(`>> ${this.studentName} your Addmition is Calcel and your Addmition Cancel Number is ${this.number}.`);
    }

}

let s1 = new college("Darshan Virani", 101);                    // --> object
let s2 = new college("pavan Solaki", 102);                      // --> object

s1.conform();
s1.cancel();

s2.conform();
s2.cancel();