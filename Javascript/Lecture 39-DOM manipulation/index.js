/* DOM -> document object model */

/*
console.log("hello");
console.log(document);
*/

/*
let h1=document.getElementById("h1");
console.log(h1);
*/

/* get element by query selector */

// let h1=document.querySelector("#h1");
// console.log(h1);
// let h2=document.querySelector(".h2");
// console.log(h2);
// let h3=document.querySelector("h3");
// console.log(h3);

/* get element by query selector all */

// let h3=document.querySelectorAll("h3");
// console.log(h3);

/*
let para1=document.querySelector("p");
let para2=document.querySelector("#desc");
//console.log(para1);

//para1.textContent="hello kaise ho";    //use maximum time
//console.log(para1);

//para2.innerHTML="<h2>hello world</h2>";   //risky
//console.log(para2);

para1.innerText="hello dosto";
console.log(para1);
*/

/* set and get  Attribute property */

let p = document.querySelector(".p");
p.setAttribute("style", "background-color:pink; font-size:50px;");

/*
let btn=document.querySelector("#btn");
btn.setAttribute("disabled", "true");

let res=btn.getAttribute("disabled");
console.log(res);

p.removeAttribute("style");
*/

/* classList */

/*
p.classList.add("random");
p.classList.remove("random");
p.classList.toggle("random");
console.log(p.classList.contains("random"));
p.style.backgroundColor="red";
*/

/* dataset Attribute */

p.dataset.hello = "hii";

/* data from backend to frontend */

let div = document.createElement("div");
let div2 = document.createElement("div");

div.textContent = "Div";
div2.textContent = "Div 2";
let body = document.querySelector("body");

/* =====can give node one by one & insert at last===== */
//body.appendChild(div);
//body.appendChild(div2);

/* =====can give multiple node at a time & insert at last===== */
//body.append(div, div2);

/* =====can give multiple node at a time & insert at first===== */
//body.prepend(div, div2);

let products = [
  {
    name: "Iphone 20",
    price: 100000,
    imgUrl:"https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/712SuRmHG4L._SX679_.jpg"
  },
  {
    name: "Samsung 15",
    price: 50000,
    imgUrl:"https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41WYEiF177L._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    name: "MI 23",
    price: 20000,
    imgUrl:"https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41-iXcIEcZL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    name: "Poco 10",
    price: 10000,
    imgUrl:"https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/41IOnp0Ot8L._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    name: "Lava 12",
    price: 15000,
    imgUrl:"https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/31hIl2V7GyL._SY300_SX300_QL70_FMwebp_.jpg"
  },
];

let productList = document.querySelector("#product-list");
console.log(productList);

/*
products.forEach((product)=>{
  //console.log(product);
  const card=document.createElement("p");
  card.textContent=`${product.name}-${product.price}`;
  productList.append(card);
})
  */


/*====== CREATE ELEMENT ======*/


products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("singleProduct");

  card.innerHTML =
    `<div>
      <img src=${product.imgUrl} alt="">
    </div>
    <div class="detailProduct">
      <p>${product.name}</p>
      <p>${product.price}</p>
    </div>`;
    productList.append(card);

  // const upperDiv=document.createElement("div")
  // const lowerDiv=document.createElement("div")

  // const img=document.createElement("img");
  // img.setAttribute("src", "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/712SuRmHG4L._SX679_.jpg");

  // upperDiv.append(img);
  // card.append(upperDiv);

  // productList.append(card);
});


/*====== REMOVE ELEMENT ======*/


let h2=document.querySelector("h2");
//body.removeChild(h2);
h2.remove();



/*======make clone of existing element =======*/

/*
let clone=productList.cloneNode(true);
console.log(clone);
body.append(clone);
*/

/*======insertBefore======*/

//console.log(productList);
//console.log(productList.children);

const items=productList.children;
productList.insertBefore(h2,  items[2]);
//items[2].before(h2);      //shortcut
//items[2].after(h2);  
