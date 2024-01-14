// Index Signatures
/* 
Index signatures in TypeScript are useful when you're 
creating an object, but you don't know the exact names of the 
object keys, but you do know the shape of the object. 
They allow you to declare the type of the keys and the types of 
the values. 

Index signatures are also required by TypeScript if you attempt 
to access an object property dynamically using bracket notation. 
TypeScript uses index signatures to ensure type safety and 
prevent potential errors when accessing properties dynamically.

So, index signatures are needed when you want to create objects 
without having the exact names of the keys in advance or when you 
want to access object properties dynamically using bracket notation.
*/
// interface TransactionObject{
//     Pizza : number,
//     Books : number,
//     Job : number
// }

// const todaysTransaction: TransactionObject = {
//     Pizza : -5,
//     Books : 10,
//     Job : 3
// }
// But there could be a scenario , where we dont know what
// property we will need in our interface, when creating interface
// in advance
// And also when we try to access those properties dynamically
// console.log(todaysTransaction.Pizza)
// console.log(todaysTransaction['Job'])
// dynamically access without loop
// let prop: string = 'Pizza'
// console.log(todaysTransaction[prop])
// error - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObject'.
//   No index signature with a parameter of type 'string' was found on type 'TransactionObject'.
// another way of accessing dynamically through loops
// const todaysNet = function(transactions: TransactionObject):number{
//     let total = 0;
//     for (let key in transactions){
//         total += transactions[key] //same ERROR
//     }
// }

// Solution using index signature

interface TransactionObject {
  [index: string]: number;
  //NOTE -  the index signature paramenter type cannot be boolean
}
const todaysTransaction: TransactionObject = {
  Pizza: -5,
  Books: 10,
  Job: 3,
};
let prop: string = "Pizza";
console.log(todaysTransaction[prop]); //-5
const todaysNet = function (transactions: TransactionObject): number {
  let total = 0;
  for (let key in transactions) {
    total += transactions[key];
  }
  return total;
};
console.log(todaysNet(todaysTransaction)); //8

// readonly modifier - we can also make it readonly
interface TransactionObject1 {
  readonly [index: string]: number;
}
const todaysTransaction1: TransactionObject1 = {
  Pizza: -5,
  Books: 10,
  Job: 3,
};
// todaysTransaction1.pizza = 40 Error -Index signature in type 'TransactionObject1' only permits reading.

// non existng properties
// TypeScript doesn't throw an error when you try to access a non-existing property dynamically using bracket notation. I
// relying on undefined properties without proper checks in your code can still lead to runtime errors.
console.log(todaysTransaction["anything"]);

// required and optional properties combined with an index signature

interface Student {
  // provide undefined when one of the propery is optional
  [index: string]: string | number | undefined;
  name: string;
  age?: number;
  gpa: number;
}

const stud1: Student = {
  // name and gpa are required
  name: "yash",
  gpa: 8.8,
  // age is optional
  age: 22,
  // plus we can add our own bcoz of index signature
  dob: "decemeber",
  id: 52,
};
console.log(stud1.name, stud1.id); //yash  52
for (const key in stud1) {
  console.log(`${key}: ${stud1[key]}`);
}

// type of assertion
/* 
the `typeof` assertion allows you to extract the type of a specified variable
or expression. It is used to capture the type information of a value
at compile-time, providing type-awareness in your code.
*/
// what if we try to loop through an object which has interface with
// no index signature provided
interface Teacher {
  id: number;
  name: string;
  subject: string;
}
const teach1: Teacher = {
  id: 43,
  name: "John Doe",
  subject: "Math",
};
// if i try to iterate, we get, error-Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Teacher'.
//   No index signature with a parameter of type 'string' was found on type 'Teach
// for(let key in teach1){
//     console.log(`Key: ${key}, Value: ${teach1[key]}`)
// }
/* Soloution - 
When iterating over the properties of an object, TypeScript needs
a way to infer the type of the properties. By using `keyof` in 
conjunction with `typeof`, you create a union type of the keys of 
the object. 
This enables you to iterate over the object properties using a `for...in` loop, 
ensuring correct type inference.
*/
for (let key in teach1) {
  console.log(`Key: ${key}, Value: ${teach1[key as keyof Teacher]}`);
}
console.log("---------------");
// another way of using keyof with type of
Object.keys(teach1).map((key) => {
  console.log(teach1[key as keyof typeof teach1]);
});
// another way of using keyof
function logTeacherKey(teacher: Teacher, key: keyof Teacher): void {
  console.log(`${key}: ${teacher[key]}`);
}

logTeacherKey(teach1, "subject");



// record utility type vs index signature

type Streams = 'salary' | 'bonus' | 'sideHustle'
type Incomes = Record<Streams,number>
// Interface cannot do this -  error
// interface Income {
//     [key: 'salary'|"bonus"]: number;
//   }
// disadvantage is we cannot restrict our keys to be
//  number,string,etc
const income:Incomes={
    salary:5000,
    bonus:300,
    sideHustle:200
}
for(let revenue in income){
    console.log(`Revenue from ${revenue}: $${income[revenue as keyof Incomes]}`)
}
// Type Utility

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

// Partial<Type>

// type User ={
//     name:string,
//     email:string
// }
// type User2 = Partial<User>

// Required<Type> - opposite of partial
// type User ={
//     name?:string,
//     email:string
// }
// const user: Required<User>={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Readonly<Type> - makes every property readonly
// type User ={
//     name:string,
//     email:string
// }
// const user: Readonly<User> ={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Record<Keys, Type>

// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Record<"name"|"email"|"gender",string>

// Example

// interface UserInfo {
//   age: number;
// }

// type UserName = "john" | "levi" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

// Pick<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit<Type, Keys>
// interface ShippingInfo {
//   city: string;
//   state: string;
//   country: string;
// }

// type Random = Omit<ShippingInfo,"country">

// Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean
// type Random = Exclude<MyUnion , boolean>

// Extract<Type, Union>
// type MyUnion = string | number | boolean
// type Random = Extract<MyUnion , boolean>

// NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined
// type Random = NonNullable<MyUnion>
// type Random2 = Exclude<MyUnion,undefined| null>

// Parameters<Type>
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>

// ConstructorParameters<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>

// ReturnType<Type>
// const myfunc = (a: number, b: string):string => {
//   return a + b;
// };
// type FuncType = ReturnType< typeof myfunc>

// InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>

// const user:Random ={
//     s:"44",
//     t:"ssds"
// }