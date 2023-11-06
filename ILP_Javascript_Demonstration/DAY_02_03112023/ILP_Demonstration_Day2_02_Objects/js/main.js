//!OBJECTS
let user = new Object();//!object constructor syntax

let user2 = {
    name : "John",
    age : 30,
    place : "TVM"
};


// let key=prompt("Enter key(name,age,place) ")
// console.log(user2[key]);

//!ADD NEW KEY WITH VALUE
user2.isAdmin = true;
//!DELETE A KEY
delete user2.place;

//!DESTRUCTURING
const person = {
    firstName : "a",
    lastName : "b",
    password : "xyz"
}
const {firstName : fn , lastName : ln} = person;
console.log(fn,ln)

