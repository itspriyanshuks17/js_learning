/*console.log("Welcome to Apna College");
console.log("Priyanshu Kumar Sharma");*/
/*JS: Dynamically typed language */ 

/*Data Types and Variables*/

// age=25;
// name="Tony Stark"
// price=99.99;
// x=null;
// y=undefined;
// isFollow=false;
// let m = BigInt("123");
// let n = Symbol("hello");

// console.log(name);
// console.log(age);
// console.log(x);
// console.log(price);
// console.log(y);
// console.log("Priyanshu K Sharma")

// console.log(typeof(m));
// console.log(typeof(n));

// Variables
// var keyword
// var age = 20;
// age = 22; 
// console.log(age);

// var age = 23//Can be modified and re declared
// console.log(age);

// //let keyword
// let age1 = 20;
// age1=21; //Only modification allowed
// console.log(age1);

// //const
// const age2=24
// console.log(age2);

/*Objects*/
// const student = {
//     name:"Priyanshu",
//     age:20,
//     cgpa: 9.8,
//     isPass: true
// };


// //Updating key values
// student['age'] = student['age'] + 1;

// console.log(student);
// console.log(student.age);

// Condtional Statement
// if statement
// 1. age
// let age = 25;

// if(age >= 18) {
//     console.log("You can vote");
// }

// if(age<18) {
//     console.log("You cant vote");
// }

// 2. color mode
// let mode = "dark";
// let color;

// if(mode==="dark") {
//     color="black";
// }

// if(mode==="light") {
//     color="white";
// }

// console.log(color);


// if-else statement
// let color;

// if(mode==="dark") {
//     color="black";
// } else {
//     color="white";
// }

// console.log(color);

// odd or even
// let num = 20;

// if (num%2===0) {
//     console.log(num,"is Even");
// }   else {
//     console.log(num, "is Odd");
// }

// else if Statement
// let age = 18

// if(age < 18) {
//     console.log("Junior");
// }   else if(age>60)  {
//     console.log("Senior citizen");
// }   else {
//     console.log("middle");
// }


// For Loop
// Print 1 to 5
// for(let count=1; count<=5; count++) {
//     console.log("Priyanshu K Sharma");
// }

// console.log("Loop has ended");

// Average of first 5 num
// let sum=0;
// let num=prompt("Enter the number:")

// for(let i=1; i<=num; i++) {
//     sum+=i;
// }
// console.log("Sum = ", sum);


// Infinite Loop-> A loop that never ends
// for(let count=1; count>0; count++) {
//     console.log("Priyanshu K Sharma");
// }

// console.log("Loop has ended");

// while loop
// let i = 1;
// while(i<=5) {
//     console.log("PriyanshuKSharma");
//     i++;
// }

// do while loop
// let n =1;
// do {
//     console.log("PriyanshuKSharma");
//     i++;
// } while(n<=5);

// for-of loop
// let str = "PriyanshuKSharma";
// let size=0;

// for(let i of str) {
//     console.log("i=", i);
//     size++;
// }

// console.log("String size = ", size);


// let student = {
//     name: "Priyanshu",
//     age:20,
//     cgpa:9.89,
//     isPass: true

// };

// for(let key in student) {
//     console.log("key: ", key, "value: ", student[key]);
// }

// Strings
let str = "Priyanshu K";
let specialString = `This is a template literal`;
let str2 = "Sharma";

let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price}`;
console.log(output);

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(str.slice(0, 10))
console.log(str.concat(str2))
console.log(str.replace('s', 'ss'))
console.log(str2.replaceAll('a', 'aa'))
console.log(str.charAt(3))