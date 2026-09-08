// 13. Student Grade

let p=98;

if(p<0 || p>100){
  console.log("Invalid percentage");
}
else if(p>=90 && p<=100 ){
  console.log("Grade A");
}
else if(p>=80 && p<=89 ){
  console.log("Grdade C");
}
else if(p>=70 && p<=79){
  console.log("Grade C");
}
else if(p>=60 && p<=69){
  console.log("Grade D");
}
else if(p>=40 && p<=59){
  console.log("Grade E");
}
else if(p>=0 && p<40){
  console.log('Grade F');
}
