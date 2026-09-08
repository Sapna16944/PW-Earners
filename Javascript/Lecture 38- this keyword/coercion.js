/*======= coercion -> type conversion(explicit and implicit coercion) =======*/


/* implicit coercion */

/*
console.log("5" + 4);          //54
console.log("2" * 5);          //10
console.log(5 - "10" );        //-5
console.log("hii" * 5);        //NaN
console.log(true + 1);         //2
console.log(true - true);      //0
console.log([] + []);          //empty
console.log([] + {});          //[object object]
console.log(NaN===NaN);        //false
*/


/* explicit coercion */


let result="hii"-6;
console.log(result);
console.log(result===NaN);          //false
console.log(Number.isNaN(result));  //true


console.log(Number("5") + 4);     //9
console.log(Number("5434h"));    //NaN



/* falsy values -> false, 0, "", undefiined, null, NaN */
console.log(!!!!"");       //false
console.log(!![]);         //true
console.log(!!0);          //false
console.log(!!"0");       //true