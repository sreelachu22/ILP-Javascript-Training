//!FUNCTIONS
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

function empty(){
    return "";
}
console.log(empty())

//Arrow function

const empty1 = () => " "
console.log(empty1())

const add = (a,b) => { return a+b;}
console.log(add(3,4));

const greet = name => `hello ${name}`;
console.log(greet("lachu"));

let a=10;
console.log(a);
const fun = () =>{
    let a=11;
    console.log(a);
    if(true){
        let a=12;
        console.log(a);
    }
}
fun();

const hi = () => {
    if(true){
        var message = "hello";
        console.log(message);
    }
    console.log(message); //out of scope..bt it is not error. So dont use var
}
hi()

//Hoist : block -> local -> global

//!REST and SPREAD operators
const add3 = (...args) => {
    let sum=0;
    //find sum
    return args.reduce((total, number) => total+number,0)
}

add3(1,2,3);