

/*
function fun1() {
  return new Promise((resolve, reject) => {
    resolve("fun1");
  });
}

function fun2(params) {
  return Promise.resolve("fun2");
}

function fun3() {
  return Promise.resolve("fun3");
}

let result=Promise.all([fun1(), fun2(), fun3()])
console.log(result);

result.then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})
*/
  






function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('fun1')
    }, 3000)
  });
}

function fun2(params) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('fun2')
      //reject('fun2')
    }, 1000)
  });
}

function fun3() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('fun3')
      //reject('fun3')
    }, 5000)
  });
}

// let result=Promise.all([fun1(), fun2(), fun3()])
// let result=Promise.allSettled([fun1(), fun2(), fun3()])
//let result=Promise.race([fun1(), fun2(), fun3()])
let result=Promise.any([fun1(), fun2(), fun3()])
//console.log(result);

result.then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})





/*===========EXTRA INFO================= */


/*
async function getGithubUser(username){
  const response=await fetch(`https://api.github.com/users/${username}`);
  const data=await response.json();
  console.log(data);
}

getGithubUser("Sapna16944");
*/