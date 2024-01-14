### 1. **Redundant Way of Writing Class:**
   - **Theory:**
     - The redundant way involves declaring class properties and constructor parameters separately.
     - Each property must be declared in the class, and then it must be assigned in the constructor.
   - **Code Example:**
     ```typescript
     class Coder {
       // property must be there in class as well as constructor
       name: string
       music: string
       age: number
       lang: string
       constructor(name: string, music: string, age: number, lang: string) {
         this.name = name;
         this.music = music;
         this.age = age;
         this.lang = lang;
       }
     }
     ```

### 2. **Using Visibility Modifiers:**
   - **Theory:**
     - Visibility modifiers control the accessibility of class members.
     - TypeScript has three visibility modifiers: `public`, `private`, and `protected`.
     - `public`: Accessible from anywhere.
     - `private`: Accessible only within the class.
     - `protected`: Accessible within the class and its subclasses.
     - Definite assignment assertion operator (`!`): Used to assert that a variable is definitely assigned, even with strictNullChecks enabled.
     - It basically tells TypeScript to trust that the variable has been assigned a value, even if TypeScript's static analysis cannot prove it.
   - **Code Examples:**
     ```typescript
     class Coder {
       secondLang!: string;
       constructor(
         public readonly name: string,
         public music: string,
         private age: number,
         protected lang: string = "Typescript"
       ) {
         // ...
       }
       public getAge() {
         return `${this.name} is ${this.age}`;
       }
     }
     ```

### 3. **Instantiating and Using Class Instances:**
   - **Theory:**
     - Class instances are created using the `new` keyword followed by the class name and constructor arguments.
     - Public and readonly properties are directly accessible from instances.
     - Private and protected properties are not directly accessible from outside the class.
   - **Code Examples:**
     ```typescript
     const coder1 = new Coder("Yash", "classical", 22);
     console.log(coder1.getAge());
     ```

### 4. **Inheritance and `extends` Keyword:**
   - **Theory:**
     - Inheritance allows a class to inherit properties and methods from another class.
     - The `extends` keyword is used to create a subclass that inherits from a superclass.
     - The `super` keyword is used to call the constructor of the superclass.
   - **Code Examples:**
     ```typescript
     class WebDev extends Coder {
       constructor(
         public computer: string,
         name: string,
         music: string,
         age: number
       ) {
         super(name, music, age);
         // ...
       }
       public getLang() {
         return `I write ${this.lang}`;
       }
     }
     ```

### 5. **Interface Implementation and Need:**
   - **Theory:**
     - The `implements` keyword enforces that a class implements a specific interface.
     - Interfaces define the structure a class must adhere to, specifying properties and methods.
     - Implementing interfaces ensures type safety and consistency.
     - If a class doesn't implement all the members specified by the interface or doesn't provide matching types or signatures, 
there will be a compilation error
   - **Code Examples:**
     ```typescript
     interface Musician {
       name: string;
       instrument: string;
       play(action: string): string;
     }

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
     ```
### 1. **Static Class Members:**
   - **Theory:**
     - Static class members belong to the class itself, not instances of the class.
     - They are accessed using the class name rather than an instance of the class.
     - Common use cases include maintaining shared state or providing utility methods.
   - **Code Example:**
     ```typescript
     class Peeps {
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

     console.log(Peeps.count); // 3
     console.log(p1.id); // 1
     console.log(p2.id); // 2
     console.log(p3.id); // 3
     ```

### 2. **Getters and Setters in TypeScript:**
   - **Theory:**
     - Getters and setters control access to class properties, allowing additional logic or restrictions.
     - Getters retrieve the value of a property using the `get` keyword and must have a return type.
     - Setters assign values to a property using the `set` keyword and take a single parameter representing the new value.
   - **Code Example:**
     ```typescript
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
     band.data = ["one direction", "lol bz"];
     console.log(band.data); // ["one direction","lol bz"]
     band.data = [...band.data, "lofi hunters"];
     console.log(band.data); // ["one direction", "lol bz", "lofi hunters"]
     // band.data = ["lol",12] // Error: param is not an array of strings
     ```

### Need for Static Members and Getters/Setters:
- **Static Members:**
  - **Need:**
    - To maintain shared state across all instances of a class.
    - Provide utility methods that are related to the class but not tied to a specific instance.
  - **Example:**
    - Keeping track of the number of instances created (`Peeps.count`).
- **Getters/Setters:**
  - **Need:**
    - To control access to class properties with additional logic or restrictions.
    - Implement computed properties or ensure valid property assignments.
    - In React, getters and setters can be useful for managing component state and providing controlled access to state variables. They are commonly used with the `useState` hook.
  - **Example:**
    - Using a setter to validate and set an array of strings for a `Bands` class.


