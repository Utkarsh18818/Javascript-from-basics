// const tinderUser = new Object();    // sigelton object

const tinderUser = {};   // non-singelton-object
tinderUser.name = "Yuvraj"
tinderUser.id = "123Abe"
tinderUser.email = "Yuvi@1907gmail.com"
tinderUser.location = "jaipur"
console.log(tinderUser);

// ######################################################################################

//nested objects

const regularUser = {
    email:"Utkarsh@google.com",
      fullName:{
        userfullName:{
            firstname:"Utkarsh",
            lastname:"Singh"
        }

    }
}

// Now if we want to access our users first name see how we access.

console.log(regularUser.fullName.userfullName.firstname)     // Output ---->>>>> Ukarsh

//#########################################################################################

// Combination of two objects

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"a",4:"b"}

let obj3 = {...obj1,...obj2}          // with the help of spread operator
//let obj3 = Object.assign({},obj1,obj2);     // with the help of assign method in objects
console.log(obj3);

const user = [
    {
        id:1,
        email:"student1@college.com"
    } ,
    {
        id:2,
        email:"student2@college.com"
    },
    {
        id:3,
        email:"student3@college.com"
    }
]
console.log(user[0].email)
console.log(user[1].email)
console.log(user[2].email)

//##########################################################################################

// how do we access all keys of our object.

console.log(Object.keys(tinderUser)); // Output->>> it ll return an array of keys of tindersuser
console.log(Object.values(tinderUser)); // Output->>> it ll return an array of values of tindersuser
console.log(Object.entries(tinderUser)); // Output->>> it ll return an array conatines key value pairs init

console.log(Object.hasOwnProperty("name")); // it ll check that given proprty is exist init or not. 



// #################################################################################

// Json files and destructuring .

const course = {
    coursename:"madeJavaScriptEasy",
    fee:999,
    courseInstructor:"Yuvraj",
}

const {courseInstructor:instructor} = course // now we directly access it with help of destructuring.
                                             // here we replace courseInstructor with instructor.
console.log(instructor);












