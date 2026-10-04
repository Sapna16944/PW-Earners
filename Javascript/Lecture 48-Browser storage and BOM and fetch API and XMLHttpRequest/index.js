/*=================LOCAL STORAGE================= */

/*=============.setItem("num1", 1)=============*/

// let storage1 = localStorage.setItem("num1", 1);
// let storage2 = localStorage.setItem("num2", 1);
// let storage3 = localStorage.setItem("num3", 1);

/*===============.getItem(key)============== */

// let result=localStorage.getItem("num");
// console.log(result);

/*===================.key("0")=================== */

// let result2=localStorage
// console.log(result2);

/*==============remove specific existing key============ */

//localStorage.removeItem("num");

/*==============clear whole localStorage============ */

//localStorage.clear("num");

/*==============example============ */

// let button = document.querySelector("#clear-local-storage");
// button.addEventListener("click", () => {
//   localStorage.clear();
// });

/*=================SESSION STORAGE================= */

/*===========example================== */

// let btn = document.querySelector("#add-session-item");
// btn.addEventListener("click", () => {
//   sessionStorage.setItem("session", "item");
// });

/*=============CONNECT JS WITH API============= */

/*old method */

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   let data = xhttp.responseText;
//   console.log(data);
// };
// xhttp.open("GET", "https://api.github.com/users/Sapna16944", true);
// xhttp.send();

/*modern method */

// fetch("https://api.github.com/users/Sapna16944")
//   .then((data) => data.json())
//   .then((data) => console.log(data));

async function getUser(username = "Sapna16944") {
  const response = await fetch(`https://api.github.com/users/${username}`);

  const data = await response.json();
  return data;
}

//getUser();

/*=============TASK 1 : GITHUB PPROFILE FINDER=========== */

document.querySelector("#github-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  let username = document.querySelector("#github-username").value;
  const data = await getUser(username);

  document.querySelector("#show-profile").innerHTML = `
    <img src=${data.avatar_url} alt="" width:"200px">
    <h2>${data.name}</h2>
    <i>username : ${data.login}</i>
    <p>bio : ${data.bio}</p>
    <p>Followers : ${data.followers}</p>
    <p>Following : ${data.following}</p>
    <p>Public Repos : ${data.public_repos}</p>`;
});

function updateStatus() {
  document.querySelector("#live-status").textContent = navigator.onLine
    ? "Online"
    : "Offline";
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
