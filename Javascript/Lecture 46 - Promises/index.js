const p = new Promise(function (resolve, reject) {
  resolve("promise fulfilled");
  reject("promise rejected");
});

//console.log(p);

/*
p.then(function onFulfilled(val){
  console.log(val);
}, function onRejected(val){
  console.log(val);
}).then(()=>{}, ()=>{})
.then()
.then()
*/

/*====================chaining of promise==================== */

/*
p.then(function onFulfilled(val){
  console.log(val);
})
.then(function onFulfilled(val){
  console.log(val);
})
.then(function onFulfilled(val){
  console.log(val);
})
.then(function onFulfilled(val){
  console.log(val);
})
.catch(function (val){
  console.log(val);
}).finally(function(){
  console.log("ye toh hmesha chlega");
})
  */

/*
console.log("a");

const p2=new Promise(function f1(resolve, reject){
  console.log("b");
  resolve("hii");
})

p2.then(function f2(val){
  console.log("then");
  console.log(val);
}).catch(function f3(){
  console.log("catch");
}).finally(function f4(){
  console.log("finally");
})

console.log("c");
*/

/*===============priority queue===================== */

/*
const p3 = new Promise(function f1(resolve, reject) {
  resolve();
});

// Promise.resolve("hey").then(function f2(){
//   console.log("inside resolve promise");
// })

setTimeout(function fun3() {
  console.log("set timeout");
}, 2000);

p3.then(function f3() {
  console.log("f3 function");
});
*/

/*======================solution of callback hell and inversion of control=================== */

function searchPizza() {
  return new Promise(function (resolve, reject) {
    console.log("Pizza searching...");
    setTimeout(function fun1() {
      console.log("Here is the Pizza's menu.");
      let price = 500;
      resolve(price);
      resolve(price);
    }, 2000);
  });
}

function addToCart(price) {
  return new Promise(function (resolve, reject) {
    console.log("Pizza adding to cart...");
    setTimeout(function fun2() {
      console.log("Pizza added to cart");
      resolve(price);
    }, 3000);
  });
}

function payment(price) {
  return new Promise(function (resolve, reject) {
    console.log(`payment initiated , Amount : ${price}`);
    setTimeout(function fun3() {
      let isPaymentSuccessfull = false;
      if (isPaymentSuccessfull) {
        console.log(`payment successful, Amount : ${price}`);
        resolve();
      } else {
        reject("payment failed");
      }
    }, 5000);
  });
}

let res = searchPizza();

res
  .then(function (price) {
    return addToCart(price);
  })
  .then(function (price) {
    return payment(price);
  })
  .then(function () {
    console.log("pizza delivered");
  })
  .catch(function (err) {
    console.log(err);
  });
