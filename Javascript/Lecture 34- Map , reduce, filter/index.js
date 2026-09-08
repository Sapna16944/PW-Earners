let student={
  name:"Sapna",
  rollNo:34,
  subjects:["Maths", "English", "Hindi"],
}
//destructuring

//let{subjects, name, rollNo}=student;
//console.log(subjects);


//spread operator

//let {subjects, ...hello}=student;
//console.log(hello);


//how to rename key

/* let {subjects : vishay,  ...vriables}=student;
console.log(vishay); */


//use default value

/* let {subjects : vishay,totalMarks=500, ...vriables}=student;
console.log(totalMarks); */

//merge  objects

let obj1={
  name:"Vishal",
  phone:9878765547,
}
//let India="country";
let obj2={
  address:"India",
  adharCard:857784648759,
  name:"Yash",
}
let obj3={...obj1, ...obj2};
console.log(obj3);


// array and object update

//array update

let arr=[1, 2, 3, 4];
arr[1]=5;
console.log(arr);

//object update

const obj={
  name:"Neha",
  rollNo:6,
}
obj["name"]="Sapna";
console.log(obj);

//delete
delete obj.rollNo;
console.log(obj);



//splice method

let arr1=[1, 2, 3, 4, 5, 6];

//arr1.pop();
//console.log(arr1);  // [1, 2, 3, 4, 5]

//arr1.push(7);
//console.log(arr1);  //[1, 2, 3, 4, 5, 6, 7]

//arr1.shift();
//console.log(arr1);  //[2, 3, 4, 5, 6]

//arr1.unshift(0);
//console.log(arr1);  //[0, 1, 2, 3, 4, 5, 6]

//arr1.splice(1, 2);    //delete
//console.log(arr1);  //[1, 4, 5, 6]

//arr1.splice(3,0,10);   //add
//console.log(arr1);     //[1, 2, 3, 10, 4, 5, 6]

//arr1.splice(3, 1, "replace");   //replace
//console.log(arr1);   //[1, 2, 3, "replace", 5, 6]


//  slice method :- array trim krna

//let trimArr=arr1.slice(1, 4);
//console.log(trimArr);

//console.log(arr1.indexOf(2));

//find method  

let res=arr1.find((value)=>{
  if(value===3){
    return value;
  }
})
console.log(res); 

let resIndex=arr1.findIndex((value)=>{
  if(value===3){
    return value;
  }
})
console.log(resIndex);

//flat method :-flat at 1 level

let arr3=[1, 2, 3, 4, 5,[6, 7, 8,[9, 10, 11, [12, 13, 14]]]];
let arrFlat=arr3.flat(Infinity)
console.log(arrFlat);


//mutability :- change original variable
// copy by reference 
let arr4=[2, 3, 4, 5, 6, 7, 8];
//arrCopy=arr4;
arrCopy2=[...arr4];   //solution
//arrCopy.pop();
arrCopy2.pop();
console.log("arr4 : ", arr4);
//console.log("arrCopy : ", arrCopy);
console.log("arrCopy2 : ", arrCopy2);


// map , filter, reduce :- immutable methods


//map method

