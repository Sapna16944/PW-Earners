// 30. Student Result System

let studentName = "Sapna";
let rollNumber = 6;
let mathMarks = 74;
let scienceMarks = 89;
let englishMarks = 90;
let result = "PASS";

let totalMarks = mathMarks + scienceMarks + englishMarks;
console.log("Total marks : ", totalMarks);

let p = (totalMarks / 300) * 100;
console.log("Percentage : ", p);

let grade;

if (p < 0 || p > 100) {
  console.log("Invalid percentage");
} else if (p >= 90 && p <= 100) {
  grade = "A";
} else if (p >= 80 && p <= 89) {
  grade = "B";
} else if (p >= 70 && p <= 79) {
  grade = "C";
} else if (p >= 60 && p <= 69) {
  grade = "D";
} else if (p >= 40 && p <= 59) {
  grade = "E";
} else if (p >= 0 && p < 40) {
  grade = "F";
}

if (mathMarks < 40 || scienceMarks < 40 || englishMarks < 40) {
  result = "FAIL";
}

console.log("Name :", studentName);
console.log("Roll no. :", rollNumber);
console.log("Maths Marks :", mathMarks);
console.log("Science Marks :", scienceMarks);
console.log("English Marks :", englishMarks);
console.log("Total Marks :", totalMarks);
console.log("Percentage  :", p);
console.log("Grade :", grade);
console.log("Result : ", result);
