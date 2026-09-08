// 27. Electricity Bill + Discount 


let units=2500;

let bill;
if(units<=0){
  console.log("Invalid unit");
}
else if(units<=100){
  bill=units*5;
}
else if(units<=200){
  bill=units*7;
}
else{
  bill=(100*5)+(100*7)+((units-200)*10);
}

let discount;
if(bill>=2000){
  discount=(bill*10)/100;
}
else{
  discount=0;
}

let finalBill=bill-discount;
console.log("Total units  : ", units);
console.log("Total Bill : ",bill);
console.log("Total Discount : ",discount);
console.log("Total final bill : ",finalBill);