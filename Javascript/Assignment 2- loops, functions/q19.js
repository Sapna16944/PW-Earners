/*19. Sum from 1 to N 
Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n. 
Example: 
Input: 5 
Output: 15  */
let sum = 0;
function sumNumbers(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
    console.log(sum);
  }
}
sumNumbers(5);
