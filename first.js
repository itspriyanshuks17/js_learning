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
const student = {
    name:"Priyanshu",
    age:20,
    cgpa: 9.8,
    isPass: true
};


//Updating key values
student['age'] = student['age'] + 1;

console.log(student);
console.log(student.age);
