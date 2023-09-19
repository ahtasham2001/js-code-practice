// Example 1:

const promiseOne = new Promise(function(resolve,reject){
    // Do an async Task 
    // DB calls, cryptography
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise Consumed")
})


// Example 2:

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// Example 3:

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Ahtasham", email: "ahtasham@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})