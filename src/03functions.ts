// type aliases
type stringOrNumberArray = string | number[]
// not possible in inteface

// literal types 
let myName: 'Yash' | 'Om' | 'Ram'
myName = 'Yash'

// functions
const add = (a:number,b:number): number => {
    return a + b;
}
// function that do not return any type
const logMsg = (message:any):void=>{
    console.log(message)
}
logMsg(myName);
logMsg(add(3,5));
let substract = function(c:number,d:number):number{
    return c - d;
}
logMsg(substract(10,5))
// function type aliases
type mathFunction = (a: number,b: number) => number;
// now we can use this type for all math functions
// this way type aliases help us in obeying DRY(Donot Repeat Yourself) principle
let multiply: mathFunction = (a,b)=>{
    return a * b;
}
logMsg(multiply(6,9));
// interface can also be used for defining
// function signature, but prefer type over interface here
interface MathFunction{
    (a: number, b: number): number;
}
let divide:MathFunction = (a,b)=>{
    return a / b;
}
logMsg(divide(27,3));
// optional parameters
function fullname(firstName:string, lastName?:string){
    // use narrowing concept
    // we use type guard to narrow down value
    if(lastName !== undefined){
        console.log(`${firstName} ${lastName}`);
    }
    console.log(firstName)
}
fullname("John");
fullname("John", "Doe");
// default parameter
// another way of doing
const addAll= (a:number=10,b:number,c:number=0):number=>{
    return a + b + c;
}
console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));
logMsg(addAll(undefined,3)); // 13
// rest parameter
// used to capture all the remaining 
// arguments in a function as an array.
const total = (...nums: number[]):number =>{
    return nums.reduce((prev,curr)=>prev+curr,0);
}
logMsg(total(10,20,30,40)) //100
// Note - rest must always be present at the end if there
// are more than one params

// never type
// essentially for functions that explicitly throw errors
const createError = (errMsg:string):never=>{
    throw new Error(errMsg)
}
// also used when there is an infinite loop
const infiniteLoop = ():never=>{
    let i:number =1;
    while(true){
        // i++; 
        // to make it type void, we add if
        // if(i > 10) break;
    }
}
// making never usefull
// TS has problem
// const numberOrString = (value:number | string):string=>{
//     if(typeof value === 'string') return 'string'
//     if (typeof value === 'number') return 'number'

// }
// TO SOLVE
const numberOrString = (value:number | string):string=>{
    if(typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    // we reutrn something of type never
    return createError("Something went wrong");
}
// custom type guard
const isNumber = (value : any): boolean =>{
    return typeof value === "number"
            ?true: false;
}
// use it
const numberOrString1 = (value:number | string):string=>{
    if(typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    // we reutrn something of type never
    return createError("Something went wrong");
}
logMsg(numberOrString1('goku'))
logMsg(numberOrString1(34))
// logMsg(numberOrString1([1,2,3,])) Something went wrong error

