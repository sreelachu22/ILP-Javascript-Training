// let arr = new Array();
// let arr2 = [];

// let fruits = ["Apple", "Orange", "Plum"];

// alert(fruits[0]); //Apple
// console.log(fruits);

// //REPLACE
// fruits[2]="Pear";
// //ADD NEW ELEMENT
// fruits[3]="Banana"
// fruits.push("Kiwi");
// //REMOVE LAST ELEMENT
// fruits.pop();
// console.log(fruits);


//Array functions
let arr3 = ['Apple',{name : 'John'},true, function () { console.log('HELLO');}]
arr3[3]();

//!REST
const numbers = [1,2,3,4,5]

const print = (args) => {
    console.log(args);
}
print(numbers)

console.log(typeof print);
console.log(typeof numbers);

const sum = (args) => {
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum += args[i]
    }
    console.log(sum);
}
sum(numbers)

//!map
const sum2 = (args) => {
    let sum2=0;
    args.map((element)=>sum2+=element);
    console.log(sum2);
}
sum2(numbers)

//!foreach
const sum3 = (args) => {
    let sum3=0;
    args.forEach((element)=>sum3+=element);
    console.log(sum3);
}
sum3(numbers)

//!Built in functions
//SORT
console.log(["z","b","c","a"].sort());//a b c z
console.log([1,10,3,5].sort());//1 10 3 5
console.log([1,10,3,5].sort((a,b)=>a-b));