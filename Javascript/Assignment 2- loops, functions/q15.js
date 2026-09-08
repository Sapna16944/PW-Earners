/*15. Largest of Two Numbers 
Create a function that takes two numbers and returns the greater number. */

function largestNumber(num1, num2){
  if(num1>num2){
    return num1
  }
  else{
    return num2;
  }

}
let result=largestNumber(2,-8);
console.log(result);