function greet(name, callback){
    console.log('Hi' + ' ' + name);
    callback();
}
function alpha(){
    console.log('I am the alpha function');
}

function beta(){
    console.log('I am the beta function');
}

greet('Peter', alpha);
greet('Tom',beta);