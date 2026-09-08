// 17. Salary Bonus 


let originalSalary=50000;
let experience=5;

let bonus;

if(experience>=10){
  bonus=originalSalary * 20/100;
}
else if(experience>=5){
  bonus=originalSalary * 10/100;
}
else if(experience>=2){
  bonus=originalSalary * 5/100;
}
else{
  bonus=0;
}

let finalSalary=originalSalary+bonus;

console.log("originalSalary : ",originalSalary);
console.log("Bonus : ",bonus);
console.log("FinalSalary : ",finalSalary);