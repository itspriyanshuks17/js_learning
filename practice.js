// Objects
// 1. Create a const object called product to store info about the object
// const product = {
//   title: "ball pen",
//   rating: 4.5,
//   offer: 5,
//   price: 79
// }


// 2. Create a const object called "profile" to store info about the person
// const profile = {
//   uname: "the_priyanshuk_sharma",
//   isFollow: true, 
//   followers: 230,
//   following: 340,
//   posts: 41,
//   bioDetails: "This ofiicial profile of Priyanshu Kumar Sharma"
// }


// Conditional Statements & Operators
//  1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number:");

// if(num%5===0) {
//   console.log(num, "is divided by 5");
// } else {
//   console.log(num, "is not divided divided by 5");
// }

// 2. Write a code which can give grades to students according to their scopes:

// let marks = prompt("Enter your marks:");

// if(marks>=90) {
//   console.log("You got A");
// } else if(marks>=80 && marks<=89) {
//   console.log("You got B");
// } else if(marks>=70 && marks<=79) {
//   console.log("You got C");
// } else if(marks>=60 && marks<=69) {
//   console.log("You got D");
// } else if(marks>=50 && marks<=59) {
//   console.log("You got E");
// } else {
//   console.log("You failed");
// }

// Loops and Strings
// Loops
// 1. Print all even numbers from 0 to 100
// let num=0;
// let n=100;

// while(num<=n) {
//   if(num%2===0) {
//     console.log(num)
//   }
//   num++;
// }

// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
// let gameNum = 25;

// let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum) {
//   userNum = prompt("Wrong number entered, enter again: ");
// }

// console.log("Numbers matched");


// Strings
// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length
// let fullName=prompt("Enter your username: ");

// let userName = '@'+fullName+fullName.length;
// console.log(userName);


// Arrays
// 1. For a given array with marks of students -> [85,97,44,37,76,60], find the average marks of the entire class

// let marks = [85,97,44,37,76,60];

// let sum=0;

// for(let val of marks) {
//   sum+=val;
// }

// average=sum/marks.length;
// console.log("Average is: ", average);


// 2. For a given array with prices of 5 items-> [250,645,300,900,50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let items=[250,645,300,900.50];

// let offer = 0;

// let i=0;
// for(let val of items) {
//   console.log(`Original price of ${val}: ${items[i]}`);
//   offer=val/10;
//   items[i]=items[i]-offer;
//   console.log(`Discounted price of ${val}: ${items[i]}`);
//   i++;
// }


// let items1=[250,645,300,900.50];
// console.log("Original price of items:", items1);

// for(let idx=0; idx<items1.length; idx++) {
//   offer=items1[idx]/10;
//   items1[idx]=items1[idx]-offer;
// }

// console.log("Discounted price of items:", items1);

// 3. Create an array to store companies ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
/*
a. Remove the first company from the array
b. Remove Uber & add Ola in its place
c. Add amazon at the end
*/

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a. Remove the first company from the array
// console.log(companies.shift())

// b. Remove Uber & add Ola in its place
// let update=companies.splice(2,1,"Ola");
// console.log(companies);

// c. Add amazon at the end
// companies.push("Amazon");
// console.log(companies);