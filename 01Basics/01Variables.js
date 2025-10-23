const accountId = 184404;
let accountEmail = "dishaa@email.com";
var accountPassword = "1234pass";
accountCity = "Delhi";
let accountState;
// we use certain containers to get inforrmation from our user to then store it ina database. these containers store some value which can either be constant or variable.
// if we want to store information which remains constant we denote it with keyword const in javascript.

// accountId = 123; // TypeError: Assignment to constant variable. assignment to a constant data type is not allowed after initial assignment with declaration.
// javascript(or any other language) has a special syntax meaning there are some reserved keywords in it which mean a certain unique thing, this keyword is recognized by the execution engine, compiler or interpreter
// const, let and var all denote different things, but one thing they denote in common is letting the execution engine know to reserve some memory for the varible declared ie when we say const accountId = "Dishaa11" this means space in memory should be reserved for a constant with identifier "accountId" and value "Dishaa11"

accountEmail = "dk@dk.com";
accountPassword = "pass";
accountCity = "Jaipur";
// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* there are two ways in whihc to declare variables and the difference between each lies in their scope(ie  in what part of the program they can be used and modified depending on where they are declared)
var can be used outside of the {} block scope in which it was declared, ie it is not block scoped
there was a problem in js as js didn't know what scope was, this caused confusion in the early days. since chnaging var in one place chnaged it in many other places where the chnage was not intended, hence let was introduced in js, let is block scoped and is safer to use
nowadays it is insisted upon to never use var when you want to create a variable, only use let for variables and const for constants
decalring a varibale without var let and const will technically work but it's wrong: don't do this beacuse we don't know what the engine treats it as(let, var or const)
DON'T USE VAR IN JS BECAUSE OF BLOCK SCOPE AND FUNCTION SCOPE
*/
// value accountState(declared but not initialized) is undefined

//an identifier is a unique case sensitive name given to a varaiable function or property. in js identifiers can containe $, _, and digits along with alphabets but may not start with digits. 