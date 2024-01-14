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
  // definite assignment assertion operator
  /* The definite assignment assertion operator (!) is used in TypeScript to tell the compiler that a variable is definitely assigned, even if TypeScript's strictNullChecks option is enabled. It basically tells TypeScript to trust that the variable has been assigned a value, even if TypeScript's static analysis cannot prove it. */
  secondLang!: string;
  constructor(
    // public- accessible to every class
    public readonly name: string,
    public music: string,
    //private- accessble only within the class
    private age: number,
    // protected- accessible from subclasses and class
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  // method
  public getAge() {
    return `${this.name} is ${this.age}`;
  }
}
const coder1 = new Coder("Yash", "classical", 22);
console.log(coder1.getAge());
// console.log(coder1.age) //Error -Property 'age' is private and only accessible within class 'Coder'
// console.log(coder1.lang) //Error - Property 'lang' is protected and only accessible within class 'Coder' and its subclasses

// Extends for subclass
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
    // lang: string, it will be accessible, so no need
  ) {
    // The super keyword is used to call the constructor and methods of the superclass.
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}
const dev1 = new WebDev("Macbook Pro", "John Doe", "classical", 25);
console.log(dev1.getLang());
// console.log(dev1.age) //error
// console.log(dev1.lang) // error
console.log(dev1.getAge());

// ---------------------------------------------------------------------------------------------------
// implements for interface
/* In TypeScript, the `implements` keyword is used to enforce that a class implements a specific interface.

When a class implements an interface, it means that the class must provide implementation for all the members (properties and methods) defined in the interface. The class must have matching names, types, and signatures for all the members specified in the interface.*/
/* Using the `implements` keyword helps enforce that a class adheres to the structure defined in an interface, ensuring type
 safety and consistency. 
If a class doesn't implement all the members specified by the interface or doesn't provide matching types or signatures, 
there will be a compilation error.*/

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}
// class can be used to implement our interface
class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} is playing ${this.instrument}. Action:${action}`;
  }
}
let guitarist = new Guitarist("John", "Guitar");
console.log(guitarist.play("Solo"));

// ---------------------------------------------------------------------------------------------------
// static class members
class Peeps {
  // it applies to class itself and not any one instance of
  // that class
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
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
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data() {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
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
