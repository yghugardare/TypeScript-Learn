"use strict";
// not possible in inteface
// literal types 
let myName;
myName = 'Yash';
// functions
const add = (a, b) => {
    return a + b;
};
// function that do not return any type
const logMsg = (message) => {
    console.log(message);
};
logMsg(myName);
logMsg(add(3, 5));
let substract = function (c, d) {
    return c - d;
};
logMsg(substract(10, 5));
// now we can use this type for all math functions
// this way type aliases help us in obeying DRY(Donot Repeat Yourself) principle
let multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(6, 9));
let divide = (a, b) => {
    return a / b;
};
logMsg(divide(27, 3));
// optional parameters
function fullname(firstName, lastName) {
    // use narrowing concept
    // we use type guard to narrow down value
    if (lastName !== undefined) {
        console.log(`${firstName} ${lastName}`);
    }
    console.log(firstName);
}
fullname("John");
fullname("John", "Doe");
// default parameter
// another way of doing
const addAll = (a = 10, b, c = 0) => {
    return a + b + c;
};
console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));
logMsg(addAll(undefined, 3)); // 13
// rest parameter
// used to capture all the remaining 
// arguments in a function as an array.
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(10, 20, 30, 40)); //100
// Note - rest must always be present at the end if there
// are more than one params
// never type
// essentially for functions that explicitly throw errors
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// also used when there is an infinite loop
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        // i++; 
        // to make it type void, we add if
        // if(i > 10) break;
    }
};
// making never usefull
// TS has problem
// const numberOrString = (value:number | string):string=>{
//     if(typeof value === 'string') return 'string'
//     if (typeof value === 'number') return 'number'
// }
// TO SOLVE
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    // we reutrn something of type never
    return createError("Something went wrong");
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number"
        ? true : false;
};
// use it
const numberOrString1 = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    // we reutrn something of type never
    return createError("Something went wrong");
};
logMsg(numberOrString1('goku'));
logMsg(numberOrString1(34));
// logMsg(numberOrString1([1,2,3,])) Something went wrong error
