// if 
// comparison operators ----->>> === , !== , == , != , <= , >= , < , > , = , true , false
const isUserLoggedin = true;

// if else statements 

if( 2!=="2" ){
    console.log("executed");
}
//#####################################################
let temprature = 51;

if(temprature < 50){
    console.log("Tempraature is lower than 50")
}
else{
    console.log("temprature is graater than 50 ")
}
//######################################################

// here we see how scope works and exexutes
const score = 200
//              After fulfilling if conditions if scope come into play its scope limits ouside ccutly braces but.  
if(score > 100){         // if use var instead of let and const it can accessible in global enviroment. 
    const user = "karan"
    console.log(`hello ${user}, your order is on the way`);
}
 console.log(user);

//#########################################################################

const userLoggedin = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmail = true;
// here we use and logical operator (&&) which is use for condition between two variables 
if(userLoggedin && debitCard ){      // it gives true output only when both conditions satisfied
    console.log("Alloww to buy courses");
}
else{
    console.log("Not Allow to buy anything");
}
//###################################################################

// here we use or logical operator (||) which gives true  output if anyone statement is true
 if(loggedFromGoogle || loggedFromEmail){
    console.log("Successfully logged-in");
}
 else{
     console.log("logged-in failed")
 }
//###################################################################














