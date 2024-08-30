// promises //

const promiseOne = new Promise(function(resolve,reject){
    // Async tasks
    //DB calls , network , cryptography.

    setTimeout(()=>{
        console.log("Async task is completed")
        resolve()
    },1000)
}) 
promiseOne.then(function(){
    console.log("promise consumed");
})

//#######################################################################

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2nd is going on")
        resolve()
    },3000)
}).then(()=>{
    console.log("Our 2nd Async task is resloved")
})

//#######################################################################

// third kind of promises

const ThreePromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({user:"Yuvraj",email:"Yuvraj@college.com"})
    },1000)     //Here we pass an object inside resolve
})

ThreePromise.then(function(user){
    console.log(user); // here we access the object which we pass in resolve.
})

// #################################################################

// promise 4

const promiseFour = new Promise(function(resolve,reject){
    
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Yuvraj",password:"123"})
        } else{
            reject('ERROR Something went wrong')
        }
    },1000)
})

// //###################################################################
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("the promise is either resolved or rejected"))


// #####################################################################

// IN promisefour and promisefive you can use one of them in which you are comfortable to understand

// promise five.

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Javascript",password:"123"})
        } else{
            reject('ERROR JS went wrong')
        }
    },2000)
})
// Async Await Functions

async function comnsumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

comnsumepromiseFive()

//######################################################

// fetch() method

async function getAllinfo() {
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}

getAllinfo();

//###################################################################

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then((result)=>{
    console.log(result);
})
.catch(()=> console.log(error))

//####################################################################


