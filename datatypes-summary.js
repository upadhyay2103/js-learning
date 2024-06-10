// data types are broadly classified as :

// 1) Primitive - (call by value -> here we do not get the reference of original data we get a copy) 
// in this category we have 7 datatypes :- string,number,boolean,null,undefined,symbol.Bigint

const id=Symbol("123");
const anotherId=Symbol("123")
console.log(id===anotherId);
// in above eg both id have differet values

// 2) Non primitive (call by reference)  -> Arrays,Objects,functions
// they have the type of == object except for function which has type function
let heros=["spiderman","thor","Loki"]

let myobj={
    name:"Aryan",
    age:17,
};

const myFunctio=function(){
    console.log("Hello World");
}

// do keep in mind that js is a dynamically typed language
// in dynamically typed languages you dont nneed to define the type of data that u r going to fit in 
// for eg we type const a=100 we didn't specify it to be a number yet it worked


console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if we talk about memory we have two types of memory:::---
// Stack memory (primitive) and Heap memory (non-primitive)

let naam="Aryan"
let name2=naam
name2="anu malik"

console.log(naam);
console.log(name2);

// in above example we can see that even if we changed the value of name2 there was no change observed in naam
// this is because name2 was given a copy of naam not the reference to original memory of naam

let userOne={
    username:"aryastark",
    upi:"kalu@ybl"
}

let userTwo=userOne;

userTwo.username="kallubhairav"

console.log(userOne.username,userTwo.username);

// in above example as we change the values of username it got reflected in userOne becuase the object
// is stored in heap whose reference is stored in stack memory 