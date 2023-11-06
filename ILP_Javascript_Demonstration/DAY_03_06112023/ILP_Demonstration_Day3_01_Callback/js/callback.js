// const ages = [32,33,16,40];
// const result = ages.filter(checkAdult);

// function checkAdult(age){
//     return age>=18
// }

// console.log(ages)
// console.log(result)


// const nums = [32,-10,23,-34];

// function checkNegative(num){
//     return num>=0
// }

// function displayResult(numArr,callback){
//     console.log(numArr.filter(callback))
// }

// displayResult(nums,checkNegative)

//!convert into arrow function
// setTimeout(function() { myFunction("Hello World!");},3000);

// function myFunction(value){
//     document.getElementById("demo").innerHTML=value;
// }


// setTimeout(() =>  { myFunction("Hello World!");},3000);

// function myFunction(value){
//     document.getElementById("demo").innerHTML=value;
// }

function handleInput(operation){
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    let res = 0;
    if(operation === 'sum'){
        res = arrayOperations(number1,number2,sum)
    }
    else if(operation === 'diff'){
        res = arrayOperations(number1,number2,diff)
    }
    console.log(res)
    document.getElementById("result").innerHTML = res;
}

function sum(num1,num2){
    return num1+num2;
}
function diff(num1,num2){
    return num1-num2;
}

function arrayOperations(n1,n2, op){
    return op(n1,n2);
}