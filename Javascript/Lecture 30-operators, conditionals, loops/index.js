//Arithmetic operator

let num1 = 4;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//post increment

let num6 = 45;
num6++;
console.log(num6);

//pre increment

let num7 = 45;
++num7;
console.log(num7);

//pre & post increment

let num8 = 50;
console.log(++num8);
console.log(num8++);

//pre & post decrement
let num9 = 50;
console.log(--num9);
console.log(num9--);

//Assignment operator :- =,+=,-=,*=,/=,%=

let number = 2;
number += 5;
console.log(number);
number -= 5;
console.log(number);
number *= 5;
console.log(number);
number /= 5;
console.log(number);
number %= 5;
console.log(number);
number **= 5;
console.log(number);

//comparison operator :- < , > , >= , <= , == , === , !=

const number1 = 3;
const number2 = 6;

console.log(3 > 6);
console.log(3 < 6);
console.log(3 >= 6);
console.log(3 <= 6);
console.log(3 == 6);
console.log(3 === 6);
console.log(3 != 6);

//loose equality

console.log("5" == 5); //value must same

//strict equality

console.log("5" === 5); //value and type both must same
console.log("5" === "5");

/* logical operators :- && , || , !  */

//&&(AND Operator)

const age = 17;
const hasId = true;
const canEnterClub = age >= 18 && hasId === true;
console.log(canEnterClub);

// || (OR Operator)

const paymentOption = "card";
const UPI = "Gpay";
const hasPaymentOption = (paymentOption === "card" || UPI === "paytm");
console.log(hasPaymentOption);

// ! (NOT Operator)

console.log(!true);

/* truthy & falsy values */

//falsy value :- 0 , "" , null , undefined , NaN , false
//truty value :- all numbers(except 0) , strings , true etc.

//NaN :- Not a Number
console.log("sapna" / 16);
console.log(typeof NaN);

/* Conditionals */

//if-else condition

const isLoggedIn = true;
if (isLoggedIn) {
  console.log("like, comment , share");
} else {
  console.log("Please Login First");
}

let temp = 40;

if (temp >= 25) {
  console.log("AC chala do");
} else {
  console.log("AC mat chalao");
}

//if-else if - else

let day = "Friday";
if (day === "Monday") {
  console.log("1st day of the week");
} else if (day === "Tuesday") {
  console.log("2nd day of the week");
} else if (day === "Wednesday") {
  console.log("3rd day of the week");
} else if (day === "Thursday") {
  console.log("4th day of the week");
} else if (day === "Friday") {
  console.log("5th day of the week");
} else if (day === "Saturday") {
  console.log("6th day of the week");
} else if (day === "Sunday") {
  console.log("tth day of the week");
} else {
  console.log("Holiday");
}

// nested if-else

const isLoggedIn1 = true;
const isSubscribed = false;
if (isLoggedIn1) {
  if (isSubscribed) {
    console.log("You can access premium content");
  } else {
    console.log("You can use free content");
  }
} else {
  console.log("Please Login");
}

//switch case statement

const days = "Wednesday";
switch (days) {
  case "Monday":
    console.log("1st day of week");
    break;

  case "Tuesday":
    console.log("2nd day of week");
    break;

  case "Wednesday":
    console.log("3rd day of week");
    break;

  case "Thursday":
    console.log("4th day of week");
    break;

  case "Friday":
    console.log("5th day of week");
    break;

  case "Saturday":
    console.log("6th day of week");
    break;

  default:
    console.log("Sunday");
}

