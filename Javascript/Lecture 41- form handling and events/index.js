const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const username = document.querySelector("#username");
const bio = document.querySelector("#bio");
const charCount = document.querySelector("#char-count");
const checkbox = document.querySelector("#checkbox");
const country = document.querySelector("#country");
const password = document.querySelector("#password");
const pswrdHint = document.querySelector("#pswrd-hint");
//const errorMessage = document.querySelector("#error-message");


const limit = 200;
charCount.textContent = `${limit} character remaining`;


function showError(input, errorMessage){
  input.parentElement.querySelector(".error-message").textContent=errorMessage;
}


function clearError(input){
  input.parentElement.querySelector(".error-message").textContent="";
}


function validUsername(username) {
  
  if (username.value.trim().length === 0) {
    showError(username, "please enter your name");
    return false;
  }

  if (username.value.trim().length <= 4) {
    
    showError(username, "username must be at least 4 characters");
    return false;
  }

  clearError(username);
  return true;
}


function validPassword(password) {
  
  if (password.value.trim().length === 0) {
    showError(password, "please enter your password");
    return false;
  }

  if (password.value.trim().length <= 8) {
    showError(password, "password must be at least 8 characters");
    return false;
  }

  clearError(password);
  return true;
}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const isUsernameValid=validUsername(username);
  const isPasswordValid=validPassword(password);

  if(isUsernameValid && isPasswordValid){
    document.querySelector("h1").classList.remove("hidden");
  }
  else{
    document.querySelector("h1").classList.add("hidden");
  }

});



/*========INPUT EVENT TYPE======== */

// username.addEventListener("input", (e)=>{
//   console.log("input event" , username.value);
// })

/*========CHANGE EVENT TYPE======== */

// username.addEventListener("change", (e)=>{
//   console.log("change event" , username.value);
// })

// checkbox.addEventListener("change", (e)=>{
//   //console.log("hello");
//   console.log(checkbox.checked);
// })

// country.addEventListener("change", (e)=>{
//   console.log(country.value);
// })

/*========FOCUS EVENT TYPE======== */

// username.addEventListener("focus", (e)=>{
//   console.log("focus event" , username.value);
// })

/*========BLUR EVENT TYPE======== */

// username.addEventListener("blur", (e)=>{
//   console.log("blur event" , username.value);
// })

// password.addEventListener("focus", (e)=>{
//   pswrdHint.classList.remove("hidden");
// })

// password.addEventListener("blur", (e)=>{
//   pswrdHint.classList.add("hidden");
// })

// bio.addEventListener("input", (e)=>{
//   //console.log(bio.value.length);
//   const remaining=limit-bio.value.length;
//   charCount.textContent=`${remaining} characters remaining`
//   //console.log(remaining);
// })
