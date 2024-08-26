// Immediately invoked fumction (IIFE)

(function info(){
    console.log("DB Connected")
})();

// 1st ()---->>>> definition 2nd ()---->>>> execution

((name)=>{
    console.log(`DB Connected TWO ${name}`)   // Through database 2nd
})("Yuvraj");




