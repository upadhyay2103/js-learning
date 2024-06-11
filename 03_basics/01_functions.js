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

// let us look at yet another important thing in js if user passes lots and lots of argument how do we handle that

function cartItemsSum(...num)
{
    return num
}

console.log(cartItemsSum(100,200,300,400));
// see by using the spread operator we are able to put all the numbers into an array later we can loop over them and find their sum

function cartItemsSum2(val1,val2,...num)
{
    return num
}
console.log(cartItemsSum2(100,200,300,400,500));
// in above exaple val1 will have 100, val2 will have 200 and rest will go to num as an array

// now let us write function that handles an object

const myObj={
    name:"aryan",
    price:199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.name} and price is ${anyObj.price}`);
}

handleObject(myObj)

// similarly u can pass arrays inside the functions and play around them