// Utility Types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}
const updateAssignment = (
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>
) => {
  return { ...assignment, ...propsToUpdate };
};
const assign1: Assignment = {
  studentId: "12",
  title: "Math Homework",
  grade: 95,
};
console.log(assign1);
console.log(updateAssignment(assign1, { verified: false, grade: 70 }));

// Required and readonly
function sendAssignmentToDb(assignment: Required<Assignment>): Assignment {
  // send to db operation
  return assignment;
}
// console.log(sendAssignmentToDb(assign1))//Error - Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'.
// Types of property 'verified' are incompatible
console.log(sendAssignmentToDb({ ...assign1, verified: true }));
const assign2: Readonly<Assignment> = {
  studentId: "p01",
  grade: 56,
  verified: false,
  title: "Generics in TS",
};
// assign2.grade = 12;//Error - Cannot assign to 'grade' because it is a read-only property.
console.log(assign2);
// record
const hexColorMap: Record<string, string> = {
  red: "FFOOE",
  green: "#0F0",
  blue: "00f",
};
type availableCourse = "python" | "js" | "cpp";
type StudentDomaains = "dev" | "dsa" | "ds";
const courseDetails: Record<StudentDomaains, availableCourse> = {
  dsa: "cpp",
  dev: "js",
  // ds : "r" Error:Type '"r"' is not assignable to type 'availableCourse'.
  ds: "python",
};
//Record by default is required .to make it optional use partial type
const courseDetails1: Partial<Record<StudentDomaains, availableCourse>> = {
  dev: "js",
  // ds : "r" Error:Type '"r"' is not assignable to type 'availableCourse'.
  ds: "cpp",
};
// interface and record utility
type Departments = "dsa" | "dev" | "Ds";
interface DepartmentInfo {
  availableSeats: number;
  departmentHead: string;
  deptFee: number;
  isAvailable: boolean;
}
const myDept: Record<Departments, DepartmentInfo> = {
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
console.log(myDept)
// Pick and Omit
type DeptPickExType = Pick<DepartmentInfo,"deptFee"|"availableSeats">
const myDept1:DeptPickExType = {
    deptFee : 4500,
    availableSeats : 30,
    // isAvailable:true // Error - you cannot in TS 
}
type DeptOmitExType = Omit<DepartmentInfo,"availableSeats">

// lets see , if we can do the same for type assertion
// type DeptExType = Pick<Departments,"dsa"> // you cannot, becoz it does not have key valu pairs

// Extract and Exclude
type DeptExtractType = Extract<Departments,"dsa"|"dev">
type DeptExcludeType = Exclude<Departments,"dsa"|"dev">

// nonnullable 
type AllPosibleFalsyValues = 0 | false | undefined | null | "" | -1
type nonnullableType = NonNullable<AllPosibleFalsyValues> // null and undefined excluded

// return type 
const createNewUser = (name:string,id:number,password:string)=>{
    return {name,id,password}
}
const PrintNewUser = (name:string,id:number,password:string)=>{
    return `User ${name} has been created!`
}
type UserR = ReturnType<typeof createNewUser>
type PrintR = ReturnType<typeof PrintNewUser>
// parameters
type UserParamType = Parameters<typeof PrintNewUser>

// Awaited -  Helps us with return type of a promise

interface User2{
    id: number,
    name: string,
    username: string,
    email: string,
}

async function fetchUser2():Promise<User[]>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users'
    ).then(res=>{
        return res.json()
    }).catch(err=>{
        if(err instanceof Error){
            console.log(err.message)
        }
    })
    return data;
}
// type FetchUserReturnType  = ReturnType<typeof fetchUser2>
type FetchUserReturnType  = Awaited<ReturnType<typeof fetchUser2>>

fetchUser2().then(users => console.log(users))