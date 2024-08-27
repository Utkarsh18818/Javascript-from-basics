// for

// for( let i=1 ; i<=10 ; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(i);
// }


// console.log("i") >>>>>>>> it is not accessible ouside loop because its scope limits inside loop

//##############################################################

// for(let i=1 ; i<=10; i++){
//     console.log(`Outer loop value:${i}`)
//     for(let j=1 ; j<=10 ; j++){
//         //console.log(`Inner loop value:${j} and inner loop ${i}`)
//         console.log(i + " * " + j + " = " + i*j);
//     }
// }

//###############################################################

// let myArr = ["flash","batman","superman","spiderman"];
// console.log(myArr.length)
// for(let i=0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

//################################################################

// break and continue statements

// for(let i=0; i<=10; i++){
//     const element = i;
//     console.log(element);
//     if(element === 5){
//         break;
//     }
// }
console.log("5 is detected")
//################################################################

// continue

for(let i=1; i<=10; i++){
    const element = i
    if(element === 5){
        console.log("5 is detected")
        continue
    }
    console.log(element);
}













