const email="a@gmail.com"

if(email){
    console.log("user logged in");
}
else{
    console.log("problem");
}

// notice in above case we didn't check for true or false values
// truthy values are those values which are assumed to be true even if they are not exactly true
// falsey values are those values which are assumed to be false even if they are not exactly false

// falsey values ::-> null, undefined,Nan,"",false,0,-0,0n in Bigint
// apart from all these falsy values all values are considered truthy

// there are some truthy values that can surprise you
// -->"0","false",[]," ",function(){}

// nullish coalescing operator ??

let val1=null??10
// bssically its a safecheck

// we also have a ternary operator
// condition?true_statement:false_statement --> this is how it works