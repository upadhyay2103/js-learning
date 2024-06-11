// let us look at functions

// basic
function himsg(){
    console.log("Hi");
}

// function that returns
function add2num(num1,num2)
{
    return num1+num2
}
const result=add2num(2,9)

// function that prints hello for user
function greet(user)
{
    return `hi, ${user}!`
}
const res=greet("aryan")
console.log(res);

// now to add security and avoid risk we can add if statement to judge whether user is defined or not
function greeting(user)
{
    if(!user)
    {
        console.log("enter the username");
        return
    }
    return `hi, ${user}`
}

// not only this u could also add default values which will be overwritten in case you provide user a value else it will take the value by default