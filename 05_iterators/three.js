// for of --> it is one of the array specific loop
// [" ","","",""] -> array of strings
// [{},{},{},{}] -> array of objects


const arr=[1,2,3,4,5,6,7]
for (const num of arr) {
    console.log(num);
}

const greetings="Hello World!"
for (const greet of greetings) {
    console.log(greet);
}

// Map -> a special kind of datastructures that are used to hold unique key value pairs in them
const map=new Map()
map.set("IN","INDIA") // set method is used to insert unique key value pairs iiinside the map
map.set("USA","United States of America")
map.set("FR","France")

// console.log(map);

// basically we destructure the map into key and values and then we iterate
for (const [key,val] of map) {
    console.log(`${key} :- ${val}`);
}

// keep in mind we can't iterate through objects using this loop