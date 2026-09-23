let div = document.querySelector("#reveal-gift");
let h1 = document.querySelector("#gift");

let btn = document.querySelector("#btn");

/*
btn.addEventListener("click", ()=>{
  btn.textContent="gift revealed";
})
*/

/*====EVENT LISTENER===== */

/*
function revealGift() {
  //console.log("Iphone 18 pro max");
  h1.classList.remove("hidden");
  //h1.classList.add("visible");
}
*/

/*====EVENT OBJECT===== */

function revealGift(event) {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.currentTarget);
}

div.addEventListener("click", revealGift);

let counter = 0;

function fun1(e) {
  if (counter < 3) {
    console.log(e);
    counter++;
  } else {
    removeEventListener("click", fun1);
  }
}

btn.addEventListener("click", fun1);
/*
btn.addEventListener("click", (e)=>{
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);
})

btn.removeEventListener("click",(e)=>{
  console.log(e);
})
*/

//btn.addEventListener("click", fun1, {once:true});

//btn.removeEventListener("click", fun1);

/*=========BUBBLING AND CAPTURING=========== */

let outer = document.querySelector("#outer");
let inner = document.querySelector("#inner");
let btn2 = document.querySelector("#btn2");

// outer.addEventListener('click', (e)=>{
//   e.stopPropagation();
//   console.log("outer");
// },{capture:true})

outer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("outer");
});

inner.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("inner");
});

btn2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("btn2");
});





/*==========EVENT DELEGATION============= */




let products = [
  {
    id:"1",
    name: "Iphone 20",
    price: 100000,
    imgUrl:
      "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/712SuRmHG4L._SX679_.jpg",
  },
  {
    id:"2",
    name: "Samsung 15",
    price: 50000,
    imgUrl:
      "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41WYEiF177L._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    id:"3",
    name: "MI 23",
    price: 20000,
    imgUrl:
      "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41-iXcIEcZL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    id:"4",
    name: "Poco 10",
    price: 10000,
    imgUrl:
      "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41IOnp0Ot8L._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    id:"5",
    name: "Lava 12",
    price: 15000,
    imgUrl:
      "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/31hIl2V7GyL._SY300_SX300_QL70_FMwebp_.jpg",
  },
];

let productList = document.querySelector("#product-list");
console.log(productList);

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("singleProduct");

  card.dataset.productId=product.id;

  const dltBtn = document.createElement("button");
  const addToCartBtn = document.createElement("button");
  dltBtn.textContent = "Remove Product";
  addToCartBtn.textContent = "Add to Cart";

  // dltBtn.addEventListener("click", (e)=>{
  //   e.stopPropagation();
  //   card.remove();
  // })

  card.innerHTML = `<div>
      <img src=${product.imgUrl} alt="">
    </div>
    <div class="detailProduct">
      <p>${product.name}</p>
      <p>${product.price}</p>
    </div>`;

  card.append(dltBtn);
  card.append(addToCartBtn);
  productList.append(card);
});


productList.addEventListener("click", (e) => {
  e.stopPropagation();
  const dltBtn=e.target;
  console.log(dltBtn.parentElement);
  //console.log(dltBtn.tagName);
  console.log(dltBtn.textContent);

  // if (dltBtn.tagName === "BUTTON") {
  //   dltBtn.parentElement.remove();
  // }


  console.log(dltBtn.parentElement.dataset.productId);


  if (dltBtn.textContent === "Remove Product" && dltBtn.tagName === "BUTTON") {
    //dltBtn.parentElement.remove();
    dltBtn.closest(".singleProduct").remove();
  }


  
});
