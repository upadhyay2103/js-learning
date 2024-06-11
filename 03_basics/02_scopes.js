// scope is basically the region where a function, conditional or loop shows there effect it is shown with the help of curly braces {}
// we want that variables should be accesible within a particular scope where they are defined and not outside but this was not the case with var and thats why const and let came out

{
    var a=10
}

console.log(a);
// above code prints 10 but is should throw error due to scope a is defied in a curly braces so its scope should be within that not outside it

// basically there are two scopes block scope and a global scope 
// block scope is the scope of a block it may be consitional ,loops ,functions but not object
// global scope is whatever outside the block scope 

// now let us nesting of scopes

function one(){
    const user="Aryan"
    function two(){
        const website="youtube"
        console.log(user);
    }

    // console.log(website);
    two()
}

one()

// above function gives error because website is block scope for function two but is accessed outside it if u remove log of website it will work fine

// ++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++

// functions can also be declared in an variable
const power2=function(num){
    return num**2;
}

console.log(power2(2))
// one thing is that you can't call this function before defining it