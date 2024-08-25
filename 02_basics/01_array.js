//**********************      Array      ***************************


let myarr = [1,2,3,4,5,6];

let dcHeroes = ["batman","superhero","spiderman","superman","blackpanther"];

let myarr2 = new Array(7,8,9,10);

console.log(myarr[4]);
console.log(myarr2[3]);
// ______________________________________________________________________________________

// Array Methods 

//#######################################################################

//push Example------>>>>>>>>
myarr.push(12);
console.log(myarr)     // Outupt----->>>>>[1,2,3,4,5,6,12]
// it adds given value at the end of the array 

//#######################################################################

// pop Example------>>>>>>>>>
myarr.pop()
console.log(myarr);    // Outupt----->>>>>[1,2,3,4,5,6]
// it removes value from the last of the array

//#######################################################################

// unshift example
myarr.unshift(10);
console.log(myarr); // Output---->>>>[10,1,2,3,4,5,6]

// it adds a value in the starting of the array.

//########################################################################

myarr.shift();
console.log(myarr);  //Output--->>>> [1,2,3,4,5,6]

// it removes first element from the given array.

//#########################################################################


//                         _______>>>>>>> starting index.(included)
// Slice Example           |  __________>>>>>>> Ending index.(Excluded)
//                         |  |
const newarr = myarr.slice(1,4);     // Output-->>[2,3,4];
console.log(newarr);

// it ll give a new array in which elements present as per our slice method applied.
// here last index is not included.

//##################################################################

// includes Example.

console.log(myarr.includes(50)); // Output false
console.log(myarr.includes(3));  // Output true

// it returns always a boolean.
// it is a method which checks or interogate our array.


//########################################################################

//  indexof Example

console.log(myarr.indexOf(12));  // Output = -1
console.log(myarr.indexOf(2));   // Output = 1 

// it ll return us index of particular elemant.

//#######################################################################

//join()  Example
let nArr = myarr.join();
console.log(nArr);          // Output 1,2,3,4,5,6

// it ll convert our array into strings and seprate all of its elements with commas

//########################################################################

// Splice Example

let sArr = myarr.splice(1,3);
console.log(sArr);     // Output =>>> [2,3,4]

console.log(myarr);    // Output =>>> [1,5,6]

// here we can see clearly it manipulate our real array it means its truncate our array























