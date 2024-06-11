// if
condition=true
if(condition){

}
// if condition is true if block is executed else not
// in these conditions we will make use of the > < >= <= == != ===
// keep in mind = is for assignment == does not check for datatypes and === does check datatypes

if(2=="2"){
    console.log("executed");
}

if(2==="2"){
    console.log("executed");
}

// upper loop will be executed not the lower one just because of the difference of == and ===
// we also have else statement

if(2==="2"){
    console.log("hello");
}else{
    console.log("bye");
}

// we can also write conditional in one line 
if(2==="2") console.log("hi my dear");
// but this is not a good practice

// we can also have nested conditional statements
let bal=1000

if(bal<500){
    console.log("less then 500");
}
else if(bal<740){
    console.log("less then 740");
}
else if(bal<900){
    console.log("less then 900");
}
else{
    console.log("hi bye");
}

// we can also check two or more conditions together

let isLoggedIn=true
let hasCard=true
let google=true
let email=false

if(isLoggedIn && hasCard){
    console.log("user can buy");
}

if(google || email){
    console.log("user logged in");
}
