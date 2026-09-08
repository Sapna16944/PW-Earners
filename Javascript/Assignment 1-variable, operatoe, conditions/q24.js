// 24. ATM Transaction 

let balance=50000;
let withDrawAmount=0;

if(withDrawAmount<=0  ){
  console.log("Invalid WithDrawAmount");
}
else if(withDrawAmount>balance){
  console.log("Insufficient balance");
}
else{
  let remaining =balance-withDrawAmount;
  console.log("WithDraW successful");
  console.log("Remaining Amount : ", remaining);
}