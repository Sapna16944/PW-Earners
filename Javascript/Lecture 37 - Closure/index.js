
/*
function outer(){
  const a = 5;
  function inner(){
    console.log(a);
    var a=7;
  }
  inner()
}
outer();
*/

//closure


/*
function outer(){
  const a = 5;
  function inner(){
    console.log(a);
  }
  return inner;
}
const response = outer();
response();
*/


/*
function outer(){
  let count=0;
  function counter(){
    count=count+1;
    console.log(count);
  }
  return counter;
}
const counter=outer();
counter();
counter();
*/



function outer(){
  let count=0;
  function counter(){
    count=count+1;
    console.log(count);
  }
  return counter;
}
const counter1=outer();
const counter2=outer();
counter1();
counter1();
counter2();