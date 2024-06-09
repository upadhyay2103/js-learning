let score="33";

// console.log(typeof score);

let valueInNumber=Number(score)

// console.log(typeof valueInNumber);

// do keep in mind that score can be string which is converted into a number 
// suppose score="33abc" then in that it will convert it to a number but when you wil  print it it gives Nan
// in case of score=null then when you console log it u will get 0
// in case of score=undefined also you get Nan on printing it

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// ""=> false
// "aruanb" => true

// ********************************* operations **************************************

let val=3
let NegVal=-val
// console.log(NegVal);

// console.log(2+2)
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1="hello"
let str2=" Aryan"
let str3=str1+str2
console.log(str3);

// some imp edges cases

// console.log("1"+2); => it gives 12
// console.log(1+"2") => it gives 12
// console.log("1"+2+2); => it gives 122
// console.log(1+2+"2"); => it gives 32

// console.log(+true); => it gives 1
// console.log(+""); => it gives 0

// prefix
let a=4
let b=++a
// console.log(a); it will give 5 assignement after increment

// postfix
let d=4
let c=d++
// console.log(c); it will give 4 assignment before increment