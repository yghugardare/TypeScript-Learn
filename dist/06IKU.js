"use strict";
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
const todaysTransaction = {
    Pizza: -5,
    Books: 10,
    Job: 3,
};
let prop = "Pizza";
console.log(todaysTransaction[prop]); //-5
const todaysNet = function (transactions) {
    let total = 0;
    for (let key in transactions) {
        total += transactions[key];
    }
    return total;
};
console.log(todaysNet(todaysTransaction)); //8
const todaysTransaction1 = {
    Pizza: -5,
    Books: 10,
    Job: 3,
};
// todaysTransaction1.pizza = 40 Error -Index signature in type 'TransactionObject1' only permits reading.
// non existng properties
// TypeScript doesn't throw an error when you try to access a non-existing property dynamically using bracket notation. I
// relying on undefined properties without proper checks in your code can still lead to runtime errors.
console.log(todaysTransaction["anything"]);
const stud1 = {
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
const teach1 = {
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
    console.log(`Key: ${key}, Value: ${teach1[key]}`);
}
console.log("---------------");
// another way of using keyof with type of
Object.keys(teach1).map((key) => {
    console.log(teach1[key]);
});
// another way of using keyof
function logTeacherKey(teacher, key) {
    console.log(`${key}: ${teacher[key]}`);
}
logTeacherKey(teach1, "subject");
// Interface cannot do this -  error
// interface Income {
//     [key: 'salary'|"bonus"]: number;
//   }
// disadvantage is we cannot restrict our keys to be
//  number,string,etc
const income = {
    salary: 5000,
    bonus: 300,
    sideHustle: 200
};
for (let revenue in income) {
    console.log(`Revenue from ${revenue}: $${income[revenue]}`);
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
