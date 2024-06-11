// immeadiately invoked function expression
(function chai(){
    console.log(`hello`);
})();//plz rememver to add a semicolon or else error can invoke

(()=>{
    console.log(`DB connected`);
})()

// above is an iife function it is a funtion which we want to be executed immeadiately without diluting global scope variables