function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5());
console.log(multiplyBy5.prototype);

// Creating our own prototype

function creatUser(username, score){
    this.username =username;
    this.score = score; 
}
creatUser.prototype.increment = function(){
    this.score++;
}
creatUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new creatUser("chai",25);
const tea  = new creatUser("tea",10);

chai.printMe()
tea.printMe()