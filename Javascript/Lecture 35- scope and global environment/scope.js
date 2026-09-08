/* Scope */

//global scope

let userName="Sapna";

//block scope
{
  let city="delhi";
  console.log(city);
}

//function scope

function hello(){
  let state="uk";
  console.log(state);
}
hello();


//var - function scope

// function randomText(){
//   var productName="Iphone";
// }
// console.log(productName);
// randomText();

//let - block scope

for(let i=1;i<=10;i++){
  console.log(i);
}

//const - block scope
let count=0;
function counter(){
  
  count=count+1;
  console.log(count);
}
counter();
counter();



