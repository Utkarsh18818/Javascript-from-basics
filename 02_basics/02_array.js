// array's rest Methods

const marvel_heroes = ["captain america","Thor","ironman","Hulk"];

const dc_heroes = ["batman","superman","superhero","spiderman"];

const allHeroes = marvel_heroes.concat(dc_heroes)   // by concat method 

console.log(allHeroes)

//##############################################################################################

const All_heroes = [...marvel_heroes,...dc_heroes]  // by spread method

console.log(All_heroes)

//##############################################################################################

const another_heroes = [1, 2, 3, [ 4, 5, 6], 7,[ 6 , 7, [4 , 5]]];

const real_another_heroes = another_heroes.flat(Infinity);
console.log(real_another_heroes);

//##############################################################################################

console.log(Array.from("Yuvraj")); // it converts string into Array

//##############################################################################################

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

//##############################################################################################




