// type assertions in TS
// Type assertions in TypeScript are a way to 
// tell the TypeScript compiler that you know 
// more about the type of a value than it can 
// infer. It is a way to override the default 
// type inference and specify a different or more 
// specific type for a variable.

//They are typically used when working with external 
// libraries or when the compiler cannot 
// accurately determine the type of a value.
type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific type
// using as keyword
let a : One = 'hello';
let b = a as Two; //less specific, b can either be a string or number or hello string
let c = a as Three; //more specific, c is hello

// we can also use <> Angle brackets instead of as
// Angle brackets not preferable as they cannot be used
// in react .tsx files
let d = <One>'world';
let e = <string | number>'world';

// using assertions for narrowing
const addorConcat = (a:number,b:number,c:'add'|'concat'):number | string =>{
    if(c === 'add') return a + b;
    return ''+a+b;
}
// it will give warning
// let myVal: string = addorConcat(2,2,'concat')
// we can use assertion and tell TS, that hey this
// myVal is going to be a string , so remove warning
let myVal: string = addorConcat(2,2,'concat') as string;
// similarly
let myVal2: number = addorConcat(5,6,'add') as number;
console.log(myVal)
console.log(myVal2)
// But be careful! as TS sees no problem - but a string is returned below
let myVal3:number = addorConcat(2,3,'concat') as number;
console.log(myVal3) // 23

// 10 as string // TS can identify this as wrong
// warning - Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first

// unknown vs any
// he `unknown` type is a type that represents values that are not yet known. It is similar to the `any` type but with additional type checking. Unlike the `any` type, you cannot access properties or call methods on a variable of type `unknown` without explicit type assertion or type narrowing.

// double/forced casting
// Double casting, or forced casting, is a technique where you perform two type assertions in a row. It involves using the `as` keyword or angle bracket syntax to explicitly cast a value to a different type
// (10 as unknown) as string

// The dom
// topics covered =
// 1. HTML types 
// 2. non null assertions
// both cannot be used at the same time

const img = document.querySelector('img')! // infers htmlImageElement
// const img = document.querySelector('#myId');//inferes Element
const myImg = document.getElementById('#img') as HTMLImageElement// infers HtmlElement
// img.src // w/o inference-warns - can be null
// non null assertion syntax '!'  element in not null
// myImg.src 

// Challenge
// My Sol - 
// const year = document.getElementById('year') as HTMLSpanElement;
// const thisYear:number = new Date().getFullYear()
// year.setAttribute("datetime",(thisYear as unknown) as string)
// year.textContent = (thisYear as unknown) as string;
// optimal way - 
const year = document.getElementById('year') as HTMLSpanElement;
const thisYear:string = new Date().getFullYear().toString();
year.setAttribute("datetime",thisYear)
year.textContent = thisYear;
