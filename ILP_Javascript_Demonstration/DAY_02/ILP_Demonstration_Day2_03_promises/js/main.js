//!Timer

// setTimeout(()=>{
//     console.log("after 2 seconds")
// },2000)


//!CONSTRUCTOR
let promise = new Promise(function (resolve , reject){
    setTimeout(()=>resolve("done"),1000);
    //setTimeout(()=>reject( new Error("Some error")),1000);
})

console.log(promise)

//!EXECUTOR
promise.then((result) => console.log(result))
    .catch((error)=>console.log(error.message))

