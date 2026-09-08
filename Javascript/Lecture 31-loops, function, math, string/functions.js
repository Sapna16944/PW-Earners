//functions


// let alokMarks=46+56+23;
// let adiMarks=24+24+42;
// let karanMarks=54+65+23;
// let anuMarks=54+52+23;
// console.log("alokMarks=", alokMarks);


// function totalMarks(studentName, mathMarks, scienceMarks, hindiMarks){
//   console.log(`${studentName} total Marks :`,mathMarks + scienceMarks + hindiMarks);
// }
// totalMarks("Alok" , 46,56,23);
// totalMarks("Adi",24,24,42);
// totalMarks("Karan", 54,65,23);
// totalMarks("Anu",54,52,23);


function totalMarks( mathMarks, scienceMarks, hindiMarks){
  return mathMarks + scienceMarks + hindiMarks;
}
totalMarks("Alok" , 46,56,23);
totalMarks("Adi",24,24,42);
totalMarks("Karan", 54,65,23);
totalMarks("Anu",54,52,23);

function calPercentage(studentName, mathMarks, scienceMarks, hindiMarks){
let total=totalMarks(mathMarks, scienceMarks, hindiMarks);
let percentage=(total/300)*100;
console.log(`${studentName} percentage = `, percentage);
}

calPercentage("Alok", 46, 56, 23)


function greetings(userName){
  console.log(`Hii, ${userName}`);
}
greetings("Sapna");
greetings("Khushbu");
greetings("Nikita");


function greeting(user, greeting="hey"){
  console.log(`${greeting}, ${user}`);
}
greeting("Neha");
greeting( "Ishu", "hello");


function calculator(num1, num2, operator){
  switch (operator){
    case "+":
      console.log(`${num1} ${operator} ${num2} = `, num1+num2);
      break;
    case "-":
      console.log(`${num1} ${operator} ${num2} = `, num1-num2);
      break;
    case "*":
      console.log(`${num1} ${operator} ${num2} = `, num1*num2);
      break;
    case "/":
      console.log(`${num1} ${operator} ${num2} = `, num1/num2);
      break;
  }
}
calculator(10, 5, "+");
calculator(10, 5, "-");
calculator(10, 5, "*");
calculator(10, 5, "/");


//function expression

let add=function(num3, num4){
  return num3 + num4
}
// let result=add(4, 6);
// console.log(result);

console.log(add(5,6));



//Arrow function

/* syntax 1 - multiple lines */

let a=(num5, num6)=>{
  return num5 + num6;
}
console.log(a(2, 3));

/* syntax 2 - single parameter */

let b=num7=>num7+3;
console.log(b(4));

/* syntax 3 - single line*/

let c=(num8 , num9)=>num8 + num9;
console.log(c(2,6));
