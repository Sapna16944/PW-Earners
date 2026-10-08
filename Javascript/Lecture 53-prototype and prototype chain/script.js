

let user={
  name:"sapna",
  age:23,
};
//console.log(user);

Object.prototype.allInOne=function(){
  console.log("all in one");
}

Array.prototype.printItems=function(arr){
  for(let i=0;i<this.length; i++){
    console.log(this[i]);
  }
}

let arr=[1, 2, 3];

//console.log(arr.__proto__.__proto__===user.__proto__);
console.log(arr.__proto__);

arr.printItems();

let colors=["red", "green", "orange"];
colors.printItems();


String.prototype.firstTwoCharacters=function(){
  // console.log("hello ye maine banaya h");
  // return this.firstTwoCharacters;
  console.log(this[0]+this[1]);
}
"sapna".firstTwoCharacters();

function random(){

}
random.allInOne();

"nnjbgh".allInOne();
arr.allInOne();
user.allInOne();
Number(1).allInOne();





/*==============shadowing==================== */


let user1={
  name:"Sapna",
  toString(){
    console.log("ye apna method h");
  }
}
user1.toString();




/*===============prototype chaining====================== */


let common={
  eat(){
    console.log("eat");
  }
}
let person=Object.create(common);

person.walk=function(){
  console.log("walk");
}

let student=Object.create(person);

student.study=function(){
  console.log("study");
}
console.log(person);
console.log(student);

console.log(student.hasOwnProperty("study"));
console.log(student.hasOwnProperty("walk"));
console.log(student.hasOwnProperty("eat"));

Object.setPrototypeOf(person, {
  hello(){}
})

console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

console.log(student.__proto__);
console.log(student.__proto__.__proto__);




/*=========link new object to prototype================== */


class User{
  country="india";   //default property
  constructor(name, country2){
    this.name=name;     //instance property
    this.country=country2;       //instance property
  }

  printName(){  //instance method
    console.log(this.name);
  }
}

const u1=new User("Sapna", "India");
console.log(u1);
const u2=new User("Vishal", "India");
console.log(u2);

u1.printName();
u2.printName();

console.log(u1.printName()===u2.printName());



/*===============instances======================= */


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

console.log(acc1 instanceof User);     //false
console.log(acc1 instanceof BankAccount);   //true
console.log(String instanceof Object);   //true
console.log(new Number(1) instanceof Object);   //false
console.log(new Number(1) instanceof Object);   //true
