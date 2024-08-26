// this keyword it is used for reffer current context
// for example----------

const user = {
    username :"Yuvraj",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to our website`)
        console.log(this)   // here this give us the main context
    }
}


user.welcomeMessage()
user.username = "suman"
user.welcomeMessage()

//console.log(this)   // in node enivroment it ll give us an empty node
//#################################################
//  basic arrow function

const addTwo = (num1,num2) => {
    return num1+num2;
}
//#################################################
// implicit return

// const addTwo = (num1,num2) =>( num1 + num2 )
console.log(addTwo(3,5))

