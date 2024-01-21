// data types in ts
// let pogo:any = 12;
// let age: number = 15;
// let name: string = "yash";
// let isSingle: boolean = true;
// let falsyValue:number|string|boolean = 0

// console.log(falsyValue,age,name,isSingle)

// let names: readonly string[] = ["yash","ram","laximan"]
// console.log(names[0])

// let animes:Array<String> = ["dbz","op","opm","sl"]
// animes.push("naruto")
// animes.unshift("black clover")
// animes.pop()
// animes.shift()
// let slicedAnimes: String[] = animes.slice(1,5)
// animes.splice(4,1,"Solo leveling")
// animes.splice(1,0,"mashle magic muscles","Bleach","MHA","fairy tail")

// console.log(animes)
// console.log(slicedAnimes)
// let [myName,myGod,myIdolGod] = names;
// console.log(myName)
// console.log(myGod)
// console.log(myIdolGod)
// names[0] = "om"
// names.pop()
// console.log(names)
//spread
// let arr1:number[]=[1,2,3];
// let arr2:number[]=[4,5,6,69];
// let resultArr:number[] = [...arr1,...arr2]
// console.log(resultArr);
// // rest
// function substractFrom100(...args:number[]):number{
//     let ans:number = 100;
//     for(let i:number=0;i<args.length;i++){
//         ans -= args[i]
//     }
//     return ans
// }
// console.log(substractFrom100(1,4,53,3))
// dynamic , tuple = fixed size
// let mixedList:(number|boolean)[] = [false,12,true]
// console.log(mixedList)
// bad practice

// type animeHeroCharacter = {
// name: string,
// animeName: string,
// age?:number,
// superPower:string,
// famousDialogue() : string,
// loveInterests : string[] | string,
// }
// let hero1 : animeHeroCharacter = {
//     name : "Naruto uzumaki",
//     animeName : "Naruto",
//     superPower : "Rasengan and Shaow Clone",
//     famousDialogue(){
//         return "I am going to be next Hokage!! Believe it!"
//     },
//     loveInterests : ["Sakura Haruno","Hinata"],

// }
// console.log(hero1)
// console.log(hero1.famousDialogue())

// interface AnimeHero {
//     name: string,
//     animeName: string,
//     age?:number,
//     superPower:string,
//     famousDialogue() : string,
//     loveInterests : string[] | string,
// }
// function isAdult(hero:AnimeHero):void{
//     if(hero.age !== undefined && hero.age >=18){
//         console.log(hero.name," is adult")
//     }else{
//         console.log(hero.name," is not an adult")
//     }
// }
// let hero2:AnimeHero={
//     name:"Goku",
//     animeName:"Dragon Ball Z",
//     age: 27,
//     superPower:"Kamehameha",
//     famousDialogue(){
//         return `My ${this.superPower} power is the power of the universe!`
//     },
//     loveInterests : "Chi chi"
// }
// console.log(hero2)
// console.log(hero2.famousDialogue())
// isAdult(hero2)
// hero2.age = 15
// isAdult(hero2)
enum MontshInAYear {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
}
// let monthValue:number = Number(prompt("Enter a value: "))
// switch (monthValue) {
//     case MontshInAYear.January:
//         console.log("It's January");
//         break;
//     case MontshInAYear.February:
//         console.log("Its February");
//         break;
//     case MontshInAYear.March:
//         console.log("Its March");
//         break;
//     default:
//         console.log("Enter a valid month")
//         break;
// }

// let arr1: any = [1, 2, 3, 4, "ke"];
// let arr2: unknown = [1, 2, 3, "joker"];
// console.log(arr1.length);
// // console.log(arr2.length)
// class LMSTeacher {
//   constructor(
//     public username: string,
//     private salary: number,
//     protected subject: string = "TypeScript"
//   ) {
//     this.username = username;
//     this.salary = salary;
//     this.subject = subject;
//   }
//   teach() {
//     return `${this.username} is teaching ${this.subject}`;
//   }
// }
// let t01 = new LMSTeacher("goku", 12000, "martial arts");
// // console.log(t01.username,t01.subject)
// class AssistantTeacher extends LMSTeacher {
//   static count: number = 0;
//   public id: number;
//   constructor(username: string, salary: number) {
//     super(username, salary);
//     this.id = ++AssistantTeacher.count;
//   }
//   teach() {
//     return `Assistant Teacher ${this.username} with ${this.id} is helping with ${this.subject}`;
//   }
// }
// let at1 = new AssistantTeacher("gohan", 3400);
// let at2 = new AssistantTeacher("picolo", 3400);
// console.log(at1.teach());
// console.log(at2.teach());
// interface Admin {
//   name: string;
//   age?: number;
//   role: string;
//   dashboardStats: string[];
//   adminDetails(): void;
// }
// class LMSAdmin implements Admin {
//   name: string;
//   age?: number | undefined;
//   role: string;
//   dashboardStats: string[];

//   constructor(name: string, role: string, age?: number) {
//     this.name = name;
//     this.age = age;
//     this.role = role;
//     this.dashboardStats = [];
//   }
//   adminDetails(): void {
//     console.log(this.name, " is admin with role ", this.role);
//   }
//   public set dashboardData(value: string[]) {
//     if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
//       this.dashboardData = value;
//       return;
//     } else {
//       throw new Error("param is not an array of string");
//     }
//   }
//   public get dashboardData() {
//     return this.dashboardStats;
//   }
// }
// const ad1 = new LMSAdmin("yash", "lol", 34);
// //ad1.adminDetails();
// const ad2 = new LMSAdmin("om", "teacher", 32);
// ad2.dashboardData = [...ad2.dashboardData, "view", "subscription, users"];
// console.log(ad2.dashboardData);
// interface Expenses {
//   readonly [index:string]:number | string | undefined;
//   dineOutExpenses:number;
// }
// const myExpense: Expenses = {
//   food: 10,
//   clothing: 50,
//   medicines: 23,
//   hulkToy : 43,
//   dineOutExpenses:65,
// };
// console.log(myExpense["food"]);
// console.log(myExpense.food);
// let foodProp: string = "food";
// // console.log(myExpense.foodProp) // invalid way
// console.log(myExpense[foodProp]) //valid
// // loop
// for(let key in myExpense){
//   console.log(key,"has value",myExpense[key])
// }
// // myExpense.food = 15
// myExpense.dineOutExpenses = 34;
// console.log(myExpense["c"]) // no compilation error
// interface TP{
//   a:number,b:string
// }
// let tp:TP= {
//   a:12,
//   b:"lol"
// }
// console.log(tp["c"])

// interface Expenses {
//   readonly [index:string]:number | string | undefined;
//   dineOutExpenses:number;
// }
interface Teacher12 {
  subject: string;
  nameOfT: string;
  salary: number;
  age?: number;
}
type prop= keyof Teacher12;
let propSubj:prop="subject";
let teacher1: Teacher12 = {
  nameOfT: "yash",
  salary: 1400,
  age: 12,
  subject: "CS",
};
console.log(teacher1["subject"])
console.log(teacher1[propSubj])
let teachr2:Teacher12 = {
  nameOfT:"ram",
  salary:12000000000000,
  age:23,
  subject:"ALL KNOWN"
}
for(let key in teachr2){
  console.log(key,"has value",teachr2[key as prop])
}
// console.log(prop)


// generics
function concatArrays<T,D>(arr1:T[],arr2:D[]):(T|D)[]{
  return [...arr1,...arr2]
}
const strArr:string[] = ["q","a","p"]
const numArr:number[] = [1,2,3,3,5,5]
let ans = concatArrays(strArr,numArr)
console.log(ans)

function hasProperty<T,K extends keyof T>(obj:T,key:K):void{
  if(obj[key]){
    console.log(key," key exists with value as",obj[key] );
  }else{
    console.log(key," does not exists")
    // return new Error("Invalid key")
  }
}
let myObj:{a:number,b:string} ={
  a:1,b:"yo"
}
hasProperty(myObj,"b")
// hasProperty(myObj,"ba")
// utility types
// common and useful transformation on existing types
// help compose new types by modifying or extracting properties from 
// existing types , DRY
