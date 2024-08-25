// here are two type of data type in javascript.
//                /      \
//               /        \
//          Primitive    non-Primitive
//           |               |
//           |               |_______>>>> Arrays , Functions , Objects. 
//           |
//           |_______>>> String , Number , Boolean , Null , undefined , Symbol , Bigint.


// non-primitive datatypes
let dcHeroes = ["superman","batman","ironman","black panther"];

const myobj = {
    name:"Yuvraj",
    age:"20",
    profession:"software developer",
    salary:21000,
    company:"tcs",
    email:"student@college.com"
}

//####################################################################################


// function 
const calculatesum = function(num1,num2){
    sum = num1 + num2;
   return sum   //        ______>> num1
}   //                   | _________>> num2
//                       | |
console.log(calculatesum(2,3))