// objects

const mysym = Symbol("Key1");
const Jsuser = {
    name:"Utkarsh",
    age:18,
    [mysym]:"myKey1", // if want to use it as a symbol then encolsed it into square brackets on decaleration as wel as implimentation
    location:"jaipur",
    email:"Utkarsh@college.com",
    isLoggedin:true,
    logginDays:["Monday",Tuesday],
}

console.log(Jsuser.age)    // 1 way of access
console.log("email")
console.log(Jsuser[mysym])       // another way of access

Object.freeze() // it means after freezing an object we can't change value of any existing key in object

// Now we assign function in our object

Jsuser.greeting = function(){
    console.log("hello everyone welcome in my programe")
}
Jsuser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}

console.log(Jsuser.greeting()) // when we want to use it just comment out the freez function.
console.log(Jsuser.greetingTwo()) // Execution of second method.

