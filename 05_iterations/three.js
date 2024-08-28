// for of loop
// it is basically used when we want to iterate on strings,array ect if remaining

let arr = ["banglore","mumbai","chennai","chattishgarh","chandigarh"];

for(let i of arr){
    console.log(i);
}
// output >>>> banglore,mumbai,chennai,chattishgarh,chandigarh 

//############################################################

// applying on strings

let name = "Yuvraj";
for(let letter of name){
    console.log(letter)
}

//#####################################################

// Maps
// map is a method which we apply on arrays to perform an instructions on all element of an array.
// it differ from foreach method in the context of returning something in output.
// it return's an array after performing such operations on given array.

//###########################################################

let myArr = [1,2,3,4,5,6]

const variable = myArr.map((val)=>{
    return val;
})
console.log(variable);

//#####################################################

// MAP 

const map = new Map()
map.set('IN','India')
map.set('US','united states america')
map.set('UAE','Emirates')
map.set('Aus','Australia')

// console.log(map);

for (const [key,value] of map) {
    console.log(key);   // Output >>>> IN , US , UAE , Aus
    console.log(value);   // Output >>>> India , united states america,Emirates,Australia
}








