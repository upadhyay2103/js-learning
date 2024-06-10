// data types are broadly classified as :

// 1) Primitive - (call by value -> here we do not get the reference of original data we get a copy) 
// in this category we have 7 datatypes :- string,number,boolean,null,undefined,symbol.Bigint

const id=Symbol("123");
const anotherId=Symbol("123")
console.log(id===anotherId);
// in above eg both id have differet values

// 2) Non primitive (call by reference)  -> Arrays,Objects,functions
// they have the type of == function
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

