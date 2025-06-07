# JavaScript Tutorial

## Variable:
1. var: variable can be re-declared & updated. A global scope variable(It is a global variable can be accessed outside the block)

2. let: variable cannot be re-declared but can be updated. A block scope variable

3. const: Variable cannot be re-declared or updated. Ablock scope variable

```
// var keyword
var age = 20;
age = 22; 
console.log(age);

var age = 23//Can be modified and re declared
console.log(age);

//let keyword
let age1 = 20;
age1=21; //Only modification allowed
console.log(age1);

//const
const age2=24
console.log(age2);
```
---


## Data types in JS: (to check data type: typeof())

### 1. Primitive Data Types:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt 
7. Symbol

```
//Data Types
age=25;
name="Tony Stark"
price=99.99;
x=null;
y=undefined;
isFollow=false;
let m = BigInt("123");
let n = Symbol("hello");

//Printing values
console.log(name);
console.log(age);
console.log(x);
console.log(price);
console.log(y);
console.log("Priyanshu K Sharma")
console.log(m);
console.log(n);

//Checking data type of variables
typeof(price);
```

### 2. Non-Primitive Data Types:

#### Objects-> collection of values
The key values in declared objects can be changed even though it is declared with the keyword **const**, but cannot create a dupilcate object with the same name.

```
const Object_name = {
    key : value
    key1 : value
    key2 : value
    key3 : value
    key4 : value
};
```

to access any key:
1. Object_name.key
2. Object_name["key"]

---

## Operators: used to perform some operation on data

### 1. Arithmetic Operators
1. Modulus(%)-> Gives remainder
2. Exponentiation-> power
3. Increment(++)
4. Decrement(--)

```
+, -, *, / 

++a, --a -> pre(pehle change karrta hai value phir print karrta hai)
a++, a-- -> post(pehle print karrega phir value change karega)
```
----

### 2. Assignment Operators
Used to assign values to variables

```
=, +=, -=, *=, %=, **=
```
----

### 3. Comparison Operators
Used to compare two values

```
>, >=, <, <=


== -> Euqal to
!= -> Not equal to
=== -> Equal to & type(checks if the data types are same or not)
!== -> Not equal & type(checks if the data types differ or not)
```
----

### 4. Logical Operators
Used to check the logic of the expression: true or false

```
&& -> Logical AND
|| -> Logical OR
! -> NOT
```
----

### 5. Ternary Operator
```
condition ? true output : false output;

age > 18 ? "adult" : "not adult";
```

---

## Conditional Statements: To implement some conditions in code


### 1. if Statement

```
let color;
if(mode === "dark-mode") {
  color = "black";
}
```
----

### 2. if-else Statement
```
let num = 20;

if (num%2===0) {
    console.log(num,"is Even");
}   else {
    console.log(num, "is Odd");
}
```
----

### 3. else-if Statement
```
let age = 18

if(age < 18) {
    console.log("Junior");
}   else if(age>60)  {
    console.log("Senior citizen");
}   else {
    console.log("middle");
}
```
---

## Input and Display
```
alert("Hello!"); //displays one time pop up msg

let num = prompt("Enter a number"); //displays msg as well as takes the input
```
---

## Loops in JS: Loops are used to execute a piece of code again and again


### 1. for loop

```
for(let i=1; i<=5; i++) {
  console.log("priyanshu");
}
```
----

### 2. Infinite Loop-> A loop that never ends
```
for(let count=1; count>0; count++) {
    console.log("Priyanshu K Sharma");
}

console.log("Loop has ended");
```
----

### 3. while loop
```
while(condition) {
  // do some work
}
```
----

### 4. do while loop
```
do{
  // do some work
}while(condition);
```

### 5. for-of loop-> used for strings and arrays
```
for(let val of strVar) {
    //do some work
}
```
----

### 6. for-in loop-> used for objects
```
for(let key in objVar) {
    // do some work
}
```
---
## Strings in JS -> String is a sequence of characters used to represent text(It is immutable in java)

### 1. Create String
```
let str="Priyanshu";
```
----

### 2. String Length
```
str.length
```
----

### 3. String Indices
```
str[0], str[1], str[2]
```
----

### 4. Template Literals->A way to have embedded expressions in strings

```
`The cost of ${obj.item} is ${obj.price}`
```
----

#### String Interpolation-> To create strings by doing substitution of placeholders

```
`String text ${expresiion} string text`
\n: Next line
\t: Tab
```
----

#### Use case of Template literals
```
let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price}`;
console.log(output);
```
----
### String Methods-> These are built-in functions to manipulate a string

```
str.toUpperCase()
str.toLowerCase()
str.trim() //removes whitespaces
str.slice(start, end) //returns part of string
str1.concat(str2)
str.replace(searchVal, newVal)
str.replaceAll(searchVal, newVal) //replaces all the recurring valuess
str.charAt(idx)
```
---
## Array in JS-> Collections of items, it is mutable
```
let heroes = ["ironman", "hulk", "thor", "batman"];

let marks = [96, 75, 48, 83, 66];

let info = ["Rahul", 86, "Delhi"];
```
----
### Arrray indices-> stores data in linear and cotinuous form
```
arr[0], arrr[1], arr[2], ....
```

![Array in JS](images\arrays.png)
----
### Looping over an Array-> print all elements of array

#### for loop
```
for(let idx=0; idx<arr.length; idx++) {
    console.log(arr[idx]);
}
```

-----

#### for of loop
```
for(let a of arr) {
    console.log(a);
}
```
----

### Array Methods
```
push(): add to end

pop(): delete from end & return

toString(): converts array to string

concat(): joins multiple arrays & returns result

unshift(): add to start

shift(): delete from start & return

slice(): returns a piece of the array-> used when we do not wwant to make changes in the entire array, just a slice of that -- slice(startIdx, endIdx)

splice(): change original array(add, remove, replace) -- splice(startIdx, delCount, newEl1....)
```


