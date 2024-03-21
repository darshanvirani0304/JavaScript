/* 

Arrow function in using Object

*/

let obj = {
    fname : "Darshna Virani",
    language : "JavaScript",
    arrow : function(){
        console.log(`My name is ${this.fname} and I am Learning ${this.language}.`);
        setTimeout(() =>{
            console.log(`My name is ${this.fname} and I am Learning ${this.language}.`);
        }, 2000);
    }
    // arrow : function(){
    //     console.log(`My name is ${this.fname} and I am Learning ${this.language}.`);
    //     let that = this;
    //     setTimeout(function(){
    //         console.log(`My name is ${that.fname} and I am Learning ${that.language}.`);
    //     }, 2000);
    // }
}

obj.arrow();