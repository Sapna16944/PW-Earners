//map , filter, reduce :- immutable methods

let originalPrice = [400, 600, 2000];
let discountPrices = [];
// for(value of originalPrice){
//   discountPrices.push(value*0.9)  // 10% discount
// }

originalPrice.forEach((value) => {
  discountPrices.push(value * 0.9); // 10% discount
});
//console.log(originalPrice);
console.log(discountPrices);

// map method 

const discountPrice2 = originalPrice.map((value) => {
  return value * 0.9;
});
console.log(discountPrice2);

//array of object

let students = [
  {
    name: "Ayaan",
    marks: 56,
  },
  {
    name: "Mansi",
    marks: 46,
  },
  {
    name: "Ishu",
    marks: 33,
  },
  {
    name: "Shivam",
    marks: 30,
  },
  {
    name: "khushboo",
    marks: 20,
  },
]

/* let studentNames = [];
students.forEach((value) => {
  studentNames.push(value.name);
});
console.log(studentNames); */

const studentNames=students.map((student)=>{
  return student.name;
})
console.log(studentNames);
const studentMarks=students.map((students)=>{
  return students.marks;
})
console.log(studentMarks);

// let boostedMarks=students.map((student)=>{
//   return {...student, marks : student.marks+10}
// })  
let boostedMarks=students.map((student)=>( {...student, marks :student.marks+10}
))
console.log(boostedMarks);



// filter method 




/*  failedStudents=[];
students.forEach((student)=>{
  if(student.marks<33){
    failedStudents.push(student);
  }
})
console.log(failedStudents); */
const failedStudents=students.filter((student)=>student.marks<33);
console.log(failedStudents);
//chaining
const failedStudentsNames=students.filter((student)=>student.marks<33).map((student)=>student.name)
console.log(failedStudentsNames);


// reduce method

let marks=[56, 24, 52, 73, 78];

/* let totalmarks=0;
marks.forEach((mark)=>totalmarks+=mark);
console.log(totalmarks); */

const totalMarks=marks.reduce((accumulator, currentValue)=>{
  return accumulator+=currentValue;
},0)
console.log(totalMarks);

const attendance=["present", "absent", "present", "absent", "present"];

/* let obj={}
attendance.forEach((value)=>{
  if(obj[value]){
    obj[value]=obj[value]+1;
  }else{
    obj[value]=1;
  }
})
console.log(obj); */

const obj=attendance.reduce((acc, value)=>{
  /* if(acc[value]){
    acc[value]=acc[value]+1;
  }else{
    acc[value]=1;
  }
  return acc; */

  acc[value]=(acc[value] || 0) + 1;
  return acc;
},{}) 


console.log(obj);