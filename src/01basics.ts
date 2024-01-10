let userName:string;
let age:number;
let email:string;
let isLoggedIn:boolean;
let userImage:any;
userName = "yash"
age=25;
age = 68;
email="yash.kumar@gmail.com";
isLoggedIn = true;
userImage = "img.png"
userImage = 90
console.log(userImage,userName,email,age,isLoggedIn)
let value:string | number;
function addTwoStrings(param1:string,param2:string):string{
    return param1+param2;
}
value = addTwoStrings("Hello"," World");
console.log(value)
function addTwoNumbers(num1:number , num2:number):number{
    return num1 + num2 ;
}
value = addTwoNumbers(5,2)
console.log(value)
const addInGeneral = (a: number | string, b: number | string): string | number => {
    // Type guard to check if both values are numbers
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // Addition for numbers
    }

    // If not numbers, concatenate as strings
    return `${a}${b}`;
};

// Example usage
console.log(addInGeneral(5, 10));        // Output: 15
console.log(addInGeneral("Hello", "World"));  // Output: HelloWorld
console.log(addInGeneral(5, "World"));   // Output: 5World
