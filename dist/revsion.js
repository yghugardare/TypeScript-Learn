"use strict";
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
var MontshInAYear;
(function (MontshInAYear) {
    MontshInAYear[MontshInAYear["January"] = 1] = "January";
    MontshInAYear[MontshInAYear["February"] = 2] = "February";
    MontshInAYear[MontshInAYear["March"] = 3] = "March";
    MontshInAYear[MontshInAYear["April"] = 4] = "April";
    MontshInAYear[MontshInAYear["May"] = 5] = "May";
    MontshInAYear[MontshInAYear["June"] = 6] = "June";
    MontshInAYear[MontshInAYear["July"] = 7] = "July";
    MontshInAYear[MontshInAYear["August"] = 8] = "August";
    MontshInAYear[MontshInAYear["September"] = 9] = "September";
    MontshInAYear[MontshInAYear["October"] = 10] = "October";
    MontshInAYear[MontshInAYear["November"] = 11] = "November";
})(MontshInAYear || (MontshInAYear = {}));
let propSubj = "subject";
let teacher1 = {
    nameOfT: "yash",
    salary: 1400,
    age: 12,
    subject: "CS",
};
console.log(teacher1["subject"]);
console.log(teacher1[propSubj]);
let teachr2 = {
    nameOfT: "ram",
    salary: 12000000000000,
    age: 23,
    subject: "ALL KNOWN"
};
for (let key in teachr2) {
    console.log(key, "has value", teachr2[key]);
}
// console.log(prop)
// generics
function concatArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const strArr = ["q", "a", "p"];
const numArr = [1, 2, 3, 3, 5, 5];
let ans = concatArrays(strArr, numArr);
console.log(ans);
function hasProperty(obj, key) {
    if (obj[key]) {
        console.log(key, " key exists with value as", obj[key]);
    }
    else {
        console.log(key, " does not exists");
        // return new Error("Invalid key")
    }
}
let myObj = {
    a: 1, b: "yo"
};
hasProperty(myObj, "b");
// hasProperty(myObj,"ba")
// utility types
// common and useful transformation on existing types
// help compose new types by modifying or extracting properties from 
// existing types , DRY
