// some of the edges cases in comparison
// console.log("1">2); ---> false
// console.log("01">1); ---> false

console.log(null>=0);
console.log(null==0);
console.log(null>0);

// the reason why u get varying outputs here is because the eqaulity operator(==) and the
// comparison operator are quite different in working
// comparison operators(>= <= > < !=) convert null to a number that is 0

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// all these expressions will give false

// strict check using ===
// it not only checks the value but it also checks the data types