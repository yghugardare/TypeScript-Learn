"use strict";
// Utility Types
const updateAssignment = (assignment, propsToUpdate) => {
    return { ...assignment, ...propsToUpdate };
};
const assign1 = {
    studentId: "12",
    title: "Math Homework",
    grade: 95,
};
console.log(assign1);
console.log(updateAssignment(assign1, { verified: false, grade: 70 }));
// Required and readonly
function sendAssignmentToDb(assignment) {
    // send to db operation
    return assignment;
}
// console.log(sendAssignmentToDb(assign1))//Error - Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'.
// Types of property 'verified' are incompatible
console.log(sendAssignmentToDb({ ...assign1, verified: true }));
const assign2 = {
    studentId: "p01",
    grade: 56,
    verified: false,
    title: "Generics in TS",
};
// assign2.grade = 12;//Error - Cannot assign to 'grade' because it is a read-only property.
console.log(assign2);
// record
const hexColorMap = {
    red: "FFOOE",
    green: "#0F0",
    blue: "00f",
};
const courseDetails = {
    dsa: "cpp",
    dev: "js",
    // ds : "r" Error:Type '"r"' is not assignable to type 'availableCourse'.
    ds: "python",
};
//Record by default is required to make it optional use
// partial type
const courseDetails1 = {
    dev: "js",
    // ds : "r" Error:Type '"r"' is not assignable to type 'availableCourse'.
    ds: "cpp",
};
const myDept = {
    Ds: {
        availableSeats: 60,
        departmentHead: "lol",
        deptFee: 6555,
        isAvailable: false,
    },
    dev: {
        availableSeats: 46,
        departmentHead: "mlio",
        deptFee: 67554,
        isAvailable: false,
    },
    dsa: {
        availableSeats: 2,
        departmentHead: "utt",
        deptFee: 868,
        isAvailable: true,
    },
};
console.log(myDept);
const myDept1 = {
    deptFee: 4500,
    availableSeats: 30,
    // isAvailable:true // Error - you cannot in TS 
};
// return type 
const createNewUser = (name, id, password) => {
    return { name, id, password };
};
const PrintNewUser = (name, id, password) => {
    return `User ${name} has been created!`;
};
async function fetchUser2() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
}
fetchUser2().then(users => console.log(users));
