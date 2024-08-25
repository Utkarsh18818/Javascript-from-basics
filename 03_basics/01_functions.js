// functions basics

// Example______________________________________________________
//                                                              |
function addTwonumbers(num1,num2){   // function definition  << |
    let sum = num1 + num2;
    return sum;
}

//function call

console.log(addTwonumbers(12,13));
console.log(addTwonumbers(2131312,311313));
console.log(addTwonumbers(142562,17464643));

//##########################################################################

// Example 2nd

function checkLogin(username = "sam"){
    if(!username){
        return "Please enter a username"
    }
    else if(username === ""){
        return "please enter a username"
    }
    else{
    return `${username} just logged-in`;
    }
}
console.log(checkLogin("Yuvi"));

//###############################################################################

// rest Operator in functions

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200 , 300 , 500, 2000))

// it ll return us an array of price of items .
// In the following code val1 takes 200 and val2 takes 300 and rest two comes under array return by rest operator.

//**************************************************************************** */

// passing objects in functions.

const obj = {
    name:"Yuvraj",
    price:300
}
function oderSummary(summary){
    return`oderred by ${summary.name} price of item ${summary.price}`
}

console.log(oderSummary(obj)); // Output-->>> oderred by Yuvraj price of item 300

// you can also pass direct object init.

//example:
console.log(oderSummary({
    name:"hitesh",
    price:1200           // Output->>>>>>>>>>> oderred by hitesh price of item 1200.
}))

//####################################################################################

// putting array inside it

const newArray = [100,200,300,400,500];

function returnSecondvalue(getarray){
    return `${getarray[1]}`;
}

console.log(returnSecondvalue(newArray))  //

// we can pass an array directly also 
console.log(returnSecondvalue([200,300,400,500])) // direct assignment






















