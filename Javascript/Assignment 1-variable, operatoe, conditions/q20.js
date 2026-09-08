// 20. Simple Calculator

let num1 = 6;
let num2 = 8;
let operator = "/";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if(num2===0){
      console.log("cannot divided by 0");
    }
    else{
      console.log(num1/num2);
    }
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("Invalid operator");
}
