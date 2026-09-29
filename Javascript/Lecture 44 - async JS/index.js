// console.log("task 1");
// console.log("task 2");

// for(let i=0;i<100000000;i++){
//   console.log(i);
// }

// let startTime=Date.now();
// while(Date.now()-startTime < 10000){
// }

// console.log("task 3");

/*=================SET TIMEOUT=================== */

/*
console.log("Task 1");

setTimeout(function cb(){
  console.log("Task 2");
},4000)
setTimeout(function cb(){
  console.log("Task 5");
},1000)
setTimeout(function cb(){
  console.log("Task 4");
},2000)

console.log("Task 3");
*/

/*=================SET INTERVAL=================== */

//console.log("a");

/*
setInterval(function(){
  console.log("hii");
}, 1000);
*/

//console.log("b");

/*
let count=1;
let id=setInterval(function(){
  count++;
  if(count>5){
    clearInterval(id);
  }
  
  console.log("hii");
}, 2000);
*/

/*=============DISCO LIGHTS=============== */

const body = document.querySelector("body");

let colorStr = "0123456789abcdef";



setInterval(() => {
  let color = "";
  for (let i = 0; i < 6; i++) {
    let randomValue = Math.floor(Math.random() * colorStr.length);
    color = color + colorStr[randomValue];
  }
  //console.log(color);
  body.style.backgroundColor = `#${color}`;
}, 500);


