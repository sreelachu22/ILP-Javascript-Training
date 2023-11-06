//! ASYNC AWAIT

// async function myFunction(parameter1, parameter2){
//     //Your asynchronous code here
// }

// const myFunction = async(parameter1, parameter2) => {
//     //Your asynchronous code here
// };

//!
// async function fn() {
//     console.log('Async function.');
//     return 1;
// }

// fn().then(v1).then(v2).catch(handleError);

// //!
// let promise = new Promise(function (resolve,reject){
//     setTimeout(function(){
//         resolve('Promise resolved')
//     },4000);
// })

// async function asyncFunc() {
//     let result = await promise;
//     console.log(result);
//     console.log("Hello");
// }

// async function asyncFunc() {
//     try {
//       let result = await promise;
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }

// asyncFunc();



//!
async function fetchData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok) {
            throw new Error(`API request failed with status : ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error('Error:', error)
    }
}

fetchData();