const user={
    name:"Aryan",
    email:"arya@gmail.com",
    welcomeMsg:function(){
        console.log(`hi, ${this.name}`);
    }
}
user.welcomeMsg()
// in above example we can clearly see this is used to get current context because we can't directly access name 
// remember if you change the name then result will be accordingly as u have not hard coded it

// imp--- in  node environment this refers to an empty object u can also verify by logging this in global scope

console.log(this);

// one more important thing to keep in mind that this current context works only for objects if you try to use it somewhere else you will not grt desired o/p

function chai(){
    const user="aryan"
    console.log(this.user);
}

chai()

// above code gives undefined output which shows that this gives current context only in objects and not in function

// now let us define an arrow function
const chao=()=>{
    console.log("hi");
}

chao()

// keep in mind that this inside the arrow function does not return anything it simply returns empty curly braces like in case when this was logged globally

// we also have an implicit return statement in an arrow function let us look at it

const add=(num1,num2)=>(num1+num2)

console.log(add(3,5));

// above we saw that we did'nt use curly braces neither the return keyword we simply wrote a single line function
//  use of parenthesis is very important u could also return an object throgh the arrow function in single line but wrap it inside parenthesis