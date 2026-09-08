/*16. Calculate Total Price 
Create a function named calculateTotal(price, quantity) using a function declaration. The function 
should calculate and display the total price.  
Example:  
Input: price = 100, quantity = 3  
Output: Total Price: 300 */

let totalPrice = 0;
function calculateTotalPrice(price, quantity) {
  totalPrice = price * quantity;
  console.log(totalPrice);
}
calculateTotalPrice(100, 3);