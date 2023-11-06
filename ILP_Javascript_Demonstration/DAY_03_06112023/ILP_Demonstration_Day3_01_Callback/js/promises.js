//!
// const count = true;

// let countValue = new Promise((resolve,reject) => {
//     if(count){
//         resolve("There is a count value.");
//     }
//     else{
//         reject("There is no count value.")
//     }
// });

// console.log(countValue)


//!
// let countValue = new Promise((resolve,   ) => {
//     resolve("Promise resolved");
// });

// const v1 = (res) => {
//     console.log(res);
//     const newRes = res + " and new value"
//     return newRes;
// }
// const v2 = (data) => {
//     console.log(data);
//     console.log("You can call multiple functions this way.");
// }

// countValue
//     .then(v1)
//     .then(v2);

//!
let countValue = new Promise((resolve,   ) => {
    resolve("Promise resolved");
});

const v1 = (res) => {
    console.log(res);
    const newRes = res + " and new value"
    return newRes;
}
const v2 = (data) => {
    console.log(data);
    console.log("You can call multiple functions this way.");
}

const v3 = (res) => {
    return new Promise((resolve,    ) => {
        console.log(res);
        setTimeout(() => {
            resolve("result from v1")
        },1000)
    })
}

countValue
    .then(v1)
    .then(v2)
    .then(v3);



