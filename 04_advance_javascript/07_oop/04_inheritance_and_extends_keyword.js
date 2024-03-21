/* 

Inheritance
extends keyword

*/

class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(`>> ${this.name} is Running.`);
    }
    a_color(){
        console.log(`>> ${this.name} Color is ${this.color}.`);
    }
}

class Monkey extends Animal{
    eat(){
        console.log(`>> ${this.name} eat Banana.`);
    }
}

// let ani = new Animal("Rebit", "white");
// ani.run();
// ani.a_color();

let mon = new Monkey("Gullu", "Black");
mon.run();
mon.a_color();
mon.eat();