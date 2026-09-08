let product1=["iphone", 56835, 4.5, 75, 10];

let product2={
  name:"iphone",
  price:56835,
  avgRating:4.5,
  totalReviews:75,
  "first-name":"Sapna",
  productName:"Samsung",
  discount:10,
  variants:["pro", "base","pro max"],
  manufacture:{
    city:"Dhampur",
    state:"UP",
    country:"India",
    price:30000,
  },
  //two different methods to write methods or function inside object

  //to access keys inside method :- use this keyword
  printProductName:function(){
    console.log(this.productName);
  },
  printDiscount(){
    console.log(this.discount);
  },
}

console.log(product2);
console.log(product2["name"]);
console.log(product2.name);

product2.printProductName();
product2.printDiscount();


console.log(Object.keys(product2));
console.log(Object.entries(product2));
console.log(Object.values(product2));


//for of loop,  for in loop,  for each method

//for of loop :- use in array
for(value of product1){
  console.log(value);
}

//for each method :-use in array
product1.forEach(function(value, index){
  console.log(value, index);
})

//for in loop :- use in objects
for(value in product2){
  console.log(product2[value]);
}


// array destructuring

const [a,b]=product1;
console.log(b);

// object destructuring
console.log("object destructuring");
let {price, avgRating, printDiscount, totalReviews}=product2;

console.log(price,avgRating, printDiscount(), totalReviews);

console.log(price, avgRating, product2.printDiscount(), totalReviews);


for([key, value] of Object.entries(product2)){
  console.log(key, value);
}


// spread operator :- unpack krna

let arr=[34, 78, 2, 5, 76, 54, 6, 9];
console.log(arr);
console.log(...arr);  //unpack krna

//merge using spread operator

let arr1=[3,4];
let brr1=[5,6];
let c=[...arr1, ...brr1];
console.log(...c);

// rest operator :- pack(combine) krna

const [n , p, ...hello]=["iphone", 56835, 4.5,75,10];
console.log(hello);


function add(...numbers){
  let total=0;
  for(value of numbers){
    total+=value;
  }
  return total;
}
console.log(add(2, 5, 8,1, 3));

console.log("manufacture");
let {manufacture, ...userKeLiyeDetail}=product2;
console.log(userKeLiyeDetail);



