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