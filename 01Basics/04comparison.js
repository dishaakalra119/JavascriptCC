// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("dishaa" == "dishaa");
// console.log("hello" == "world");
// console.log("hello" > "world");
// console.log("worlc" < "world");

// console.log("2" > 1);//true
// console.log("02" > 1);//true

// when we compare two values of different data types, the result can be unpredictable like comparing boolean and number or boolean and string or null and number or null and undefined etc
// in real world applications when using comaprison we thus must ensure that the two values are of the same data type so that we can actually comapre their values without worrying about unpredictable behavious
// this is also a reason why typescript is used: it doesn't let us compare two values which have different data types

// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null != 0);//true
// console.log(null >= 0);//true

// ie unpredictable behavious

//the reason for the above beahvious is that equality check == works differently than comparison <, >, <= and >=
//comaprison operators (not equality) convert null to a number (0), so 0>0 becomes false but 0>=0 becomes true


// console.log(undefined == 0);//false
// console.log(undefined >= 0);//false
// console.log(undefined > 0);//false

// for undefines comaprison and equality behave in same way


// ***************STRICT CHECK******************

// === (strict equality) unlike == checks not only the value but also the data type of two opearands so if their data type is different the result would automatically be false
console.log("2" == 2);//true
console.log("2" === 2);//false
// === doesn't perform conversion unlike ==

// == should be avoided for this reason and === should be used







