// singleton objects -> when created thhrough constructor
const myObj=new Object()
const myObj2={}
// plz note that above two objects have no difference at all

myObj2.id="123abc"
myObj2.name="aryan"
myObj2.loggedIn=false

// we can also have nesting inside objects 

const obj={
    email:"jagrata@gmail.com",
    fullName:{
        userName:{
            firstName:"Aryan",
            lastName:"Upadhyay",
        },
    }
}

// the nested values can be achieved by continuous dot notation
console.log(obj.fullName.userName.firstName);
// optional chaining can also be done with the help of a question mark '?'

// merging of objects
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
// const obj3={obj1,obj2} // this one creates the same problem as we faced while merging the objects together
// a better way to merge different objects lies beneath using Object.assign()
// const obj3=Object.assign({},obj1,obj2)// basically initial curly braces shows the target object that is formed and return

// but we won't be using the above mentioned methods to merge different objects rather we will be using spread operator just like the arrays
const obj3={...obj1,...obj2}
console.log(obj3);

// one of the most important method is we can get an array of keys for a particular object
console.log(Object.keys(myObj2));// do keeep in mind it returns an array
console.log(Object.values(myObj2)); // it extracts all the values and it also returns an array of values
console.log(Object.entries(myObj2)); // it just forms a key value pair into a separate array and returns an array of arrays

// we also have an important method that returns whether our object has a particular property or not
console.log(Object.hasOwnProperty('name'));

// now we will discuss destructuring of objects
const course={
    name:"js-course",
    price:999,
    instructor:"Aryan",
}

// now we can access properties and turn them into variables through destructuring
const {instructor}=course;
console.log(instructor);

// when api call is made then we receive in form of json(javascript object notation) 