"use strict";
let prices = [10, 20, 30, 50];
const animeNames = [
    "Solo Leveling",
    "Dragon ball Z",
    "Naruto",
    "Black Clover",
];
const mixedArr = [1, "jjk", false];
const shopItems = [
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
const fixedRates = [40, 79, 63];
// fixedRates[3] = 89; // Index signature in type 'readonly number[]' only permits reading
console.log(fixedRates);
// Hod's
shopItems.filter((item) => {
    if (item.price < 100) {
        console.log("Item with less prices is/are ", item.name);
    }
});
// tuples in TS
// mixed elements easily
// instead of using array
let myTuple = [8, "lol"];
// let myTuple:[number,string]= ["lol",8] not like this
let store = [12, "students", false];
console.log(myTuple, " store ", store);
// optional
let bankDetails = [56, "lol"];
console.log(bankDetails);
// rest
let bgVar = [12, "lol", "kite", false];
// optional elment must always be present in the last
// let optionalTup: [number,boolean,...string[]] =[12,false] 
let optionalTup = [12, false];
console.log(bgVar);
console.log(optionalTup);
// tuple vs array
let tup = [12, "om"];
let arr = [12, "om", 67, "ju"];
const user1 = {
    id: "u101",
    name: "John Doe",
    email: "johnDoe@gmail.com",
    age: 34,
    subscribe() {
        return `Hello ${this.name} is Subscribed!`;
    },
    hasSubscribed: false,
};
console.log(user1.age);
console.log(user1.subscribe());
function displayTeacherInfo(teacher) {
    if (teacher.isAvailable !== undefined) {
        console.log(`${teacher.name} is available for teaching`);
    }
    else {
        console.log(`${teacher.name} is NOT available for teaching`);
    }
}
let t1 = {
    id: 5,
    name: "gojo",
    subject: "Maths",
    isAvailable: true
};
let t2 = {
    id: 15,
    name: "kakashi",
    subject: "Maths"
};
displayTeacherInfo(t1);
displayTeacherInfo(t2);
// enums in TS
// Define the HttpStatus enum
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
// Function that simulates an HTTP request and returns a status code
function simulateHttpRequest() {
    // Simulate a random HTTP status code for the example
    const randomStatusCode = Math.random() > 0.5 ? HttpStatus.OK : HttpStatus.InternalServerError;
    return randomStatusCode;
}
// Main program
const responseStatus = simulateHttpRequest();
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
console.log(HttpStatus.NotFound); // 500
console.log(HttpStatus.OK); //404
