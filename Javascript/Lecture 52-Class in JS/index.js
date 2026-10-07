


// function product(name, price){
//   console.log(this);
// }
// product();



// function outer(){
//   const random=()=>{
//     console.log(this);
//   }
//   random();
// }
// outer();


/*
function product(name, price){
  this.name=name;
  this.price=price;
  
}

const p1=new product("Iphone pro max ultra",  100000);
const p2=new product("Samsung galaxy",  50000);

console.log(p1);
console.log(p2);
*/


/*========================class======================= */

/*
class User{
  country="India";   //default property
  constructor(name, country){
    //console.log("hello");
    this.name=name;   //instance property
    this.country=country;
  }

  printName(){   //instance method
    console.log(this.name);
  }
}

const u1=new User("Sapna", "India");
const u2=new User("vishal", "India");
console.log(u1);
u1.printName();
console.log(u2);
u2.printName();
*/





class BankAccount{
  #balance;   //this is a private property, cannot update

  static totalBankAccount=0;

  constructor(initialBalance){
    this.#balance=initialBalance;
    BankAccount.totalBankAccount++;
  }
  get(){
    console.log(this.#balance);
  }
  withdraw(amount){
    if(amount>this.#balance){
      console.log("itne paise nhi h");
      return
    }
    this.#balance=this.#balance-amount;
  }
  deposit(amount){
    if(amount<=0){
      console.log("amount must be greater than 0");
      return;
    }
    this.#balance=this.#balance+amount
  }
   static calculateTax(){
    console.log("calculating tax...");
  }
}

let acc1=new BankAccount(500);
let acc2=new BankAccount(500);
let acc3=new BankAccount(500);
let acc4=new BankAccount(500);

// acc1.get()
// acc1.withdraw(500);
// acc1.get();
// acc1.deposit(10000);
// acc1.get();
// acc1.withdraw(9000);
// acc1.get();

// acc1.balance=2374348758;

acc1.get();

acc1.deposit(-111);
acc1.get();
//acc1.calculateTax();
//BankAccount.calculateTax()
console.log(BankAccount.totalBankAccount);