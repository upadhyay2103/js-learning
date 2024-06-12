// let us look at another method that is map

const myNumbers=[1,2,3,4,5,6,7,8]
const head=myNumbers.map((num)=>{
    return num+10
})

console.log(head);

// it can also return back values

// now let us look at chaining of methods 
const ans=myNumbers.map((num)=>num*10).map((num)=>num+1)
console.log(ans);
// here firstly the first method works then the result of first one is passed to the second method