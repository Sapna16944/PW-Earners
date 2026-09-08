let btn=document.querySelector("#reveal-gift");
let h1=document.querySelector("#gift");

/*
btn.addEventListener("click", ()=>{
  btn.textContent="gift revealed";
})
*/


function revealGift(){
  console.log("Iphone 100000 pro max");
  h1.classList.remove("hidden");
  //h1.classList.add("visible");
}

btn.addEventListener("click", revealGift);