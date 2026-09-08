//convert negative number to positive number using function

function convertToPositive(num){
  return num*(-1);
}
let positiveNum=convertToPositive(-10)
console.log(positiveNum);

//convert negative number to positive number using object
let positiveNum2=Math.abs(-10);
console.log(positiveNum2);

console.log("math object");
console.log(Math.PI);
console.log(Math.pow(2,3));
console.log(Math.sqrt(4));
console.log(Math.cbrt(25));
console.log(Math.min(8, 1, -8, 7, 4));
console.log(Math.max(5,8,1,9,3,2));
console.log(Math.round(56.89064));
console.log(Math.random());
console.log(Math.random()+1);
console.log(Math.ceil(5.0));
console.log(Math.floor(8.722));
console.log(Math.exp(2));


let result=Math.floor(Math.random()+1);  //between 1 and 1.9999
console.log(result);

let min=3;
let max=8;
let result1=Math.floor(Math.random()*(max-min+1))+min; 
console.log(result1);


//Number

console.log(Number.isFinite(7));

//convert string into integer
console.log(Number.parseInt("56"));  
let num1="45";
let num2="75";
console.log(num1+num2);
console.log(parseInt(num1) + parseInt(num2));


let num=456.234896;
console.log(num.toFixed(2));

console.log(num.toPrecision(5));


//String

console.log("Sapna".toUpperCase());
let str="Hey neha";
console.log(str.includes("ey"));
let file="image.png"
console.log(file.endsWith(".png"));

let greet="hello dosto, hello bachho";
console.log(greet.replace("hello", "hii"));
console.log(greet.replaceAll("hello", "hey"));

//date

console.log(Date.now());  //to get current unix timestamp

let date=new Date();
console.log(date);
console.log(date.getDay());     // 0 to 6
console.log(date.getMonth());   // 0 to 11
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toDateString());






