const name="Aryan"
const repoCount=50
console.log(name+repoCount);// this is older way of string concatenation
console.log(`My name is ${name} and i have ${repoCount} repos`);

// we can also dynamicallly allocate string
const gameName=new String("gta V")
console.log(gameName);
// the main point is through above method a key value pair of string is stored as object 
// like index is key and char at taht index will be value eg-> 0=g , 1=t etc.
// not only this it comes with many built in functions that we can use 
console.log(gameName[0]);
// there are many methods for us to use like length
console.log(gameName.length);
// there are many methods just peint the string in console to geth the list of them in prototype 
console.log(gameName.toUpperCase());// but this does not change the og string
// we could also get the index of particular char
console.log(gameName.indexOf('a'));
// there is another method of substring
console.log(gameName.substring(0,2));
// we also have a slice function and it can also accept negative values

// we also have an interesting function trim which removes extra spaces
const gang="   chuk nhi b rga   "// basically it removes initial and end spaces
console.log(gang);
console.log(gang.trim());

// we can also replace any part of the string
console.log(gang.replace("chuk","bhaad me jao"));
// we can also check if it contains a certain 
console.log(gang.includes("chuk"));

// we also have split method with the help o which we can definitely split our string into arrays based on some separator
const arr=gang.split(" ")
console.log(arr);

//  we have some more let us list them
// >> charCodeAt() -> it takes the index and returns unicode of that caharacter in utf-16
// >> codePointAt() -> it does the same job as charCodeAt()
// >> endsWith() -> it takes a string as an input and gives true if og strings ends with the given string eg-> gang.endsWith(" ")-> it will give true
// >> isWellFormed() -> checks if the string is well formed or not
// >> lastIndexOf() -> it also takes a string and return the last occurence of it in main string
// >> match() -> returns the result of matching a string against regular expression(regex)