/* 

static method

*/

class Animale{
    constructor(name){
        this.a_name = name;
        // this.a_name = Animale.upper(name);
    }

    aniName(){
        console.log(`Animale Name is ${Animale.upper(this.a_name)}.`);
        // console.log(`Animale Name is ${this.a_name}.`);
    }

    static upper(aname){
        return aname.charAt(0).toUpperCase() + aname.substr(1, aname.length);
    }
}

let ani = new Animale("Guddu");
// let ani = new Animale(Animale.upper("Guddu"));
ani.aniName();






class Static_method{
    static language(){
        console.log("This is Language Method.");
    }
}

let s = new Static_method()
Static_method.language();