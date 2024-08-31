const user = {
    username:"Yuvraj",

    loginCount:8,

    signedIn:"true",

    getuserDetails : function(){
        console.log(`Welcome ${this.username} `)  // Output = Yuvraj
       console.log(`Your login Count = ${this.loginCount}`); // Output = 8
       console.log(this);  // object 
    }

}
console.log(this)
console.log(user.getuserDetails());

//#####################################################################
// whenever we gwt date from date we use following syntax [const date = new DATE()]

//const promiseOne = new Promise()

//#####################################################################

function User(username,loginCount,isLogedin,){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedin = isLogedin;

    this.greetings = function(){
        console.log(`Welcomme ${this.username}`);
    }

    return this;
}

const User1 = new User("Yuvraj",8,true);
const User2 = new User("himanshi",3,false);
console.log(User1.constructor);
console.log(User2);

