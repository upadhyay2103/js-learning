// singleton

// objects literals
const myObj={
    name:"aryan",
    age:18,
    location:"Rudrapur",
    email:"arya@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// here we have key and value pairs, we can definr our own key

// to access the values of objects we have two ways one is dot notation and other square bracket notation
// square bracket method is generally preferred

console.log(myObj.email);
console.log(myObj["email"]);

// now how can one define a symbol as a key in his object
const sym=Symbol("key1")

const obj={
    [sym]:"jkwallputti"// this is the way of defining a symbol as a key in object
}

console.log(obj[sym]);

// if we don't want our objects value to be changed we will freeze our object
// Object.freeze(myObj)

// we can also have functions as a member in an object
myObj.greeting=function(){
    console.log("hello everyone");
}

// let us definr another function which also gives user's name
myObj.greetingTwo=function(){
    console.log(`hello, ${this.name}`);// this refers to the object we are working in
}

console.log(myObj.greeting());// keep in mind functions are to be used with parenthesis
console.log(myObj.greetingTwo());