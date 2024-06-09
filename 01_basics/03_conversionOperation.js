let score="33";

console.log(typeof score);

let valueInNumber=Number(score)

console.log(typeof valueInNumber);

// do keep in mind that score can be string which is converted into a number 
// suppose score="33abc" then in that it will convert it to a number but when you wil  print it it gives Nan
// in case of score=null then when you console log it u will get 0
// in case of score=undefined also you get Nan on printing it

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// ""=> false
// "aruanb" => true