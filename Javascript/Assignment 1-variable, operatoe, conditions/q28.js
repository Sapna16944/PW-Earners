// 28. Simple ATM Menu

let balance = 500;
let withDrawAmount = 200;
let deposit = 300;

let choice = 3;

switch (choice) {
  case 1:
    console.log("current balance : ", balance);

    break;
  case 2:
    if (deposit >= 0) {
      balance += deposit;
      console.log("Money deposited successfully");
      console.log("new balance : ", balance);
    } else {
      console.log("Invaliid deposit amount");
    }
    break;
  case 3:
    if (withDrawAmount <= 0) {
      console.log("Invalid WithDrawAmount");
    } else if (withDrawAmount > balance) {
      console.log("Insufficient balance");
    } else {
      let remaining = balance - withDrawAmount;
      console.log("WithDraW successful");
      console.log("Remaining Amount : ", remaining);
    }
    break;
  case 4:
    console.log("Thanks for using ATM");
    break;
  default:
    console.log("Invalid choice");
}
