// let us look at reduce methods in js
const myNums=[1,2,3,4]

const total=myNums.reduce((acc,currval)=>{
    return acc+currval
},0)//here you are givibg initial value to initialise acc

console.log(total);
// in reduce you have acc that is accumulator and an currval which refers to the current value of the array , now this acc is initialsed with 0 and everytime is added with the currval of the array