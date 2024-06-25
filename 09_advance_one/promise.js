// promise is object that represents the eventual completion or failure of asynchronous operation
// below is the basic format of a promise
const promiseOne=new Promise(function(resolve,reject){
    // do an async task
    // db calls,cryptography,network calls
    // after these we give setTimeout for 1sec
    setTimeout(()=>{
        console.log("Async task !");
        resolve();
    },1000)
});
// ek baat dhyaan rakhna resolve and then are connected to each other 
// agar wha par resolve call nhi hota to promise complete nhi hota
promiseOne.then(()=>{
    console.log("ho guya complete");
})

// aise do part me karne ke bajay ek single unkit me bhi kar skte hai
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("promise is completed !!");
})

// ek baat dhyaan rakhna hum promise se values jo hume apne alag alag calls se prept hui hai use bhj bhi skte hai waaps then me uske liye bhi reolve use hojata hai

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            username:"urbaby",
            password:"pandaman"
        })
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})