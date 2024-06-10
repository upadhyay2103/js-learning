let marvel=["thor","spiderman","antman"]
let dc=["superman","batman","flash"]

// marvel.push(dc)
// console.log(marvel);
// here we push an array into another so the pushed array becomes an element of this array

// we also a concat method which merges two arrays into a new arrays
const all=marvel.concat(dc)
console.log(all);

// there is a much simpler way to merge two arrays together by using spread operator
const all_new=[...dc,...marvel]
console.log(all_new);

//  we also have a method through which all the subarrays will be concatenated into a single array
let sup_arr=[1,2,3,[2,3],[1,2,3,[2,3,4,1]],11,12]
let new_sup=sup_arr.flat(Infinity)// in the parennnthesis we pass depth 
console.log(new_sup);

// we can also convert other datatypes into an array
console.log(Array.isArray("hitesh"));// it tells whether given value is an array or not
console.log(Array.from("aryan")); // it converts it into array
// keep in mind if you directly give the above function a object it won't be able to convert it into an array
