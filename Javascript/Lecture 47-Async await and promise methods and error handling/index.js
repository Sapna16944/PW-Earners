/*
async function fun2(){
  console.log("hii");
}

function fun1(){
  console.log("hello");
}

fun1()
fun2();
*/

/*
console.log("a");

async function fun3(){
  console.log("b");
}

console.log("c");

fun3();
*/

/*
async function fun3() {
  return "hello";
}
function fun4() {
  return Promise.resolve("hiiii");
}

// fun3().then((data) => {
//   console.log(data);
// });
console.log("1");
async function fun5() {
  // fun3().then((data) => {
  //   console.log(data);
  // });

  console.log("2");
  let data=await fun3()
  console.log("3");
  let data2=await fun4()
  console.log("4");
  console.log(data, data2);
}
console.log("sapna");

fun5();
console.log("5");
*/

/*
console.log("a");

async function random(){
  console.log("b");
 
  await 1;
  console.log("c");
}
random();
console.log("d");
*/



/*
let data, data2;

async function fun3() {
  return "hello";
}
function fun4() {
  return Promise.reject("error aa gya");
}

async function fun5() {
  try {
    data = await fun3();
    data2 = await fun4();
    console.log(data, data2);
  } catch (error) {
    console.log(error);
  }finally{
    console.log("m toh hmesha run krunga");
  }
}

fun5();
*/




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
      let isPaymentSuccessfull = true;
      if (isPaymentSuccessfull) {
        console.log(`payment successful, Amount : ${price}`);
        resolve();
      } else {
        reject("payment failed");
      }
    }, 5000);
  });
}

// let res = searchPizza();

// res
//   .then(function (price) {
//     return addToCart(price);
//   })
//   .then(function (price) {
//     return payment(price);
//   })
//   .then(function () {
//     console.log("pizza delivered");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });


async function orderFood(params){
  try{
    let price=await searchPizza();
    await addToCart();
    await payment(price);
    console.log("pizza delivered");
  }catch(error){
    console.log(error);
  }
}

orderFood();