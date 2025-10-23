// earlier in js things like classes modules and arrow functions did not exist. But now they do, since some code might still be in older version we need to make sure it reamins compatible with newer changes or things introduced. to do this some standards were introduced(ECMA Script)
// now if you use "use strict"; at the beginning of js document, this basically tells the engine to treat all further written js as the newer version.
// nowadays we don't even need to write this use strict statemnet the engine itself treats it as newer version, but it is still good practice.

"use strict";

// alert(3+3); -> this will give an error, usin galert like this requires it to be binded or linked to an html documen. it will also work in browser console but for node js using this syntax for alert is wrong(a different way exists but not this)

// code readability is the most important, ; is used to seperate two commands for eg console.log(3+3) console.log("Hello") will give an error because these two commands need to be sepearted we can do this using ; , like console.log(3+3); console.log("Hello"), this will work fine
// but the readbaility of code in console.log(3+3); console.log("Hello") is destroyed so it doesn't matter whether we use ; after every commnad(although it is good practice), code should be readable first and foremost.

// the original doumnetation of js is given by ecma script. in the earlier days every browser had a different standard so programmers cam e together to create ecma script which is not js but standards for writing code in js which are the minimum specifications that very programmer should follow.

// mdn is documentation given by morzilla, it is also very useful

let name = "Dishaa";
let age = 23;
let isLoggedIn = false;

// DATATYPES:
// number => -(2**53 - 1)) to 2**53 - 1
// bigint(almost never used)(bigger range than number)
// string eithe in single or double(preferred) quotes
// boolean => true or false
// null => null is a standalone value, this is a representation of an empty value(intentionally khaali value hai, undefined value nahi)
//undefined => value is not defined, only variable is decalred no value is given
// difference between 0 and null, let's say im asking a server to give me temperature, now tempeartue is not yet captured for this particular time or date. the server can't give us 0 bcause 0 is a valid temperature, giving back null means a value is empty(temparature abhi nahi aya)
// undefined => value is not yet assigned
// symbol => used to show uniqueness of a component(eg in react or figma)
// object

console.log(typeof "dishaa"); //string
console.log(typeof age); //number
console.log(typeof null); //object => this is the reason for so many errors or inconsistencies in js
console.log(typeof undefined); //undefined

// typeof is an operator which returns a string indicating the data type of the operand's value.



