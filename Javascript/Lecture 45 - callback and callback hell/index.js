/*============CALLBACK FUNCTION=============== */
//  high order function


// function fun1(callback){
//   console.log("hii");
//   callback();
// }
// function cb(){
//   console.log("This is callback function");
// }
// fun1(cb);



/*=========SYNCHRONOUS CALLBACK FUNCTION============= */


// let arr=["a", "b", "c","d"];
// arr.forEach()
// arr.map();


/*==========HIGH ORDER FUNCTION================ */


// function a(){
//   function b(){

//   }
//   return b
// }



/*=========ASYNCHRONOUS CALLBACK FUNCTION============= */


function searchPizza(cb1){
  console.log("Pizza searching...");
  setTimeout(function fun1(){
    console.log("Here is the Pizza's menu.");
    let price=500;
    cb1(price);
    
  }, 2000)
}

function addToCart(cb2){
  console.log("Pizza adding to cart...");
  setTimeout(function fun2(){
    console.log("Pizza added to cart");
    cb2()
  }, 3000)
}

function payment(price, cb3){
  console.log(`payment initiated , Amount : ${price}`);
  setTimeout(function fun3(){
    console.log(`payment successful, Amount : ${price}`);
    cb3();
  },5000)

}

searchPizza(function a(price){
  addToCart(function b(){
    payment(price, function c(){
      console.log("Bss aa hi gya pizza");
    })
  })
})