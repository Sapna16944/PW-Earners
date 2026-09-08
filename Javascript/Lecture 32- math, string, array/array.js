let pro1Name="tshirt";
let pro1Price=2000;
console.log(pro1Name, pro1Price);

let pro2Name="lower";
let pro2Price=500;
console.log(pro2Name, pro2Price);

let pro3Name="shoes";
let pro3Price=1000;
console.log(pro3Name, pro3Price);


let products=["tshirt", "lower", "cap", "shoes"];
console.log(products);
console.log(products[2]);  //indexing starts from 0
console.log(typeof products);
console.log(products.length);  //length of array 
console.log(products.length-1);
console.log(products.at(-3));

for(let i=0; i<products.length; i++){
  console.log( products[i]);
}



// nested array

let product=[["tshirt", 500], ["lower", 600], ["shoes", 2000]];

for(let i=0;i<product.length; i++){
  console.log(product[i]);
  console.log(product[i][0], product[i][1]);
}


// methods in array

let items=["shirt", "pant", "lower"," cap"];
console.log(items);

items.push("shoes");  //at item at last 
console.log(items);

items.pop();   //delete from last index
console.log(items);

items.reverse();
console.log(items);

items.unshift("top");  //add item at start
console.log(items);

items.shift();  //delete from start
console.log(items);

let remainingItem=items.slice(1,3);  //slice particular elements from array
console.log(remainingItem);
