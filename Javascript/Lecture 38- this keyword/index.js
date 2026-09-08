//this keyword
// "use strict";

/*
let student={
  name:"Sapna",
  printName:function(){
    console.log(this);
    console.log(this.name);
  }
}
student.printName();
*/

/*
let student={
  name:"Sapna",
  printName:function(){
   console.log("Hii,", this.name);
  }
}
student.printName();

let student2={
  name:"Pritam",
  printName:student.printName,
}
student2.printName();
*/

/*
let student={
  name:"Sapna",
  printName:function(){
    
    console.log("Hey", this.name);
  }
}
student.printName();
let result=student.printName;
// console.log(result);
result();
*/

/*
function fun1(){
  let name="Neha";
  function fun2(){
    console.log(name);
  }
  return fun2;
}
let result2=fun1();
result2();
*/

//console.log(this);    // print {}

// console.log(global);

/* browser */

//window===this===globalThis

/* Node.js */

//global===globalThis

//console.log(global===globalThis);

/*
function fun1(){
  console.log(this);
}
fun1();
*/

/*
let a=7;
console.log(this.a);
*/

/*
function fun1(){
  console.log(this);
}
fun1();
*/

/*
let name="Vishal";
let products={
  name:"Iphone",
  printName:()=>{
    console.log(this. name);
  }
}
products.printName();
*/

/*
let hello="hii";
function fun4() {
  let name = "Vishal";
  let products = {
    name: "Iphone",
    printName: () => {
      console.log(this.name);
      console.log(this.hello);
    },
  };
  products.printName();
}
fun4();
*/

/*
let nestedFunction={

 name:"Something",
 fun:function(){
  let name="something";
  let product={
    name:"Iphone",
    printName:function(){
      const print=()=>{
        console.log(this.name);;
      }
      print();
    }
  }
  product.printName();
 }
}
nestedFunction.fun();
*/



/*
let nestedFunction = {
  name: "Something",
  fun: function () {
    let product = {
      name: "Iphone",
      printName:()=>{
        console.log(this.name);
      }
    };
    product.printName();
  },
};
nestedFunction.fun();
*/  



/*
var name = "ishu";
function fun4() {
  let products = {
    name: "Iphone",
    printName: function () {
      const print = () => {
        console.log(this.name);
      }
      print();
    }
  }
  products.printName();
}
fun4();
*/

/*
let product={
  name:'Iphone',
  printName:function(){
    const print=()=>{
      console.log(this.name);
    }
    print();
  }
}
product.printName();
*/





let btn=document.getElementById("btn")
btn.addEventListener("click", (event)=>{
  console.log("hii");
})