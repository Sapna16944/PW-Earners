
/*=================CLOSURE=================== */



function outer(){
  let x=1;
  function inner(){
    console.log(x);
  }
  //inner()
  return inner;
}
//outer();

let res=outer();
res();



/*===================map====================== */



let arr=[1,2,3,4,5,6];
let output=arr.map((item)=>{
  return item+5;
})
console.log(output);




/*=============bubbling example ================== */



document.querySelector("#inner").addEventListener("click",(e)=>{
  console.log("inner");
})

document.querySelector("button").addEventListener("click",(e)=>{
  e.stopPropagation();
  console.log("button");
})




/*=============callback hell================== */


function fun1(cb1){
  setTimeout(()=>{
    let price=500;
    cb1(price);
  },3000)
}

function fun2(cb2){
  setTimeout(()=>{
    let discount=50;
    cb2(discount);
  },3000)
}

fun1((price)=>{
  //console.log(price);
  fun2((dis)=>{
    console.log(dis);
  })
})