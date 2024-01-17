"use strict";
// Generic in TS
// provide a placeholder
const stringEcho = (arg) => arg;
// more generic , so that 
// the function can work with any type of argument
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof (arg) === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'yo', role: 34 }));
console.log(isObj({}));
console.log(isObj(null));
// isTrtue with key of assertions
function isTrue(arg) {
    // checking for falsy values in arrays
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    // for those who are truthy in nature
    return { arg, is: !!arg };
}
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("yo"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({ name: "yo", age: 45 }));
console.log(isTrue(NaN));
console.log(isTrue(-0));
console.log("-------------------------------------------------------");
function checkBool(arg) {
    // checking for falsy values in arrays
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    // for those who are truthy in nature
    return { value: arg, is: !!arg };
}
const processUser = (user) => {
    // procees the user with logic
    return user;
};
console.log(processUser({ id: 1, name: 'John' }));
// console.log(processUser({name:'John'})) // TS Error - bject literal may only specify known properties, and 'name' does not exist in type 'HasId'
// Multiple Type Variables & Extends with keyof
function getUserProperty(users, key) {
    return users.map(user => user[key]);
}
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUserProperty(usersArray, "id"), "\n", getUserProperty(usersArray, "email"));
// class with generics
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
// here based on the TS infers that store1 should have 
// value as string
const store1 = new StateObject("yash");
console.log(store1.state);
store1.state = "hello world";
console.log(store1.state);
// store1.state = 12 //Error - as TS infered value to be string
// we can specify what kind of object you want as well
const store2 = new StateObject([15]);
console.log(store2.state);
store2.state = ['yash', 56, true];
console.log(store2.state);
