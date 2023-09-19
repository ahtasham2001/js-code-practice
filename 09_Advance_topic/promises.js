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


// Example 4:
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Ahtasham", email: "ahtasham@gmail.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})