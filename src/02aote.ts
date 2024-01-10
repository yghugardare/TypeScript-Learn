let prices: number[] = [10, 20, 30, 50];
const animeNames: string[] = [
  "Solo Leveling",
  "Dragon ball Z",
  "Naruto",
  "Black Clover",
];
const mixedArr: (string | number | boolean)[] = [1, "jjk", false];
const shopItems: { name: string; price: number }[] = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 70 },
  { name: "Keyboard", price: 150 },
  { name: "mobile", price: 99 },
];
// prices[2] = "lol" Type 'string' is not assignable to type 'number'.
console.log(prices);
console.log(`Anime names length : ${animeNames.length}`);
prices.pop();
// prices.push("klol") type string not assignable
prices.push(40); // OK!
prices.unshift(69);
console.log(prices);
const fixedRates: readonly number[] = [40, 79, 63];
// fixedRates[3] = 89; // Index signature in type 'readonly number[]' only permits reading
console.log(fixedRates);
// Hod's
shopItems.filter((item: { name: string; price: number }): void => {
  if (item.price < 100) {
    console.log("Item with less prices is/are ", item.name);
  }
});
// tuples in TS
// mixed elements easily
// instead of using array
let myTuple:[number,string]= [8,"lol"]
// let myTuple:[number,string]= ["lol",8] not like this
let store:[number,string,boolean] = [12,"students",false];
console.log(myTuple," store ",store)
// optional
let bankDetails:[number, string , number?] = [56,"lol"]
console.log(bankDetails)
// rest
let bgVar: [number,...string[],boolean] =[12,"lol","kite",false] 
// optional elment must always be present in the last
// let optionalTup: [number,boolean,...string[]] =[12,false] 
let optionalTup: [number,boolean,...string[]] =[12,false] 
console.log(bgVar)
console.log(optionalTup)
// tuple vs array
let tup:[number,string] = [12,"om"];
let arr:(number | string)[] = [12,"om",67,"ju"]
// arr = tup ✅
// tup = arr ❌
// objects in TS
// //self infered
// const user = {
//     name : 'yash',
//     age : 21,
//     email : 'y@g.com',
//     hasSubscribed : false
// }
// //Defining object property type on place
// const user:{
//     id : number | string
//     name : string,
//     // ?: means optional
//     age ?: number,
//     email : string,
//     hasSubscribed?: boolean,
//     // method
//     subscribe : () => string
// } = {
//     // order does not matter
//     email : 'y@g.com',
//     id : "p12",
//     name : 'yash',
//     // age : 21, no problem
//     subscribe : function():string{
//         return `${this.name}  subscribed`
//     },
//     hasSubscribed : false
// }
// // accessing properties and methods of object
// console.log(user.email)
// console.log(user.subscribe())
// type in TS

// type User = {
//     id : number | string,
//     name : string,
//     age? : number,
//     email : string,
//     hasSubscribed?:boolean,
//     subscribe() : string,
   
// }
// const user1:User = {
//     id : "u101" ,
//     name : "John Doe" ,
//     email : "johnDoe@gmail.com",
//     age : 34,
//     subscribe(){
//         return `Hello ${ this.name } is Subscribed!`;
//     },
//     hasSubscribed:false,
    
// }
// console.log(user1.age)
// console.log(user1.subscribe());
// interface

interface User  {
    id : number | string,
    name : string,
    age? : number,
    email : string,
    hasSubscribed?:boolean,
    subscribe() : string,
   
}
const user1:User = {
    id : "u101" ,
    name : "John Doe" ,
    email : "johnDoe@gmail.com",
    age : 34,
    subscribe(){
        return `Hello ${ this.name } is Subscribed!`;
    },
    hasSubscribed:false,
    
}
console.log(user1.age)
console.log(user1.subscribe());
// narrowing and optional chaining
interface Teacher{
    id:number,
    name :string,
    subject:string,
    isAvailable?:boolean | undefined 
}
function displayTeacherInfo(teacher:Teacher){
    if(teacher.isAvailable !== undefined){
        console.log(`${ teacher.name } is available for teaching`);
    }else{
        console.log(`${ teacher.name } is NOT available for teaching`);

    }
}
let t1 : Teacher = {
    id : 5,
    name : "gojo",
    subject:"Maths",
    isAvailable:true
}
let t2 : Teacher = {
    id : 15,
    name : "kakashi",
    subject:"Maths"
}
displayTeacherInfo(t1)
displayTeacherInfo(t2)

// enums in TS
// Define the HttpStatus enum
enum HttpStatus {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500,
  }
  
  // Function that simulates an HTTP request and returns a status code
  function simulateHttpRequest(): HttpStatus {
    // Simulate a random HTTP status code for the example
    const randomStatusCode = Math.random() > 0.5 ? HttpStatus.OK : HttpStatus.InternalServerError;
    return randomStatusCode;
  }
  
  // Main program
  const responseStatus: HttpStatus = simulateHttpRequest();
  
  // Check the HTTP status and provide a message
  switch (responseStatus) {
    case 200:
      console.log("Request was successful.");
      break;
    case HttpStatus.NotFound:
      console.log("Resource not found.");
      break;
    case 500:
      console.log("Internal server error occurred.");
      break;
    default:
      console.log("Unexpected HTTP status code.");
      break;
  }
  console.log(HttpStatus.NotFound) // 500
  console.log(HttpStatus.OK) //404
  

