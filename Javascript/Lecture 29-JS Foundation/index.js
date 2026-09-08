console.log("Hello World");
console.log(4+5);

console.log(4*5);
console.log("5*6=", 5*6);

// variables

age=23;
name="Sapna";
console.log(age, name);

var age;  //declaration->box created without value
age=24;   //initialization->box me value de di
var age=20;  //both initialization and declaration

// keyword - var, let and const

//var -> re-declaration and updation both posible

var num=100;
console.log(num);
var num=200;   //re-declaration allowed
num=300;    //updation allowed
console.log(num);


//let -> re-declaration not allowed and updation allowed

let fullName="Sapna";
console.log(fullName);
/*let fullName="Rana";     
console.log(fullName); */   //SyntaxError: Identifier 'fullName' has already been declared
fullName="Rana";      //updation allowed
console.log(fullName);


//const -> re-declaration & updation not allowed

const aadharCard=876976543213;
console.log(aadharCard);
/*const aadharCard=246937643213;
console.log(aadharCard);*/     //re-declaration not allowed
/*aadharCard=864565585345;
console.log(aadharCard); */   //TypeError: Assignment to constant variable.



//Data Types

//string
let collegeName="London Academy";
console.log(collegeName);
console.log(typeof(collegeName));

const doubleQuote="hii dosto";
console.log(doubleQuote);

const singleQuote='hii dosto';
console.log(singleQuote);

const templateLiteral=`hii dosto`;   //multiline
console.log(templateLiteral);

const userName="Anu";
const greetingMsg=`Hey, ${userName}`;
console.log(greetingMsg);


//number
let mobileNumber=7452895406;
console.log(mobileNumber);
console.log(typeof(mobileNumber));


//undefined 

let user;
console.log(user);
console.log(typeof(user));



//null -> intensionally empty

let products=null;
console.log(products);
console.log(typeof(products));


//boolean

let isLoggedIn=true;
console.log(isLoggedIn)
console.log(typeof(isLoggedIn));

