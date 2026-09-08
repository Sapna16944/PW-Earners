// 22. Menu-Based Calculator let num1 = 6;

let num1 = 6;
let num2 = 8;
let choice = 4;

switch (choice) {
  case 1:
    console.log("Addition : ",num1 + num2);
    break;
  case 2:
    console.log("Subtraction : ",num1 - num2);
    break;
  case 3:
    console.log("Multiplication : ",num1 * num2);
    break;
  case 4:
    if(num2===0){
      console.log("cannot divided by 0");
    }
    else{
      console.log("Division : ",num1/num2);
    }
    break;
  case 5:
    console.log("Modulus : ",num1 % num2);
    break;
  default:
    console.log("Invalid choice");
}
