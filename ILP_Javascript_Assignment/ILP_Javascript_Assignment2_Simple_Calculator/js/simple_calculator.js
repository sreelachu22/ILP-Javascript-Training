let number1 = parseInt(prompt("Enter Number 1: "))
let number2 = parseInt(prompt("Enter Number 2: "))

const addition = (a,b) => { 
    return a+b;
}
const subtraction = (a,b) => { 
    return a-b;
}
const multiplication = (a,b) => {
    return a*b;
}
const division = (a,b) => { 
    if (b !== 0) {
    return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

let choice = prompt('Enter operation (1.add, 2.subtract, 3.multiply, 4.divide):')
switch(choice){
    case '1':
        console.log(addition(number1,number2));
        break;
    case '2':
        console.log(subtraction(number1,number2));
        break;
    case '3':
        console.log(multiplication(number1,number2));
        break;
    case '4':
        console.log(division(number1,number2));
        break;  
    default:
        console.log("enter correct option"); 
}