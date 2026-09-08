/*10. Skip a Number 
Print numbers from 1 to 10, but skip the number 5 using the continue statement.*/ 

let i=1;
while(i<=10){
  if(i===5){
     i++;
    continue;
   
  }
  
  console.log(i);
  i++;
}