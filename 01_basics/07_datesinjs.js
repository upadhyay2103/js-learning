// dates
let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());

// remeber the typeof of date is Object

// we can also create our own date 
let myCreatedDate=new Date(2024,0,23);// starting gives year, second one gives the month, and last one the date
console.log(myCreatedDate.toDateString());

// let us look at another method
let dday=new Date("2024-06-10") // this is of the form "yyyy-mm-dd"
let dd=new Date("01-12-2021") // this is of the form "mm-dd-yyyy"
console.log(dday.toDateString());
console.log(dd.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(dd.getTime());

let newDate=new Date()
console.log(newDate.getMilliseconds());

// you can also customize the way you get date 
newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate.toDateString());