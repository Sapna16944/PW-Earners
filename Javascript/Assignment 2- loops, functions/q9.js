/*9. Stop the Loop Using break 
Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the 
number reaches 6 using the break statement.  
Expected Output: 1 2 3 4 5  */

let i=1;
while(i<=10){
  if(i===6){
    break;
  }
  console.log(i);
  i++;
}
