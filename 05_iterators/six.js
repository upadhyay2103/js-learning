// imp --> the forEach loop does not return anything if u explicitly return anything then also it won't return anything

// for returning the values we have another method called filter, which returns some values based on a condition

const arr=[1,2,3,4,5,6,7,8,9,10]
let values=arr.filter((item)=>item>=5)
console.log(values);

// above method simply returns all the values greater then 5 or equal to 5
// keep in mind above is the case of implicit return where u dont need to write return explicitly as yo are writing it over a single line without using curly braces but as soon as u put those braces u will need to write the return keyword

let val=arr.filter((num)=>{
    return num>=5
})

console.log(val);

// if you want to do this stuff using forEach loop u can do this as shown below

let myArr=[]
arr.forEach((num)=>{
    if(num>=5){
        myArr.push(num)
    }
})

console.log(myArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);