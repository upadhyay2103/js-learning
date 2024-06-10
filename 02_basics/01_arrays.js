// array

const myarr=[1,2,3,4,5]
// we can access any array element just like we do in case of c++

const arr=new Array(1,2,3,4,5,6)
console.log(arr);

// let us now look at some  of thhe methods of arrays
arr.push(12)// pushes data into the array
arr.pop()// deletes the last element
arr.unshift(10) //it adds the value given in the parenthessis at the starting of the array
arr.shift() // it deletes the element at the beginning of the array
console.log(arr);

console.log(arr.includes(4));// checks if the arr contains a paeticular value or not
console.log(arr.indexOf(3));// returns the inddex of a particulat value

newarr=arr.join() //it binds the arr into a string
console.log(newarr);

// let us see slice  which provides the selected portion of an array
console.log(arr.slice(1,3));// indices 1 and 2 will be included not 3
console.log(arr);

// we also have one method called splice which cuts of a desired portion of ans arr
console.log(arr.splice(1,3));// it cuts of index 1 2 and 3 from the original array
console.log(arr)
