// let us see how can we iterate over an object
// here we will use for in loop to iterate
const myObj={
    name:"Aryan",
    age:22,
    email:"a@gmail.com"
}

for (const key in myObj) {
    // console.log(key); this prints the keys
    // console.log(myObj[key]); this prints the values
}

// this for in loop also works in arrays but here we get keys that are the indices of our array
const arr=["a","b","c","d","e"]

for (const key in arr) {
    // console.log(key); this prints the indices of array as they are the keys for our array
    // console.log(arr[key]);this prints the values of array 
}

// imp --> maps cna't be iterated using for in loops