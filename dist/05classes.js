"use strict";
// class Coder {
//     // property must be ther in class as well as constructor
//     name : string
//     music : string
//     age:number
//     lang:string
//     constructor(name : string,music : string ,age : number,lang : string){
//         this.name = name;
//         this.music= music;
//         this.age = age;
//         this.lang = lang;
//     }
// }
// problem there is lot of redundancy in writing this
// so to keeps things DRY, we use visibility or access modifiers
// solution code -
// Using visibility modifiers
class Coder {
    constructor(
    // public- accessible to every class
    name, music, 
    //private- accessble only within the class
    age, 
    // protected- accessible from subclasses and class
    lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // method
    getAge() {
        return `${this.name} is ${this.age}`;
    }
}
const coder1 = new Coder("Yash", "classical", 22);
console.log(coder1.getAge());
// console.log(coder1.age) //Error -Property 'age' is private and only accessible within class 'Coder'
// console.log(coder1.lang) //Error - Property 'lang' is protected and only accessible within class 'Coder' and its subclasses
// Extends for subclass
class WebDev extends Coder {
    constructor(computer, name, music, age
    // lang: string, it will be accessible, so no need
    ) {
        // The super keyword is used to call the constructor and methods of the superclass.
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const dev1 = new WebDev("Macbook Pro", "John Doe", "classical", 25);
console.log(dev1.getLang());
// console.log(dev1.age) //error
// console.log(dev1.lang) // error
console.log(dev1.getAge());
// class can be used to implement our interface
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${this.instrument}. Action:${action}`;
    }
}
let guitarist = new Guitarist("John", "Guitar");
console.log(guitarist.play("Solo"));
// ---------------------------------------------------------------------------------------------------
// static class members
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// it applies to class itself and not any one instance of
// that class
Peeps.count = 0;
const p1 = new Peeps("yash");
const p2 = new Peeps("om");
const p3 = new Peeps("ram");
console.log(Peeps.count); // 3, how many times object is instantiated
console.log(p1.id); // 1
console.log(p2.id); // 2
console.log(p3.id); //3
// ---------------------------------------------------------------------------------------------------
// getters and setters in ts
/* In TypeScript, getters and setters are a way to define methods that control the access to properties of a class. They allow you to get (retrieve) and set (assign) values to class properties, while providing additional logic or restrictions.

Getters are used to retrieve the value of a property. They are defined using the `get` keyword followed by the property name, and they don't take any parameters. Getters must have a return type that matches the type of the property they are getting.

Setters, on the other hand, are used to assign values to a property. They are defined using the `set` keyword followed by the property name, and they take a single parameter representing the new value being assigned. Setters don't have a return type. */
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("param is not an array of strings");
        }
    }
}
const band = new Bands();
// console.log(band.data) //[]
band.data = ["one direction", "lol bz"];
console.log(band.data); //["one direction","lol bz"]
band.data = [...band.data, "lofi hunters"];
console.log(band.data); // ["one direction", "lol bz", "lofi hunter:]
// band.data = ["lol",12] //05classes.js:111 Uncaught Error: param is not an array of strings at set data [as data]
/* Application of getters and setters
In React, getters and setters can be useful for managing component state and providing controlled access to state variables. They are commonly used with the `useState` hook.
*/
