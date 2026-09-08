// 26. Restaurant Menu

let choice = 2;
let quantity = 3;
let price;

switch (choice) {
  case 1:
    console.log("Burger selected");
    price = 150
    break;
  case 2:
    console.log("Pizza selected");
    price = 250
    break;
  case 3:
    console.log("Pasta selected");
    price = 180
    break;
  case 4:
    console.log("Sandwich selected");
    price = 120
    break;
}

if(choice>=1 && choice<=4 && quantity>0){
  let total=price*quantity;
  console.log("Total : ", total);
}
else{
  console.log("Invalid choice or qunatity");
}


