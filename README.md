# JavaScript Tutorial

## Variable:
1. var: variable can be re-declared & updated. A global scope variable

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

#### 1. Objects-> collection of values
The key values in declared objects can be changed even though it is declared with the keyword *const*, but cannot create a dupilcate object with the same name.

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
