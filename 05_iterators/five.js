// now we will lokk at forEach it is the most widely used loop over the array 
const coding=["py","ruby","js","java","c++"]

coding.forEach(function(item){
    console.log(item);
})

// in for Each loop we don't need to provide condition or keep track of index it will be aitomatically handled by the forEach method
// we just need to define a callback function whose name is not given as per syntax in the parameter u could define a variable which would represent all each element of the array while iterating
// we could also use an arrow function as used below

coding.forEach((item)=>{
    console.log(item);
})

// we could also pass a self made function here

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
// keep in mind u dont need to use a parenthesis afterwards just type the name of the function

// we should also keep in mind that it not also has item as a parameter rather it also has index and the complete array

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// let us loop aover an array of objects
let myCoding=[
    {
        language:"java",
        filename:"java"
    },
    {
        language:"c++",
        filename:"cpp"
    },
    {
        language:"python",
        filename:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.language);
})