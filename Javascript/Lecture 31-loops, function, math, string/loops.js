//loops


// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);


// for loop

/* for(initialization; condition; updation){

} */

for(let i=1; i<=10; i++){
  console.log(i);
}


// while loop

/* while(condition){

} */

let num=1;
while(num<=5){
  console.log("hii");
  num++;
}

//do-while

/* do{

}while(condition); */

let n=1;
do{
  console.log(n);
  n++;
}while(n<5);


// break & continue

for(let i=1; i<=5;i++){
  if(i===3){
    break;
  }
  console.log(i);
}

for(let i=1; i<=10;i++){
  if(i%2!==0){
    continue;
  }
  console.log("skip odd no. : ",i);
}

// 5 ki table

let num1=7;
for(let i=1; i<=10;i++){
  console.log(num1*i);
}

for(let i=1;i<=50; i++){
  if(i%5!==0){
    continue;
  }
  console.log(i);
}







