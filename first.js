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
// let str = "Priyanshu K";
// let specialString = `This is a template literal`;
// let str2 = "Sharma";

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.trim())
// console.log(str.slice(0, 10))
// console.log(str.concat(str2))
// console.log(str.replace('s', 'ss'))
// console.log(str2.replaceAll('a', 'aa'))
// console.log(str.charAt(3))

// Arrays
// let marks = [97,98,95,96,98]
// console.log(marks)
// console.log(marks.length) //property


// Loop in Arrays
// for loop: length is required

// let heroes=["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

// console.log("Using for loop:")
// for(let idx=0; idx<heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

// for of
// console.log("Using for of loop:")
// for(let hero of heroes) {
//     console.log(hero);
// }


// let foodItems = ["potato", "apple", "banana", "tomato"];

// foodItems.push("chips"); //single value
// foodItems.push("chikoo", "kurkure", "orange"); //multiple items can be added
// console.log(foodItems);

// foodItems.pop(); //deletes last value
// console.log(foodItems);

// console.log(foodItems.toString());

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];

// let heroes= marvelHeroes.concat(dcHeroes);
// console.log("Combined heroes are:", heroes);

// let indianHeroes = ["shaktiman", "krish"];
// let heroes1= marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log("Combined heroes are:", heroes1);

// marvelHeroes.unshift("antman"); //adds on start
// console.log(marvelHeroes);

// marvelHeroes.shift(); //deletes from start
// console.log(marvelHeroes);


// console.log(marvelHeroes.slice(1,3)); //slicing

//splice: (startIdx, no. of elements the user need to delte after the start index, "new element need to be added")
// marvelHeroes.splice(1,0,"hawkeye")
// console.log(marvelHeroes); 

// let arr=[1,2,3,4,5,6,7,8];

// // arr.splice(2,5,8);
// arr.splice(2,5,45,67,89,42,32);
// console.log(arr);

// arr.splice(2,5,45);
// console.log(arr);

// Functions

// function myFunction(msg) { 
//     //parameter -> input

//     console.log(msg);
// }

// myFunction("Welcome to my website!!"); //argument

// function sumUp(a, b) {
//     sum=a+b;
//     console.log(sum);
// }

// sumUp(Number(prompt("Enter first number:")),Number(prompt("Enter second number:")))

// function sumUp1(a, b) {

//     //local variables -> can only be accessed within the block scope
//     sum=a+b;
//     return sum;
//     console.log(sum); // it will not run as func will always end at return
// }

// let val = sumUp1(3, 4);
// console.log(val);


// Arrow function
// const sum=(a,b) => {
//     return a+b;
// }

// let addition=sum(Number(prompt("Enter first number:")),Number(prompt("Enter second number:")))
// console.log(addition);

// const mul=(a,b) => {
//     return a*b;
// }

// let product=mul(Number(prompt("Enter first number:")),Number(prompt("Enter second number:")))
// console.log(product);

// forEach loop in array
// let arr=["Priyanshu", "k", "Sharma"];

// arr.forEach(function printVal(val) { //value at each index
//     console.log(val);
// });

// arr.forEach((val, idx, arr)=> {
//     console.log(val);
//     console.log(val.toUpperCase(), idx, arr);
// })

// Map
// let nums = [20,33,56,70];

// let newArr = nums.map((val)=> {
//     return val**2;
// });

// console.log(newArr);

// Filter
// let nums = [20,33,56,70];

// let evenArr = nums.filter((val)=> {
//     return val%2===0 && val>=25;
// });

// console.log(evenArr);

// Reduce
// Sum of all nums
// const array = [1,2,3,4];

// // 0+1+2+3+4
// const initialValue=0;
// const sumWithInitial = array.reduce(
//     (result, currentValue)=> result+currentValue, initialValue,
// );

// console.log(sumWithInitial);
// Expected value: 10

// Greatest of all nums
// let array1=[3,7,9,6,3,12];

// const output = array1.reduce((prev, curr)=> {
//     return prev>curr?prev:curr;
// });

// console.log(output);