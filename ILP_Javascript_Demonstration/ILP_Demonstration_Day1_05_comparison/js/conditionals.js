document.write("Conditionals")

// //prompt
// let age = prompt("enter a age");

// //if syntax

// if(age<18){
//     console.log("child")
//     document.write("child")
// }
// else{
//     console.log("Adult")
// }

// //other method
// console.log((age<18) ? "child" : "Adult")


// //switch
// let choice = prompt("enter number")

// switch(choice){
//     case '1':
//         console.log("Red")
//         break;
//     case '2':
//         console.log("Yellow")
//         break;
//     case '3':
//         console.log("Green")
//         break;
// }



// OR operator : ||
// AND operator : &&

// let hour_railway = 14;
// let weekend = false;

// console.log((hour_railway<9 || hour_railway>17 || weekend) ? "Office Closed!!" : "Office Open!!")

let firstName = "qqq";
let lastName = "qqq"
let nickName = "Shambu"
//"Anon"

let activeName = firstName && lastName && nickName && "Anon";
console.log(activeName)

//AND OPERATOR
console.log(true && false);
 
let activename1 = firstname && lastname && nickname && "Anon";
console.log(activename1);

// ! NOT operator

console.log(!true);
console.log(!0);

//double not
console.log(!!1);