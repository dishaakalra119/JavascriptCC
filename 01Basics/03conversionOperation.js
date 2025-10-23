let score = "33";
// when we are working on backend or frontend, we need to make sure the data is handled and stored ina  consistent manner, ie suppose while working on the backend we have a data in number but when we send it to the backend it goes to the backed as a string, now type converion of this data to number is important in order to maintain consisteny so that any processing done on this data is done keeping it as a number
// if we receive some data from a form like const {data} = req.body we don't know if data is string or number or what else, but we may know what it is to be treated as for score is to be cosidetred a number so here we will need to use type conversion to ensure that it is processed as a number after being recieved from a form or any other source
// console.log(typeof score); //string
// console.log(typeof (score)); //string

// console.log("Conversion to number")
let valueInNumber = Number(score); //when type a is to be converted to type b, when doing converison always write type b with first letter capital, this has something to do with classes which we will learn later

// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //33
score = "33abc";
valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN

//typeof NaN is also number so we should be very careful when checking the type of an opeartor or variable after it's converion, it's datatype and value may not be what we expect. 33abc whivh is not a pure number will be converted to a number but when we check its value it is NaN
// NaN is also a special type which we should check for. thse are some issue in js (not strict checking), which is why typescript is used, but thses things we should take care of if we are using js.


score = null
valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //0
// here null was converted to 0, here again we need to be careful, since null is different from 0 and if null is returned we don't want to use 0 in many cases where the absence of a value is significant like in temparature so we should be careful in such cases

score = undefined
valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN
// converting undefined to a number gives value NaN
score = true
valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //1

score = false
valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //0

score = "dishaa"
valueInNumber = Number(score);
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN


// Summary: Converting to Number
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0
// "dishaa" => NaN

// console.log("Coversion to Boolean");

let isLoggedIn = 1
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//true

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//false

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//false

isLoggedIn = "dishaa"
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//true

isLoggedIn = undefined
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//false

isLoggedIn = "1"
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//true

isLoggedIn = "0"
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//true

// Summary: conversion to boolean
// 1 => true
// 0 => false
// "" => false
// "dishaa" => true
// undefined => false
// "1" => true
// "0" => true


let someNumber = 15;

// console.log("Conversion to String");

let stringNumber = String(someNumber);
// console.log(typeof stringNumber);//string
// console.log(stringNumber);//15

//browser usually fives us data or values in the form of string which meay want to convert to number, boolean, object, array etc. so we will learn more about type conversion when we make and use forms


// ***********************************Operations*******************************************

let value = 15;
let negValue = -value;
// console.log(negValue);


// console.log(2+2);
// console.log(2-3);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(3%2);


let str1 = "hello";
let str2 = "dishaa";

let str3 = str1 + " " + str2;

// console.log(str3);

// console.log("1" + 2)//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1+ 2 +"2");//32
// these conversions should not be dependent upon, we may not know their output unless we read their ecmascript specifications
// confusing code like this is never written in real world, in real world problems we will use parenthesis like,

// console.log((3 + 4) % 5 * 6);

console.log(+true);//gives 1
// console.log(true+);//gives error => unexpected token )

console.log(+"");//0


let num1, num2, num3;

num1 = num2 =  num3 =2 + 2;

console.table([num1,num2,num3]);

// point of all the above examples starting from console.log(+true) is that DON'T WRITE CONFUSING CODE, if the readability of code is destoyed it is not useful

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);//101
console.log(++gameCounter);//102
console.log(gameCounter++);//102

// prefix works on operand before its usage and postfix works on operand after its usage

// the increment operator increases the value of operand by one and returns its value before or after the increment depending on where the operator is placed

//++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together. ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation





