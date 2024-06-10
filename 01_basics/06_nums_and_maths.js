const score=400

const balance=new Number(100) // this is the way to dynamically allocate memory
console.log(balance);

// here also like string we have various methods to work upon
// let us see some 

console.log(balance.toString()) // by using toString it has become a string so all the string operations 
// are now applicable over balance

console.log(balance.toFixed(2)) // by using it you define the number of decimal places to show

// we also have a toPrecision which takes an integer that is the place sto look for from left 
let num=1233.90909
console.log(num.toPrecision(4)); // it checks first three value and does precison check and gives 1234
console.log(num.toPrecision(5)); // now it checks the first five which also includes first decimal digit which got rounded off to 9

// we also have toLocaleString()
num=1000000000
console.log(num.toLocaleString()); // if you leave the parenthesis empty then you get commas in your num according to us standards
console.log(num.toLocaleString('en-IN'));// b\y filling these values now you will get commas according to indian standards


// ++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
// with this Math keyword we get a bunch of various functions and methods 

console.log(Math.abs(-12)); // this gives absolute of the number given in parenthesis 
console.log(Math.round(2.5)); // this returns the rounded off value of the provided integer
console.log(Math.ceil(2.2)); // this gives the rounded up number 
console.log(Math.floor(2.2)); // this gives the rounded down number
console.log(Math.min(1,2,3,4,5,-1)); // this returns the minimum value from the array of numbers provided
console.log(Math.max(3,1,5,4)); // this returns the maximum value from the array of numbers provided


console.log(Math.random());
console.log((Math.random()*10)+1);

// let us now look at the code where we have to generate the random numbers between a min and a max value
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)