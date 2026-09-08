// 14. Student Result 


let mathMarks=78;
let physicsMarks=90;
let chemMarks=43;

let totalMarks= mathMarks + physicsMarks + chemMarks;

if(mathMarks <40 || physicsMarks < 40 || chemMarks < 40){
  console.log("Result : ", Fail);
}
else {
  let average =totalMarks/3;

  if(average>=75){
    console.log("Distinction");
  }
  else if(average>=60){
    console.log("First Division");
  }
  else if(average>=50){
    console.log("Second Division");
  }
  else{
    console.log("Pass");
  }
}