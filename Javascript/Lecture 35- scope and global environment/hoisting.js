/*console.log(a);  //Cannot access 'a' before initialization
let a=6; 

console.log(c);   //Cannot access 'c' before initialization
const c=2;

console.log(b);  //undefined
var b=9; */

addNum();
function addNum() {
  console.log("hello"); //hello (due to hoisting)
}

//addTwoNum();
let addTwoNum = function () {
  console.log("function expression"); //Cannot access 'addTwoNum' before initialization
};

//addTwoNum1();
var addTwoNum1 = function () {
  console.log("function expression"); //addTwoNum1 is not a function
};

var a = 5;
let b = 7;
function addNumber() {
  let a = 6;
  console.log(a);
}
addNumber();

// let x=6;

// function xyz(){
//   console.log(x);   //Cannot access 'x' before initialization
//   let x=3;
// }
// xyz();

let city = "delhi";

function printCity() {
  console.log(city);
}
function randomCity(fn) {
  let city = "varanasi";
  fn();
}
randomCity(printCity);

// function outer(){
//   function inner(){
//     console.log("Inner");
//   }
//   inner();
//   console.log("Outer");
// }
// outer();

function outer() {
  function inner() {
    return 10;
  }
  return inner;
}
const result = outer();
console.log(result);

//lexical environment

// function outer(){
//   let userName="Sapna";
//   function inner(){
//     console.log(userName);
//   }
//   return inner;
// }
// const inner=outer();

// inner();

//lexical scope chaining - contain khud ki and parent ki information

// function fun1(){
//   function fun2(){
//     function fun3(){
//       function fun4(){

//       }
//     }
//   }
// }


  function fun1() {
    let x = 10;

    function fun2() {
      let y = 20;

      function fun3() {
        let z = 30;

        console.log(x);
        console.log(y);
        console.log(z);
        
      }

      fun3();
    }

    fun2();
  }
  fun1();

