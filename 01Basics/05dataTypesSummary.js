// when we read the official documnetation of js there are only two data types- primitive and non primitive(refrence type)
// difference between primitive and non primitive- call by value vs call by reference ie the way they are stored in memory and can be accessed

// Primitive: 7 types -> string, number, boolean, bigint, symbol(making a component unique in advanced frontend js), null, undefined
// all primitive types are call by value ie when they are copied from one place to another, their refrence is not copied, their value is given, so changing one doesn't affect the other
// Reference Type/ Non-Primitive: In memory their refernce is allocated to a variable -> Arrays, Objects, Functions

// Objects and Browser events are most imrtant to master js

// In a coding language we may have to tell what the type(data type) of a value is like in java we say int or String, this is a statically typed language, this increases safety
// Some languages like javascript do not require us to tell what the type of a value is we write const pi= 3.14 not const number pi= 3.14 or something like that, this is a dynamically typed language

// Typescript const pi:number = 3.14, hence typescript is statically typed, it provides us more safety due to type checking

// Primitive:
const score = 100; //typeof: number
const scoreValue = 100.3; //typeof: number
const isLoggedIn = false; //typeof: boolean
const outsideTemp = null; //typeof: object
let userEmail; // or let userEmail = undefined; both are same, typeof: undefined
const id = Symbol('123'); //typeof: symbol
const anotherId = Symbol('123'); //typeof: symbol
// this is the usaage of symbol even if we pass the same value inside symbol , it returns a unique symbol value ie value of id and anotherId is different
// console.log(id === anotherId);// false
const bigNumber = 374849209377474920320n // putting n at end makes is bigInt so it can be represented accurately, typeof: bigint
// console.log(bigNumber);

// Reference Types/ Non-Primitive:

const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Pineapple"]; //typeof: object

const userObj = {
    name: "Dishaa",
    age: 23,
    isLoggedIn: "false"
} //typeof: object
// Arrays are declared inside []
// Objects are decalred inside {}, the values inside an object can be any dataType: string, number, object, array, function etc

// Functions in javascipt can be treated as variables too, but there are also other ways to decalre a function

const myFunction = function(){
    console.log("Hello World!");
} //typeof: function

// using typeof operator is very helpful it tells us the data type of a variable

// console.log(typeof bigNumber);//bigint

// if a variable is not declared using typeof operator on it gives undefined, although it was never even decalred so there is no memory reserved for it unlike an actual undefined variable for which the memory is allocated, just no value is given or assigned to it yet.

// console.log(typeof undeclaredVar); //undefined

// THE DATA TYPE OF NON PRIMITIVES IS ACTUALLY CALLED OBJECT ONLY, EVEN IF USING TYPEOF ON A FUNCTION RETURNS VALUE "FUNCTION", IT IS ACTUALLY CALLED OBJECT FUNCTION, SO THE ACTUAL DATA TYPE OF NON-PRIMITVES IS ACTALLY OBJECT ONLY
console.table([typeof score,typeof scoreValue,typeof isLoggedIn,typeof outsideTemp,typeof userEmail,typeof id,typeof anotherId,typeof bigNumber,typeof fruits,typeof userObj,typeof myFunction]);

