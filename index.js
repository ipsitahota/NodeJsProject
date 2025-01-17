// //basics in js
// var a=5;//use let or var
// var b=6;
// var ans=a+b;
// console.log("our sum:"+ans); 
// const name ="Gudly";//cant change name
// console.log(name); 
// console.log(typeof name); 
// console.log(typeof ans); 
// const cars =["volvo","suzuki","nano",947];
// console.log(cars); 
// console.log(cars[2]); 
// console.log(typeof cars); 

// //objects in js
// const person ={
//     name: "John Doe",
//     age: 30,
//     isStudent :false,
//     hobbies: ["reading","swimming","painting"]
// };

// console.log(person.age);//always have some key and value pair
// console.log(person.hobbies);//like here key is age and value is 30

// //functions in js
// const ages =[32,35,16,40];
// const result = ages.filter(checkAge);

// function checkAge(age) {
//     return age<=18;
// }

// console.log(result);r

var prompt = require('prompt-sync')();
const age = prompt("Please enter age:");
if (age<18){
    console.log("Not allowed");
}
else{
    console.log("Allowed");
}